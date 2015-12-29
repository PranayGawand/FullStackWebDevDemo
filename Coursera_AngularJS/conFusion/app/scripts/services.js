'use strict';

angular.module('confusionApp')

// setting a constant baseURL in this way
.constant("baseURL", "http://localhost:3000/")

.service('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    // get all the dishes information
    this.getDishes = function () {
        return $resource(baseURL + "dishes/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    };


    }])

.factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    // initialize the returned factory object
    var corpfac = {};

    // get the entire leadership information
    corpfac.getLeaders = function () {

        return $resource(baseURL + "leadership/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

    };

    // get a promotion dish
    corpfac.getPromotion = function () {

        return $resource(baseURL + "promotions/:id", null, {});
    };


    // return the object from the factory
    return corpfac;

    }])

.factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    // initialize the returned factory object
    var feedbackfac = {};


    // get a promotion dish
    feedbackfac.postFeedback = function () {
        return $resource(baseURL + "feedback/", null, {
            'post': {
                method: 'POST'
            }
        });
    };

    return feedbackfac;

    }]);