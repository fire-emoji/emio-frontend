function initMap() {
    var currentPos = {lat: -34.397, lng: 150.644};
    var map = new google.maps.Map(document.getElementById('map'), {
      center: currentPos,
      zoom: 12,
      styles: [
           {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
           {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
           {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
           {
             featureType: 'administrative.locality',
             elementType: 'labels.text.fill',
             stylers: [{color: '#d59563'}]
           },
           {
             featureType: 'poi',
             elementType: 'labels.text.fill',
             stylers: [{color: '#d59563'}]
           },
           {
             featureType: 'poi.park',
             elementType: 'geometry',
             stylers: [{color: '#263c3f'}]
           },
           {
             featureType: 'poi.park',
             elementType: 'labels.text.fill',
             stylers: [{color: '#6b9a76'}]
           },
           {
             featureType: 'road',
             elementType: 'geometry',
             stylers: [{color: '#38414e'}]
           },
           {
             featureType: 'road',
             elementType: 'geometry.stroke',
             stylers: [{color: '#212a37'}]
           },
           {
             featureType: 'road',
             elementType: 'labels.text.fill',
             stylers: [{color: '#9ca5b3'}]
           },
           {
             featureType: 'road.highway',
             elementType: 'geometry',
             stylers: [{color: '#746855'}]
           },
           {
             featureType: 'road.highway',
             elementType: 'geometry.stroke',
             stylers: [{color: '#1f2835'}]
           },
           {
             featureType: 'road.highway',
             elementType: 'labels.text.fill',
             stylers: [{color: '#f3d19c'}]
           },
           {
             featureType: 'transit',
             elementType: 'geometry',
             stylers: [{color: '#2f3948'}]
           },
           {
             featureType: 'transit.station',
             elementType: 'labels.text.fill',
             stylers: [{color: '#d59563'}]
           },
           {
             featureType: 'water',
             elementType: 'geometry',
             stylers: [{color: '#17263c'}]
           },
           {
             featureType: 'water',
             elementType: 'labels.text.fill',
             stylers: [{color: '#515c6d'}]
           },
           {
             featureType: 'water',
             elementType: 'labels.text.stroke',
             stylers: [{color: '#17263c'}]
           }
         ],
         disableDefaultUI : true,
         zoomControl : true,
         zoomControlOptions : {
           position : google.maps.ControlPosition.TOP_RIGHT
         }


         //Map.getUiSettings().setMapToolbarEnabled(false);
    });
    // var iconBase = 'images/';
    // var icons = {
    //   happy: {
    //     icon : iconBase + 'happy.png'
    //   },
    //   sad: {
    //     icon : iconBase + 'sad.jpg'
    //   },
    //   joy: {
    //     icon : iconBase + 'joy.png'
    //   }
    // };
    // function addMarker(feature) {
    //   var marker = new google.maps.Marker({
    //     position: feature.position,
    //     icon : icons[feature.type].icon,
    //     map: map
    //   });
    // }
    // var features = [
    //       {
    //         position: new google.maps.LatLng(-34.405734, 150.598420),
    //         type: 'happy'
    //       }, {
    //         position: new google.maps.LatLng(-34.306742, 150.500734),
    //         type: 'sad'
    //       }
    //     ];
    //
    //     for (var i = 0, feature; feature = features[i]; i++) {
    //      addMarker(feature);
    //    }
    //  }

   var marker = new google.maps.Marker({
     icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
     map: map
   });
    //var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        //infoWindow.setPosition(pos);
        marker.setPosition(pos);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, marker, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false,marker, map.getCenter());
    }
  }


  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }
