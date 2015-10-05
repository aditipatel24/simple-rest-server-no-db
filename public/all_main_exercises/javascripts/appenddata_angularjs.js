//get all data from server
	var app = angular.module('listitem', []);
	app.controller('itemctrl', function($scope,$http) {
		var app=this;
		$http.get("/products").success(function(data){
			console.log(data);
				app.pro=data;
		});
		
	//append data on current page
		app.appenddata=function(prolist)
		{//alert("hi");
			$http.post("/products",prolist).success(function(data){
				console.log(data);
				
				app.pro.push(
				{
						itmname:$scope.app.prolist.itmname,
						itmdesc:$scope.app.prolist.itmdesc,
						itmprice:$scope.app.prolist.itmprice
				});
						$scope.app.prolist.itmname='';
						$scope.app.prolist.itmdesc='';
						$scope.app.prolist.itmprice='';
			});
		}
		
		//delete data
		app.deletedata=function(id)
		{	var nid=id;
			console.log(nid);
			for(i in app.pro)
			{
				if(app.pro[i].id==id)
				{
					$http.delete("/products" + '/' + id).success(function(id){
					console.log(nid + " is deleted");
					app.pro.splice(id,1);
					});
				}
			}	
		}	
	});

	
   
	
	
	
