//get all data from server
var app = angular.module('listitem', ['ngRoute']);
app.factory('itmfactory',['$http',function($http){
	return{	
			getitem:function(dl){
				$http.get('/products').success(function(data){
				//dl(data);
			});
			}
		  }
}]);
app.controller('itemctrl',function($scope,itmfactory,$http){
	{
	itmfactory.getitem(function(data){
		$scope.products=data;
	});
	}
	$scope.adddata=function()
	{//alert('hi');
		$scope.products.push($scope.newproduct);
		var adddata=$scope.newproduct;
		$scope.newproduct={};
		console.log(adddata);
		$http.post('/products',adddata).success(function(adddata){})
	};
	$scope.deletedata=function(id){
		var d=id;
		for(i in $scope.products){
			if($scope.products[i].id===id){
					$scope.products.splice(i,1);
					$http.delete('/products'+'/'+id).success(function(id){
					console.log(d +' is delete');
					
				})
				$scope.newproduct={};
			}
		}
	}
})

	app.config(['$routeProvider',
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

	app.controller('Homecontroller', function($scope) {
	     
	    $scope.message = 'This is Home page';
	     
	});
	app.controller('Aboutcontroller', function($scope) {
	    $scope.message = 'This is About page';
	     
	});
	app.controller('Catalogcontroller', function($scope) {
	     
	    $scope.message = 'This is Catalog page';
	     
	});
	app.controller('Contactcontroller', function($scope) {
	     
	    $scope.message = 'This is Contact page';
	     
	});
   
	
	
	
