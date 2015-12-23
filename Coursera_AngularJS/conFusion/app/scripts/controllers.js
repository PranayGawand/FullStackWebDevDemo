'use strict';

angular.module('confusionApp')

        // menu page controller
        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            
            // dishes data 
            $scope.dishes=menuFactory.getDishes();
            
            // tab manipulation             
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            // check whether selected tab is active, return true is selected
            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        
        // contactus page controller 
        .controller('ContactController', ['$scope', function($scope) {

            // a feedback object
            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            // question: ? why not $scope
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        // feedback form controller, at page contactus.html
        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
            var dish= menuFactory.getDish(parseInt($stateParams.id,10));
                        $scope.dish = dish;
        }])

        .controller('DishCommentController', ['$scope', function($scope) {

             // create a JavaScript object to hold the comment from the form
                $scope.comment = {
                    rating: 5,
                    author: "",
                    comment: "",
                    date: ""
                };

                $scope.submitComment = function () {

                    // change the time format to readable format
                    $scope.comment.date = new Date().toISOString();

                    console.log($scope.comment);
                    // add the comment object to dish.comments
                    $scope.dish.comments.push($scope.comment);
                    
                    // set the form to the original status
                    $scope.commentForm.$setPristine();

                    // set the default rating to 5, others to empty
                    $scope.comment = {
                        rating: 5,
                        author: "",
                        comment: "",
                        date: ""
                    };
                }
        }]);
