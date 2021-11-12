import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { mapStyles } from "./mapStyles";
import mapStyle from "../styles/Map.module.css";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 51.512257,
  lng: -0.127089,
};

const options = {
  styles: mapStyles,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div className={mapStyle.locationContainer}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
      >
        <div className={mapStyle.location}>
          <h1>LOCATION</h1>
          <p>
            12 Upper St. Martin’s Lane <br /> WC2H 9FB, London
          </p>
        </div>
        <Marker icon={"/images/location-icon.svg"} position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
