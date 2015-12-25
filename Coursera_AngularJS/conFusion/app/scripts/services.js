'use strict';

angular.module('confusionApp')

    // setting a constant baseURL in this way
    .constant("baseURL", "http://localhost:3000/")

    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        // get all the dishes information
        this.getDishes = function(){
            return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT' }});
        };

        
    }])

    .factory('corporateFactory', ['$http', 'baseURL', function($http, baseURL) {
        
        // initializa the returned factory object
        var corpfac = {};

        // get the entire leadership information
        corpfac.getLeaders = function(){

            return $http.get(baseURL+"leadership");

        };
        
        // get a promotion dish
        corpfac.getPromotion = function(){

            return $http.get(baseURL + "promotions");
        };
        
        // get a selected leadership member
        corpfac.getLeader = function (index) {

            return $http.get(baseURL+"leadership/"+index);
        
        };

        // return the object from the factory
        return corpfac;

    }]);
