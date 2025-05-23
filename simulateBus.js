import { db } from "./firebase";
import { ref, set } from "firebase/database";

setInterval(() => {
  const busId = "bus_001";
  const location = {
    latitude: 12.9716 + Math.random() * 0.01,
    longitude: 77.5946 + Math.random() * 0.01,
    timestamp: Date.now()
  };
  set(ref(db, `locations/${busId}`), location);
}, 5000);
