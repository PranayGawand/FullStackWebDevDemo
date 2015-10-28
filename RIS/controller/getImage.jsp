<HTML>
<TITLE>Picture upload page</TITLE>
<BODY>
	<%@ page import="java.sql.*"%>
	<%@ page import="java.io.*"%>
	<%@ page import="javax.servlet.*"%>
	<%@ page import="javax.servlet.http.*"%>
	<%@ page import="java.util.*"%>
	<%@ page import="oracle.sql.*"%>
	<%@ page import="oracle.jdbc.*"%>
	<%@ page import="java.awt.Image"%>
	<%@ page import="java.awt.image.BufferedImage"%>
	<%@ page import="javax.imageio.ImageIO"%>
	<%@ page import="org.apache.commons.fileupload.DiskFileUpload"%>
	<%@ page import="org.apache.commons.fileupload.FileItem"%>
	<%!
    	public static BufferedImage shrink(BufferedImage image, int n) {

        	int w = image.getWidth() / n;
        	int h = image.getHeight() / n;

        	BufferedImage shrunkImage = new BufferedImage(w, h, image.getType());

        	for (int y=0; y < h; ++y)
            	for (int x=0; x < w; ++x)
                	shrunkImage.setRGB(x, y, image.getRGB(x*n, y*n));

        	return shrunkImage;
    	}
	%>
	<%
	if (((Boolean)session.getAttribute("isOracleLogin")) && ((Boolean)session.getAttribute("isUserLogin"))){
			String response_message = "";
			int pic_id;
		    String sqlname = (String)session.getAttribute("SQLUSERID");
		    String sqlpwd =  (String)session.getAttribute("SQLPASSWD");
			Connection con = null;
		   	String driverName = "oracle.jdbc.driver.OracleDriver";
			String dbstring = "jdbc:oracle:thin:@gwynne.cs.ualberta.ca:1521:CRS";
			Boolean canConnect = true;
			try{
        		Class drvClass = Class.forName(driverName);
				DriverManager.registerDriver((Driver)drvClass.newInstance());
        		con = DriverManager.getConnection(dbstring,sqlname,sqlpwd);
         		con.setAutoCommit(true);
        	}
        	catch(Exception e){
        		canConnect = false;
	        	out.println("<hr>" + e.getMessage() + "<hr>");
		    	out.println("<script language=javascript type=text/javascript>");
		    	out.println("setTimeout("+"\"javascript:location.href='../view.uploadImg.html'\""+", 3000);");
		    	out.println("</script></div>"); 
        	}
			if(canConnect){
				try{
					Integer rec_id = (Integer)session.getAttribute("rec_id");
					out.println("<p><CENTER>record ID: "+rec_id+"</CENTER></p>");
					DiskFileUpload diskFileUpload = new DiskFileUpload();

				    List files = diskFileUpload.parseRequest(request);

				    Iterator i = files.iterator();

				    FileItem file = null;

				    while (i.hasNext()) {
				    	file = (FileItem) i.next();
				    	if(file!=null){
				    		InputStream inStream=file.getInputStream();
				    		BufferedImage image=ImageIO.read(inStream);
				    	    if(image==null){
				    	    	break;
				    	    }
				    	    BufferedImage thumbNail=shrink(image,10);
				    	    BufferedImage NormalSize=shrink(image,2);

				    	    Statement s = con.createStatement();
				    	    ResultSet rset1 = s.executeQuery("select count(*) from pacs_images"); // Changed 2015-04-01; here may need to be changed
				    	    rset1.next();
				    	    
				    	    //out.println("<p><CENTER> rset1.next() = "+rset1.next()+"</CENTER></p>");
			    	    	pic_id = rset1.getInt(1);
			    	    	//out.println("<p><CENTER>stop at above line : "+rec_id+"</CENTER></p>");
			    	    
			    	    	//out.println("<p><CENTER> pic_id = "+pic_id+"</CENTER></p>");
				    	   /*  if (rset1.next()) {
				    	    	out.println("<p><CENTER> rset1.next() = "+rset1.next()+"</CENTER></p>");
				    	    	pic_id = rset1.getInt(1);
				    	    	out.println("<p><CENTER>stop at above line : "+rec_id+"</CENTER></p>");
				    	    
				    	    	out.println("<p><CENTER> pic_id = "+pic_id+"</CENTER></p>");
				    	    }
				    	    else {
				    	    	pic_id = 1;
				    	    	out.println("<p><CENTER> pic_id = "+pic_id+"</CENTER></p>");
				    	    } */
				    	    
				    	    s.execute("INSERT INTO pacs_images VALUES("+rec_id+","+pic_id+",empty_blob(),empty_blob(),empty_blob())");
				    	    ResultSet resSet_II=s.executeQuery("SELECT * FROM pacs_images WHERE record_id="+rec_id+" AND image_id="+pic_id+" FOR UPDATE");
				    	    
				    	    BLOB fullSize=null;
				    	    BLOB normalSize=null;
				    	    BLOB tag=null;
				    	    
				    	    while(resSet_II != null && resSet_II.next()){
				    	    	fullSize=((OracleResultSet)resSet_II).getBLOB("full_size");
				    	    	normalSize=((OracleResultSet)resSet_II).getBLOB("regular_size");
				    	    	tag=((OracleResultSet)resSet_II).getBLOB("thumbnail");
							}
				    	    OutputStream outStreamForFullSize=fullSize.getBinaryOutputStream();
				    	    OutputStream outStreamForNormalSize=normalSize.getBinaryOutputStream();
				    	    OutputStream outStreamForTag = tag.getBinaryOutputStream();
				    	    
				    	    ImageIO.write(thumbNail,"jpg", outStreamForTag);
				    	    ImageIO.write(NormalSize,"jpg", outStreamForNormalSize);
				    	    ImageIO.write(image,"jpg", outStreamForFullSize);
				    	    
				    	    inStream.close();
				    	    outStreamForFullSize.close();
				    	    outStreamForNormalSize.close();
				    	    outStreamForTag.close();
				    	    
				    	    s.executeUpdate("commit");
				    	    response_message = " Upload OK!  ";	
							out.println("<HTML><HEAD><TITLE>Upload Message</TITLE></HEAD>");
							out.println("<body><div style='background: url(../theme.jpg); width: 100%; height: 100%; background-size: 100%;'>");
							out.println("<br><br><br><br><br>");
							out.println("<center><b>"+ response_message +"</b></center>");
							out.println("</div></BODY></HTML>");
					    	out.println("<script language=javascript type=text/javascript>");
					    	out.println("setTimeout("+"\"javascript:location.href='../view/radiologist.html'\""+", 3000);");
					    	out.println("</script></div>");
				    	}
				    }
				}
	        	catch(Exception ex){
			        //out.println("<hr>" + ex.getMessage() + "<hr>");
			        response_message = ex.getMessage();
					out.println("<HTML><HEAD><TITLE>Upload Message</TITLE></HEAD>");
					out.println("<body><div style='background: url(../theme.jpg); width: 100%; height: 100%; background-size: 100%;'>");
					out.println("<br><br><br><br><br>");				
					out.println("<center><b>"+response_message +"</b></center>");
					out.println("</div></BODY></HTML>");
			    	out.println("<script language=javascript type=text/javascript>");
			    	out.println("setTimeout("+"\"javascript:location.href='../view/uploadImg.html'\""+", 2500);");
			    	out.println("</script></div>");
	        	}
				    
			}
			con.close();
			out.println("<HTML><HEAD><TITLE>Upload Message</TITLE></HEAD>");
			out.println("<body><div style='background: url(../theme.jpg); width: 100%; height: 100%; background-size: 100%;'>");
			out.println("<br><br><br><br><br>");
			out.println("<center><b>Can't upload file other than jpg!</b></center>");
			out.println("</div></BODY></HTML>");
	        out.println("<script language=javascript type=text/javascript>");
	    	out.println("setTimeout("+"\"javascript:location.href='../view/radiologist.html'\""+", 3000);");
	    	out.println("</script></div>"); 
	} else {
		if ((Boolean)session.getAttribute("isOracleLogin")){
			out.println("<br><br><br><br><br><p><CENTER><b><b><b><h1>You didn't login RIS!</h1></b><b><b></CENTER></p>");
			out.println("<script language=javascript type=text/javascript>");
			out.println("setTimeout("+"\"javascript:location.href='../view/login.html'\""+", 2500);");
			out.println("</script>");
		}
		
		else{
			out.println("<br><br><br><br><br><p><CENTER><b><b><b><h1>You didn't login the oracle database!</h1></b><b><b></CENTER></p>");
			out.println("<script language=javascript type=text/javascript>");
			out.println("setTimeout("+"\"javascript:location.href='../index.html'\""+", 2500);");
			out.println("</script>");
		}
	}
    %>
</BODY>
</HTML>
