weatherApp.controller('BaseController',
    function ($scope, $rootScope, Weather, $timeout) {
    	
        $scope.getWeather = function() {
            Weather.get($scope.city).then(function(data) {
            	$scope.loading = true;
            	$scope.result = null;
            	if (data.data.id === 519690) {
            		data.data.name = 'Saint petersburg';
            	};
                data.data.main.temp = Math.ceil(data.data.main.temp);
            	$timeout(function() {
	                $scope.result = data.data;
	                $scope.result.icon = '/dist/images/icons/' + data.data.weather[0].icon + '.svg';
            		$scope.loading = false;
            	}, 500);
            });
        };
	});
