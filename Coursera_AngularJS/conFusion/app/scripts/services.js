'use strict';

angular.module('confusionApp')

    // setting a constant baseURL in this way
    .constant("baseURL", "http://localhost:3000/")

    .service('menuFactory', ['$http', 'baseURL', function($http, baseURL) {

        // get all the dishes information
        this.getDishes = function(){

            return $http.get(baseURL+"dishes");

        };
        
        // get a selected dish information
        this.getDish = function (index) {

            return $http.get(baseURL+"dishes/"+index);

        };

        // get a promotion dish
        this.getPromotion = function(){

            return $http.get(baseURL + "promotions");
        };
        
    }])

    .factory('corporateFactory', ['$http', 'baseURL', function($http, baseURL) {
        
        // initializa the returned factory object
        var corpfac = {};

        // get the entire leadership information
        corpfac.getLeaders = function(){

            return $http.get(baseURL+"leadership");

        };
        
        // get a selected leadership member
        corpfac.getLeader = function (index) {

            return $http.get(baseURL+"leadership/"+index);
        
        };

        // return the object from the factory
        return corpfac;

    }]);
