angular.module('crrApp').controller("sj",['$scope','$http','server','$cookieStore','$state','$cookies','$stateParams',function ($scope,$http,server,$cookieStore,$state,$cookies,$stateParams) {
	$scope.uid=$cookieStore.get('uid')
	$http({
		url:server+"/item",
		method:"GET",
		params:{"$skip":num,"$limit":10,'uid':$scope.uid}
	}).success(function(e){
		$scope.data2=e
	});
//	$http({
//		url:server+"/tag",
//		method:"GET",
//	}).success(function(e){
//		$scope.data=e
//	});
	
	$scope.updata={'uid':$scope.uid}
	$scope.tj=function(){
		$http({
			url:server+"/item",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
			//debugger
			$state.go("c")
		})
	}
	$scope.del=function(e){
		$http({
			url:server+"/item/"+e.id,
			method:"DELETE",
			//data:$scope.x
		}).success(function(e){
			$scope.data2.splice($scope.data2.indexOf(e),1)
			$state.go("c");
		})
	}
	$scope.xx=$stateParams
	$scope.bj=function(){
		$http({
			url:server+"/item",
			method:"PUT",
			data:$scope.xx
		}).success(function(e){
			//debugger;
			$scope.data2.push($scope.xx)
			$state.go("c");
		})
	}
	$scope.tc=function(){
		$cookieStore.remove('username')
		$cookieStore.remove('password')
		$cookieStore.remove('uid')
		$state.go('a')
	}
var num=0
$scope.next=function(){
	num+=10
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":num,"$limit":10}
	}).success(function(e){			
			//debugger
			$scope.data2=e
		})
	}
$scope.last=function(){
	num-=10
	$http({
			method:'get',
			url:server+'/item',
			params:{"$skip":num,"$limit":10}
		}).success(function(e){
			//debugger
			$scope.data2=e
		})
	}
}])