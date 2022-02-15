import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
        initialCenter={{
          lat: 36.853264,
          lng: 28.270945
        }}
      >
        <Marker
          lat={36.853264}
          lng={28.270945}
          title={'The marker`s title will appear as a tooltip.'}
          name="Unimar"
          onClick={this.onMarkerClick}
        />
        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBumOfGKRceE8alf21R4Wv87np2qEyzbEs'
})(MapContainer)
