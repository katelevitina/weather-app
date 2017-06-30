weatherApp.controller('BaseController',
    function ($scope, $rootScope, Weather) {
    	
        $scope.getWeather = function() {
            console.log($scope.city);
            
            Weather.get($scope.city).then(function(data) {
                console.log(data);
            });
        };

	});
