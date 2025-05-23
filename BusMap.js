   import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

export default function BusMap() {
  const [buses, setBuses] = useState({});

  useEffect(() => {
    const locationRef = ref(db, "locations/");
    const unsub = onValue(locationRef, (snapshot) => {
      if (snapshot.exists()) {
        setBuses(snapshot.val());
      }
    });
    return () => unsub();
  }, []);

  return (
    <MapContainer center={[12.9716, 77.5946]} zoom={12} style={{ height: "90vh" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {Object.entries(buses).map(([busId, data]) => (
        <Marker key={busId} position={[data.latitude, data.longitude]}>
          <Popup>
            <b>{busId}</b><br />
            {new Date(data.timestamp).toLocaleTimeString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
