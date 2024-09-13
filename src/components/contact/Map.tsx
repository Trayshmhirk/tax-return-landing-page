import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Define a custom marker icon (optional)
const icon = L.icon({
   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [0, -41],
});

const Map: React.FC = () => {
   return (
      <MapContainer
         center={{ lat: 7.301759, lng: 5.134099 }} // Coordinates for initial map position
         zoom={13} // Initial zoom level
         style={{ height: "400px", width: "100%" }} // Customize the map size
      >
         <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap URL
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         />
         <Marker position={[7.301759, 5.134099]} icon={icon}>
            <Popup>We are here!</Popup>
         </Marker>
      </MapContainer>
   );
};

export default Map;
