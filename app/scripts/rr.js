angular.module('crrApp').controller("dl", ['$scope', '$http', 'server', '$cookieStore','$cookies','$state' ,function($scope, $http, server, $cookieStore,$cookies,$state) {
	if($cookies.get('username',$scope.updata)&&$cookies.get('password',$scope.updata)){
		$state.go('c')
	}
	$scope.fn = function() {
		$http({
			url: server + "/users/login",
			method: "POST",
			data: $scope.updata
		}).success(function(e) {
			$cookieStore.put("username",$scope.updata);
			$cookieStore.put("password",$scope.updata);
			if($scope.check == true) {
				$cookieStore.put("username",$scope.updata);
				$cookieStore.put("password",$scope.updata);			
                var time=new Date();
                time.setDate(time.getDate+7)
                $cookies.put('username',$scope.updata.username,{'expires':time});
                $cookies.put('password',$scope.updata.password,{'expires':time});
			}
			$cookieStore.put("uid",e.uid);
			//debugger
			$state.go("c")
		})		
	}
}]).controller("zc", ['$scope', '$http', 'server', '$state', '$cookieStore', function($scope, $http, server, $state, $cookieStore) {
	$scope.fn1 = function() {
		$http({
			url: server + "/users",
			method: "POST",
			data: $scope.updata
		}).success(function(e) {
			//debugger
			$state.go("a")
		})
	}
}])
