var app = angular.module('app', []);

app.controller('AppController', ['$scope', '$http', function($scope, $http) {
    $scope.visibility = true;
    $scope.showExpired = true;
    moment.locale('it');

    var today = moment().format('YYYY-MM-DD');
    $scope.notExpired = function(item) {
        if ($scope.showExpired)
            return true;
        return item['SCADENZA'] >= today;
    }

    $http({
      method : "GET",
      url : webAppURL
    }).then(function mySuccess(response) {
        $scope.visibility = false;
        $scope.risposta = response.data;
        $scope.bandi = $scope.risposta['content'];
        for (var i = 0; i < $scope.bandi.length; i++) {
            const d = new Date($scope.bandi[i]['SCADENZA']);
            $scope.bandi[i]['DISPLAY-SCADENZA'] = moment(d).format('LL');
        }
      }, function myError(response) {
        $scope.risposta = response.statusText;
    });
    $scope.bandiera = "ciao ciao";
}]);
