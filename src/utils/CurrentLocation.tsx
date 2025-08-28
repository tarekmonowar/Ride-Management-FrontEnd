import config from "@/config";
import { useEffect, useState } from "react";

const key = config.placeApi;
export default function useCurrentLocation() {
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
    name?: string;
  } | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        let placeName = "";
        try {
          const res = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`,
          );
          const data = await res.json();
          if (data.results && data.results.length > 0) {
            placeName = data.results[0].formatted_address; // full address
          }
        } catch (err) {
          console.error("Geocoding error:", err);
        }

        setLocation({ lat, lng, name: placeName });
      },
      (err) => console.error("Location error:", err),
    );
  }, []);

  return location;
}

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useCurrentLocation() {
//   const [location, setLocation] = useState<{ lat: number; lng: number; name?: string } | null>(null);

//   useEffect(() => {
//     if (!navigator.geolocation) return;

//     navigator.geolocation.getCurrentPosition(async (pos) => {
//       const lat = pos.coords.latitude;
//       const lng = pos.coords.longitude;

//       try {
//         const res = await axios.get("/api/geocode", { params: { lat, lng } });
//         const placeName = res.data.placeName;
//         setLocation({ lat, lng, name: placeName });
//       } catch (err) {
//         console.error("Failed to get place name:", err);
//         setLocation({ lat, lng });
//       }
//     });
//   }, []);

//   return location;
// }
