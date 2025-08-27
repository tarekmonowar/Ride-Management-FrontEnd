/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUpdateAvailableMutation } from "@/redux/features/driver/driver.api";
import { toast } from "sonner";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function DriverAvailability() {
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [updateAvailability, { isLoading }] = useUpdateAvailableMutation();

  useEffect(() => {
    if (user?.isAvailable) {
      setIsAvailable(user.isAvailable);
    }
  }, [user?.isAvailable]);

  const handleToggle = async () => {
    const newStatus = !isAvailable; // compute new value
    setIsAvailable(newStatus);
    try {
      await updateAvailability({ isAvailable: newStatus }).unwrap();
      toast.success(
        `You are now ${newStatus ? "available" : "unavailable"} for rides`,
      );
    } catch (err: any) {
      console.error(err);
      toast.error(
        err?.data?.message || err?.message || "Failed to update availability",
      );
      setIsAvailable(!newStatus); // rollback on error
    }
  };

  return (
    <>
      <div className="flex justify-center bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] min-h-[70vh] py-32 px-5">
        <Card className="w-full max-w-md shadow-lg rounded-xl border border-gray-200 h-[200px]">
          <CardHeader className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold">
              Driver Availability
            </CardTitle>
            <Badge
              className={`${
                isAvailable ? "bg-green-500" : "bg-red-500"
              } text-white px-3 py-1 rounded-lg`}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-6 text-gray-700">
            <p className="text-gray-600">
              Toggle your availability to accept or pause ride requests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                size="lg"
                variant="outline"
                className="rounded  w-full bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
                onClick={handleToggle}
                disabled={isLoading}
              >
                {isLoading
                  ? "Updating..."
                  : isAvailable
                  ? "Go Unavailable"
                  : "Go Available"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover all the features that make RideManager the best choice for
            riders, drivers, and administrators.
          </p>
        </div>
      </div>
    </>
  );
}
