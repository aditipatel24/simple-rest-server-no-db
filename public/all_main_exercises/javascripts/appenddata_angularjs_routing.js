var proapp=angular.module('productapp',['ngRoute']);
	proapp.config(['$routeProvider',
		function($routeProvider){
			
			$routeProvider
			.when('/',{
				templateUrl:'views/Home_page.html',
				controller:'Homecontroller'
			})
			.when('/About',{
				templateUrl:'views/About_page.html',
				controller:'Aboutcontroller'
			})
			.when('/Catalog',{
				templateUrl:'views/Catalog_page.html',
				controller:'Catalogcontroller'
			})
			.when('/Contact',{
				templateUrl:'views/Contact_page.html',
				controller:'Contactcontroller'
			})
			.otherwise({
				redirectTo:'/'
			})
		
		}]);

	proapp.controller('Homecontroller', function($scope) {
	     
	    $scope.message = 'This is Home page';
	     
	});
	proapp.controller('Aboutcontroller', function($scope) {
	    $scope.message = 'This is About page';
	     
	});
	proapp.controller('Catalogcontroller', function($scope) {
	     
	    $scope.message = 'This is Catalog page';
	     
	});
	proapp.controller('Contactcontroller', function($scope) {
	     
	    $scope.message = 'This is Contact page';
	     
	});
