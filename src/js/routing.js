weatherApp.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
	    $routeProvider
	    	.when('/', {
	    		templateUrl: 'src/views/base.html',
	    		controller: 'BaseController',
	    		resolve: {
	    		}
	    	})
	    	.when('/city/:city', {
	    		templateUrl: 'src/views/result.html',
	    		controller: 'ResultController',
	    		resolve: {
	    			weather: function(Weather, $route) {
	    				return Weather.get($route.current.params.city).then(function(data) {
	    					return data;
	    				}, function(error) {
	    					return error;
	    				})
	    			}
	    		}
	    	})
	    	.otherwise({
		        redirectTo: '/'
		    });
  }]);