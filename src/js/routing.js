weatherApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
	   $locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	    $routeProvider
	    	.when('/', {
	    		templateUrl: 'src/views/base.html',
	    		controller: 'BaseController',
	    		resolve: {
	    		}
	    	})
  }]);