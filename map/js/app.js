// MODULE
var emio = angular.module('emio', ['ngRoute', 'ngResource']);

// ROUTES
emio.config(function ($routeProvider){
  $routeProvider

})

// CONTROLLERS
emio.controller('flightController', ['$scope', 'infoService', {
  function($scope, infoService, ){
  $scope.info = infoService.info;

  $scope.$watch('info', function(){
    infoService.city = $scope.city;
  });

}]);

emio.controller('infoController', ['$scope', '$resource', 'cityService',
 function($scope, $resource, infoService){
   $scope.info = infoService.info;

   $scope.amadeusAPI = $resource("http://em-io.herokuapp.com/amadeus/origin/BOS/max_price/3000", {
   callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
 }]);

// // SERVICES
// emio.service('flightService', function() {
//   this.airport = "SFO";
// });
