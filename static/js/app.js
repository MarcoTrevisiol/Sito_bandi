var app = angular.module('app', []);

app.controller('AppController', ['$scope', '$http', function($scope, $http) {
    var todoList = this;
    moment.locale('it');
    $http({
      method : "GET",
      url : "https://script.google.com/macros/s/AKfycbx1e7MAfZjX9Fyy_Eq_Klg3IbR9ubEzw4d6rju7AGtikzZaRb5zP7crPuvy3Q_NjOCD/exec"
    }).then(function mySuccess(response) {
        $scope.risposta = response.data;
        $scope.bandi = $scope.risposta['content'];
        for (var i = 0; i < $scope.bandi.length; i++) {
            const d = new Date($scope.bandi[i]['SCADENZA']);
            $scope.bandi[i]['SHOW-SCADENZA'] = moment(d).format('LL');
        }
      }, function myError(response) {
        $scope.risposta = response.statusText;
    });
    $scope.bandiera = "ciao ciao";
}]);
