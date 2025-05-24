// busMap.js

import { db } from './firebase.js';

// Google Maps map object and markers registry
let map;
const busMarkers = {};

// Initialize the Google Map
export function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 0, lng: 0 },
    zoom: 2,
  });

  // Listen to "buses" collection updates
  db.collection("buses").onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
      const busId = change.doc.id;
      const data = change.doc.data();

      if (change.type === "added" || change.type === "modified") {
        updateBusMarker(busId, data);
      } else if (change.type === "removed") {
        removeBusMarker(busId);
      }
    });
  });
}

function updateBusMarker(busId, data) {
  const pos = new google.maps.LatLng(data.lat, data.lng);

  let marker = busMarkers[busId];
  if (!marker) {
    marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: data.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `${data.name} <br> ${data.placeName || ""}`,
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    busMarkers[busId] = marker;
    marker.infoWindow = infoWindow;
  } else {
    marker.setPosition(pos);
    marker.infoWindow.setContent(`${data.name} <br> ${data.placeName || ""}`);
  }
}

function removeBusMarker(busId) {
  const marker = busMarkers[busId];
  if (marker) {
    marker.setMap(null);
    delete busMarkers[busId];
  }
}
