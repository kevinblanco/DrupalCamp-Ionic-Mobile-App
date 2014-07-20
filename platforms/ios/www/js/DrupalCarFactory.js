/**
 * DrupalCar
 *
 * @module        :: Factory
 * @description	  :: AngularJS App Factory
 * @author        :: Kevin Blanco
 */


var carAppFactories = angular.module('starter.factories', []);


carAppFactories.factory('DrupalCarFactory', ['$http', '$q', function($http, $q){

  //Endpoints Variables
  var sellingCarsEndpoint = 'http://drupalcamp.kevinblanco.io/?q=cars';
  var loginEndpoint       = 'http://drupalcamp.kevinblanco.io/?q=api/user/login';
  var carEndpoint         = 'http://drupalcamp.kevinblanco.io/?q=api/node/';


  return{

    /*
     * Return All cars at sell
     */
    getAllCars : function( ){

      var defer = $q.defer();

      $http({
        method    : 'GET', 
        url       : sellingCarsEndpoint,
        dataType  : 'json'
      }).
      success(function(data, status, headers, config){
          defer.resolve(data);
        }).
        error(function(data, status, headers, config){
          defer.reject(data);
        });

      return defer.promise;
    },


    /*
     * Return a single car based on the ID
     */
    getCar : function( carId ){

      var defer = $q.defer();

      $http({
        method    : 'GET', 
        url       : carEndpoint + carId,
        dataType  : 'json',
        data      : '',
        headers   : {
            "Content-Type": "application/x-www-form-urlencoded"
        }
      }).
      success(function(data, status, headers, config){
          defer.resolve(data);
        }).
        error(function(data, status, headers, config){
          defer.reject(data);
        });

      return defer.promise;
    },



    /*
     * Login against the Drupal Service
     */
    doLogin : function( userdata ){

      console.log(userdata);

      var defer = $q.defer();

      $http({
        method    : 'POST', 
        url       : loginEndpoint,
        dataType  : 'json',
        method    : 'POST',
        data      : userdata,
        headers   : {
            "Content-Type": "application/x-www-form-urlencoded"
        }

      }).
        success(function(data, status, headers, config){
          defer.resolve(data);
        }).
        error(function(data, status, headers, config){
          defer.reject(data);
        });

      return defer.promise;
    }


  }
}]);