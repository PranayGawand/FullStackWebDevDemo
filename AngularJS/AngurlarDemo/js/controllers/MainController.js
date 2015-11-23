app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'The Book of Trees'; 
  $scope.promo = 'All of books are selling with at least 50% discount!';
	$scope.products = [ 
  { 
    name: 'Introduction to Algorithms 2ed.', 
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/algo.jpg',
    likes: 0,
    dislikes: 0
  }, 
  { 
    name: 'Computer Organization', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/org.jpg',
    likes: 0,
    dislikes: 0
  },
    { 
    name: 'C programming language', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/c.jpg',
    likes: 0,
    dislikes: 0
    },
    { 
    name: 'Thinking in java', 
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/java.jpg' ,
    likes: 0,
    dislikes: 0
    }
]
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
};
  $scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
};
}]);