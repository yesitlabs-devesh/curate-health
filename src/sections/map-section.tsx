'use client';
import { MapContainer, Marker, TileLayer, Popup, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function MyMap(props: any) {
  const { position, zoom } = props;

  return (
    <MapContainer
      style={{ height: 500, zIndex: 0 }}
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position}>
        <Tooltip permanent direction="top" offset={[-20, 0]} opacity={1}>
          4616 Triangle Avenue #405, Austin, TX
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
