import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Share2, AlertTriangle } from "lucide-react";
import useCurrentLocation from "@/utils/CurrentLocation";

export default function SosCard() {
  const location = useCurrentLocation();

  const locationUrl = location
    ? `https://www.google.com/maps?q=${location.lat},${location.lng}`
    : "";

  const handleCallPolice = () => {
    window.location.href = "tel:222"; // police number
  };

  const handleNotifyContact = () => {
    if (!locationUrl) return alert("Location not available yet");
    window.open(
      `mailto:friend@example.com?subject=Emergency Help&body=I need help! My location: ${locationUrl}`,
    );
  };

  const handleShareLocation = () => {
    if (!locationUrl) return alert("Location not available yet");
    if (navigator.share) {
      navigator.share({
        title: "My Live Location",
        text: "Please help me! Here's my location:",
        url: locationUrl,
      });
    } else {
      alert(`Share this link: ${locationUrl}`);
    }
  };

  return (
    <Card className="w-sm mx-auto mt-20 text-black shadow-lg rounded-2xl animate-fadeIn">
      <CardHeader>
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <AlertTriangle className="w-5 h-5" /> SOS Emergency
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-white bg-red-500 hover:bg-red-700"
          onClick={handleCallPolice}
        >
          <Phone className="mr-2 w-4 h-4" /> Call Police
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-white bg-red-500 hover:bg-red-700"
          onClick={handleNotifyContact}
        >
          <Share2 className="mr-2 w-4 h-4" /> Notify Emergency Contact
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-white bg-red-500 hover:bg-red-700"
          onClick={handleShareLocation}
        >
          <Share2 className="mr-2 w-4 h-4" /> Share Live Location
        </Button>

        {location && (
          <div className="text-md mt-2 break-words">
            {location.name && <p>Current Location Place: {location.name}</p>}
            <p>
              Current Location latitude: {location.lat.toFixed(5)},{" "}
              {location.lng.toFixed(5)}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
