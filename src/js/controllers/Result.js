weatherApp.controller('ResultController',
    function ($scope, $rootScope, weather, $location, $routeParams) {

        $scope.sortType = '';
        $scope.sortReverse = false;

        if (weather.status === 200) {
            if (weather.data.city.id === 519690) {
                weather.data.city.name = 'Saint petersburg';
            };
            $scope.result = weather.data;
        } else {
            $scope.result = {
                city: {
                    name: weather.statusText
                }
            }
        };

        $scope.city = $routeParams.city;
        $scope.submit = function() {
            $location.path('/city/' + $scope.city);
        };
	});
