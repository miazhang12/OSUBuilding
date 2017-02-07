/**
 * Create by Mia Zhang on 2/5/2017
 * Main Controller
 */

app.controller('MainCtrl', function($scope, $http) {
	$scope.title = 'The Ohio State University Buildings';
	$http.get("https://contenttest.osu.edu/v2/buildings").then(function (response) {
		$scope.building = response.data.data.buildings;
	});
});