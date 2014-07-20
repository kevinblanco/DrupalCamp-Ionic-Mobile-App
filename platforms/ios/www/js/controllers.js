var carAppControllers = angular.module('starter.controllers', ['starter.factories']);



carAppControllers.controller('AppCtrl', function($scope, $ionicModal, $timeout, DrupalCarFactory) {
  // Form data for the login modal
  $scope.loginData    = {};
  $scope.doingLogin   = false;
  $scope.loginSuccess = false;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    
  $scope.doingLogin = true;

  var d_username = $scope.loginData.username;
  var d_password = $scope.loginData.password;

  $scope.userLoginData  = {
    username : d_username,
    password : d_password
  };

  DrupalCarFactory.doLogin( $scope.userLoginData ).then(

    function(data){

      console.log('funko');
      $scope.doingLogin = false;
    });
    
  };
});



carAppControllers.controller('CarsCtrl', function($scope, DrupalCarFactory) {

  //Loader handler
  $scope.loadingCars = true;


  //Using the factory that encapsulates HTTP requests
  DrupalCarFactory.getAllCars().then(function(data){

    //Get the total number of cars.
    $scope.cars = data.cars;
    $scope.loadingCars  = false;
    $scope.loginSuccess = true;

  });

});





carAppControllers.controller('CarCtrl', function($scope, $stateParams, DrupalCarFactory) {

  $scope.carLoader = true;

  DrupalCarFactory.getCar($stateParams.carId).then(function(data){
      console.log(data);
      $scope.car = data;
      $scope.carLoader = false;
  });
  

})

