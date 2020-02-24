import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs
} from "react-google-maps";
const {
  MarkerWithLabel
} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapGoogle = props => {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 52.9681208, lng: -2.6858 }}
    >
      <MarkerWithLabel
        position={{ lat: 52.9681208, lng: -2.6858 }}
        labelAnchor={new google.maps.Point(0, 0)}
        labelStyle={{
          backgroundColor: "yellow",
          fontSize: "20px",
          padding: "16px",
          opacity: "0.5"
        }}
      >
        <div>Thai Vintage Whitchurch</div>
      </MarkerWithLabel>
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MapGoogle));
