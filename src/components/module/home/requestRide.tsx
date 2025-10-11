/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import config from "@/config";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useRequestRideMutation } from "@/redux/features/ride/ride.api";
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { Car, CircleCheckBig, Clock, Locate, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 23.8103, lng: 90.4125 };

const libraries: "places"[] = ["places"];

interface Location {
  lat: number;
  lng: number;
}

export default function RequestRide() {
  const navigate = useNavigate();

  const [requestRide] = useRequestRideMutation();
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  // Check if Google Maps API key is available

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: config.mapsApi || "",
    libraries: libraries,
    preventGoogleFontsLoading: true,
  });

  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const destRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [pickup, setPickup] = useState<Location>(center);
  const [destination, setDestination] = useState<Location | null>(null);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [routeInfo, setRouteInfo] = useState<{
    distance: string;
    duration: string;
  } | null>(null);
  const [pickupAddress, setPickupAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //* for just date and time slot
  const [date, setDate] = useState<string>(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  });
  const [time, setTime] = useState<string>("now");
  const [timeOptions, setTimeOptions] = useState<string[]>([]);

  useEffect(() => {
    const generateOptions = () => {
      const now = new Date();
      const rounded = new Date(now);
      // round up to next quarter
      const mins = rounded.getMinutes();
      const roundedMins = Math.ceil(mins / 15) * 15;
      rounded.setMinutes(roundedMins);
      rounded.setSeconds(0);
      rounded.setMilliseconds(0);

      const options: string[] = ["now"];
      for (let i = 0; i < 6; i++) {
        const slot = new Date(rounded.getTime() + i * 15 * 60 * 1000);
        // Format time manually to always show 2-digit hour + AM/PM
        let hours = slot.getHours();
        const minutes = slot.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12; // Convert 0-23 → 12-hour format
        const formatted = `${hours
          .toString()
          .padStart(2, "0")}:${minutes} ${ampm}`;

        options.push(formatted);
      }

      setTimeOptions(options);
      if (!options.includes(time)) setTime("now");
    };

    generateOptions();

    const id = setInterval(generateOptions, 60 * 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //*for just calculate estimate time
  useEffect(() => {
    if (!pickup || !destination) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: pickup,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          const route = result.routes[0].legs[0];
          setRouteInfo({
            distance: route.distance?.text || "",
            duration: route.duration?.text || "",
          });
          setDirections(result);
        } else {
          console.error("Error fetching directions:", status);
        }
      },
    );
  }, [pickup, destination]);

  const handlePlaceChanged = (type: "pickup" | "dest", ref: any) => {
    if (ref.current) {
      const place = ref.current.getPlace();
      if (place.geometry?.location) {
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        if (type === "pickup") {
          setPickup(location);
          setPickupAddress(place.formatted_address || place.name || "");
        } else {
          setDestination(location);
          setDestinationAddress(place.formatted_address || place.name || "");
        }
      }
    }
  };

  const handleConfirmRide = async () => {
    if (!user) {
      toast.info("You need to login first.");
      navigate("/login");
      return;
    }

    if (!destination) {
      toast.info("Please select a destination for your ride.");
      return;
    }

    setIsLoading(true);

    try {
      const rideData = {
        pickupLocation: pickup,
        destination: destination,
      };
      const response = await requestRide(rideData).unwrap();

      toast.success(
        "Your ride has been confirmed. A driver will be assigned shortly.",
      );
      console.log("Ride request response:", response);
    } catch (error: any) {
      const message =
        error?.data?.message || "Failed to request ride. Please try again";
      toast.error(message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-surface">
        <div className="text-center space-y-4">
          <Car className="h-8 w-8 animate-pulse mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading Google Maps...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 pt-16 xl:pt-24 pb-16 inset-0  bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))]">
      <div className="max-w-7xl px-4 mx-auto space-y-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-6 py-6 bg-gradient-hero">
          {/* Control Panel */}
          <Card className="lg:col-span-2 shadow-sm pt-10 py-7 border-gray-400 rounded-none bg-transparent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-4xl  ">
                Go anywhere with Panda
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Pickup Location
                </label>
                <Autocomplete
                  onLoad={(ref) => (pickupRef.current = ref)}
                  onPlaceChanged={() => handlePlaceChanged("pickup", pickupRef)}
                >
                  <Input
                    type="text"
                    placeholder="Enter pickup location"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    className="bg-white/50 !border-none !text-lg rounded py-5 focus:border-ride-primary transition-colors"
                  />
                </Autocomplete>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Locate className="h-5 w-5 text-primary" />
                  Destination
                </label>
                <Autocomplete
                  onLoad={(ref) => (destRef.current = ref)}
                  onPlaceChanged={() => handlePlaceChanged("dest", destRef)}
                >
                  <Input
                    type="text"
                    placeholder="Enter destination"
                    value={destinationAddress}
                    onChange={(e) => setDestinationAddress(e.target.value)}
                    className="bg-white/50 !border-none !text-lg rounded py-5 focus:border-ride-primary transition-colors"
                  />
                </Autocomplete>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3 items-center">
                <div className="space-y-3">
                  <label className="text-md font-medium flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4" />
                      <path d="M8 2v4" />
                    </svg>
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded border p-2 bg-white/50 !border-none"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-md font-medium flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Time
                  </label>
                  <select
                    className="w-full rounded border p-2 bg-white/50 !border-none"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  >
                    {timeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt === "now" ? "Now" : opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Trip Info */}
              {destination && routeInfo && (
                <Card className="bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] border-accent rounded py-3">
                  <CardContent className="px-4">
                    <div className="flex items-center gap-2 text-md text-white ">
                      <Clock className="h-4 w-4" />
                      Estimated Time
                    </div>
                    <p className="text-xl font-semibold text-secondary">
                      {routeInfo.duration}
                    </p>
                    <p className="text-md text-white">
                      Distance: {routeInfo.distance} (based on current traffic)
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmRide}
                className="w-full rounded bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))] hover:shadow-button transition-all duration-200 text-white font-semibold py-6 text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="!h-6 !w-6" />
                    Requesting Ride...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CircleCheckBig className="!h-6 !w-6" />
                    Confirm Ride
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="lg:col-span-3 shadow-sm  border-gray-400 rounded-none bg-transparent ">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={pickup}
              zoom={13}
              options={{
                styles: [
                  {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                  },
                ],
                disableDefaultUI: false,
                zoomControl: true,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
            >
              {/* Pickup Marker */}
              <Marker
                position={pickup}
                icon={{
                  url:
                    "data:image/svg+xml," +
                    encodeURIComponent(`
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="16" r="12" fill="#10B981" stroke="white" stroke-width="2"/>
                      <circle cx="16" cy="16" r="4" fill="white"/>
                    </svg>
                  `),
                  scaledSize: new google.maps.Size(32, 32),
                }}
              />

              {/* Destination Marker */}
              {destination && (
                <Marker
                  position={destination}
                  icon={{
                    url:
                      "data:image/svg+xml," +
                      encodeURIComponent(`
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="12" fill="#0EA5E9" stroke="white" stroke-width="2"/>
                        <circle cx="16" cy="16" r="4" fill="white"/>
                      </svg>
                    `),
                    scaledSize: new google.maps.Size(32, 32),
                  }}
                />
              )}

              {/* //direction stylesd */}
              {directions && <DirectionsRenderer directions={directions} />}
            </GoogleMap>
          </Card>
        </div>

        {/* Legend */}
      </div>
    </div>
  );
}
