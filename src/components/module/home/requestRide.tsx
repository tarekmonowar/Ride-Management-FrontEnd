/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  GoogleMap,
  Marker,
  useLoadScript,
  Autocomplete,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Clock, Car } from "lucide-react";
import { toast } from "sonner";
import config from "@/config";
import { DirectionsRenderer } from "@react-google-maps/api";
import { useRequestRideMutation } from "@/redux/features/ride/ride.api";
import { useNavigate } from "react-router";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = { lat: 23.8103, lng: 90.4125 }; // Default center (Dhaka)

// Keep libraries array outside component to prevent reloading
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

  //for just calculate estimate time
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
    <div className="p-4 inset-0  bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))]">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))] bg-clip-text text-transparent font-bold text-3xl">
            Request a Ride
          </h1>

          <p className="text-muted-foreground text-lg mt-3">
            Choose your pickup and destination
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-6 bg-gradient-hero">
          {/* Control Panel */}
          <Card className="lg:col-span-2 shadow-card border-ride-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-ride-primary">
                <Navigation className="h-5 w-5" />
                Trip Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pickup Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ride-success" />
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
                    className="bg-ride-surface border-ride-border focus:border-ride-primary transition-colors"
                  />
                </Autocomplete>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ride-primary" />
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
                    className="bg-ride-surface border-ride-border focus:border-ride-primary transition-colors"
                  />
                </Autocomplete>
              </div>

              {/* Trip Info */}
              {destination && routeInfo && (
                <Card className="bg-accent/50 border-accent">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="h-4 w-4" />
                      Estimated Time
                    </div>
                    <p className="text-lg font-semibold">
                      {routeInfo.duration}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Distance: {routeInfo.distance} (based on current traffic)
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Confirm Button */}
              <Button
                onClick={handleConfirmRide}
                className="w-full bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))] hover:shadow-button transition-all duration-200 text-white font-semibold py-6 text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 " />
                    Requesting Ride...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    Confirm Ride
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="lg:col-span-3 shadow-card border-ride-border overflow-hidden">
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
