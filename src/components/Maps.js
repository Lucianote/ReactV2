import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '1350px',
  height: '400px'
};


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Muestra InfoWindow
        activeMarker: {},          // Activa el marker con un click
        selectedPlace: {}          // Muestra el infowindow del punto seleccionado con el marker
      };


      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };



  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7At2Y0pD1N9NJV7aq1fN0j605kRJXGks'
})(MapContainer);
