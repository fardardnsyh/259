import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [16, 32],
});

interface MapComponentProps {
  position: [number, number];
}

const MapComponent: React.FC<MapComponentProps> = ({ position }) => {
  return (
    <MapContainer
      key={position[0] + position[1]}
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full h-[calc(100vh_-_300px)] md:h-[calc(100vh_-_280px)] z-0"
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.com/maps/vt?lyrs=m@189&x={x}&y={y}&z={z}"
      />
      <Marker position={position} icon={icon}></Marker>
    </MapContainer>
  );
};

export default MapComponent;
