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
		.when('/movies', {
			templateUrl: 'movies.html',
			controller : 'moviesController'
			// in line binding
		})
		.when('/movielist/:id', {
			templateUrl: 'movie.html',
			controller : 'movieController'
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

.factory('movieFactory',function($http){
	return {
		get : function(){
			return $http.get('movies.json');
			// it's called promise call/async call
		}
	}
})

.controller('moviesController',function($scope,movieFactory){
	movieFactory
	.get()
	.then(function(response){
		console.log(response);
		$scope.movies=response.data;
	})
	.catch(function(error){
		console.log(error);
	});
})

.controller('movieController',function($scope,movieFactory,$routeParams){
	movieFactory
	.get()
	.then(function(response){
		console.log(response);
		$scope.movie=response.data[$routeParams.id];
	})
	.catch(function(error){
		console.log(error);
	});
})
