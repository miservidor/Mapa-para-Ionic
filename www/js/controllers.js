angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading) {
	  $scope.mapCreated = function(map) {

		var latlngPlace = new google.maps.LatLng(-38.72786, -72.58926);
		var image = 'img/azul.png';
		var marker = new google.maps.Marker({
					animation: google.maps.Animation.DROP,
					position: latlngPlace,
					map: map,
					icon: image,
					title: 'Latapp'
			});

		$scope.map = map;
		};

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

	
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});
