weatherApp.factory('Weather', ['$http',
    function ($http) {
        return {
        	get: function(city) {
        		return $http.get('//api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=09f4ce9689cfd184bb3746f8b806950d');
        	}
        }
    }]);

