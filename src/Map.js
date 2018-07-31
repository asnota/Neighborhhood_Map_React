import React, { Component } from 'react';


class Map extends Component {

  initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13
        });
      }

  render(){
    return(
      <div id="map"></div>
    );
  }
}

export default Map;
