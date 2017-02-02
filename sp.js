angular.module('SinglePageApp',['ngRoute']) 

.config(function($routeProvider){
		$routeProvider
		.when('/home', {
			templateUrl: 'home.html'
			// ajax binding
		})
		.when('/about', {
			templateUrl: 'about.html'
			// in line binding
		})
		.when('/contact', {
			templateUrl: 'contact.html'
			// in line binding
		})
		.otherwise({
			redirectTo: '/home'
		})
})

.run(function($rootScope, $location){
	$rootScope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

})