weatherApp.controller('BaseController',
    function ($scope, $rootScope, $timeout, $location) {

        $scope.sortType = '';
        $scope.sortReverse = false;

        $scope.submit = function() {
            $location.path('/city/' + $scope.city);
        };
	});
