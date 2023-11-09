"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const icon = L.icon({ iconUrl: "/img/marker-icon.png" });

const LeafletMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "120vh" }}>
      <TileLayer
        attribution='&copy; <Link href="https://www.openstreetmap.org/copyright">OpenStreetMap</Link> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={icon} position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
