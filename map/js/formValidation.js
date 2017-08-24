angular.module('emio', [])
    .controller('TravelController', ['$scope', function($scope) {
      $scope.master = {};
      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };
      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };
      $scope.reset();
    }]);

    // $scope.checkParams = function() {
    //   if ($scope.user.airport != $scope.Myservice.origin) {
    //     $scope.validAirport = false;
    //     return false;
    //   }
    //   if($scope.user.budget < $scope.Myservice.price) {
    //     $scope.validPrice = false;
    //   }
    //
    //   $scope.validPrice = true;
    //   $scope.validAirport = true;
    // }

    // angular.module('emio').factory('Myservice', function($http){
    //     return {
    //         getdata: function(){
    //               return $http.get('http://em-io.herokuapp.com/amadeus/origin/BOS/max_price/3000'); // You Have to give Correct Url either Local path or api etc
    //         }
    //     };
    // });
    //
    // angular.module('emio',[]).controller('mainController',function($scope,Myservice){
    //     $scope.content = null;
    //      Myservice.getdata().success(function (data){
    //                    alert('Success');
    //                $scope.content=data[0]; // as per
    //
    //     });
    // });


    $http.get('http://em-io.herokuapp.com/amadeus/origin/BOS/max_price/3000')
.success(function(data) {
    $scope.jsonData = data;
    alert("Success");
})
.error(function(data) {
    alert("Invalid URL");
});

$scope.clickButton = function(airport, budget) {

    $scope.items = $scope.jsonData;

    angular.forEach($scope.items, function (item) {
        if(item.origin === airport && items.price <= budget ){
            $scope.results.push({
                destination: item.results.destination,
                departure: item.results.departure_date,
                price: item.results.price,
                airline: item.results.airline
            });
        }
    });
};



//
//
//
//
// var mockDataForThisTest = "json=" + encodeURI(JSON.stringify("http://em-io.herokuapp.com/amadeus/origin/BOS/max_price/3000"));
//
//
// var app = angular.module('myApp', []);
//
// function paramCtrl($scope, $http) {
//
//     $scope.people = [];
//
//     $scope.loadParams = function() {
//         var httpRequest = $http({
//             method: 'POST',
//             url: '/echo/json/',
//             data: mockDataForThisTest
//
//         }).success(function(data, status) {
//             $scope.people = data;
//         });
//
//     };

// }
//
// var myApp = angular.module('myApp', []);
//   myApp.filter('range', function() {
//     return function(input, total) {
//       total = parseInt(total);
//         for (var i=0; i<total; i++) {
//           input.push(i);
//         }
//         return input;
//       };
//   });
