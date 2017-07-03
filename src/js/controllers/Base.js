weatherApp.controller('BaseController',
    function ($scope, $rootScope, Weather) {
    	
        $scope.getWeather = function() {
            
            Weather.get($scope.city).then(function(data) {
                $scope.result = data.data;
                $scope.result.icon = 'http://openweathermap.org/img/w/' + data.data.weather[0].icon + '.png';
            });
        };

        $scope.city = 'Москва';
        $scope.getWeather('Москва');

	});
