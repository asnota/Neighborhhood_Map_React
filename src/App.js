import React, { Component } from 'react';
import Map from './Map'

class App extends Component {

    componentDidMount() {
      initMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyB1ijS6t6OKocfsfAdu9Nuawo1NfwzJLHQ&v=3&callback=initMap')
    }


  render() {
    return (
      <Map
        />
    );
  }
}

export default App;
