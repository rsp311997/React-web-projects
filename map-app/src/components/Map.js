import React from 'react';

import L from '../../public/leaflet/leaflet.js';


class Map extends React.Component {
  constructor(props){
      super(props);

      this.state={
          lat:19.099,
          lng:72.9
      };

      this.onMapClick = this.onMapClick.bind(this);
  }

  onMapClick(e) {
      console.log(e.latlng);
      this.setState({
          lat:e.latlng.lat,
          lng:e.latlng.lng
      });

     marker = L.marker([this.state.lat, this.state.lng]).addTo(mymap);
  }

  componentDidMount(){
      mymap = L.map('mapid',{dragging:false}).setView([this.state.lat, this.state.lng], 10);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: 'pk.eyJ1IjoicmFodWxzaW5naHBhbndhciIsImEiOiJjanhkaXp5dmowMTA1M29rOWc4MTZpOWMxIn0.8sJdXl6bo99hxbWCuro6HQ'
      }).addTo(mymap);


      console.log(mymap.setMaxBounds(mymap.getBounds()));

      var marker = L.marker([this.state.lat, this.state.lng]).addTo(mymap);


      mymap.on('click', this.onMapClick);
  }

  componentDidUpdate(){

  }

  render() {

    return (
        <div>
            <div id="mapid" style={{height:940}}></div>
        </div>
    );
  }
}


export default Map;
