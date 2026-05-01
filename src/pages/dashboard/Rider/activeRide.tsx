/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  useActiveRideQuery,
  useCancelRideMutation,
} from "@/redux/features/ride/ride.api";
import {
  ArrowRight,
  Bike,
  Car,
  Clock,
  CreditCard,
  DollarSign,
  MapPin,
  Navigation,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

export default function ActiveRide() {
  const { data, isLoading, isError } = useActiveRideQuery(undefined);
  const ride = data?.data;
  const navigate = useNavigate();

  const [cancelRide] = useCancelRideMutation();
  const [cancelReason, setCancelReason] = useState("");

  if (isLoading) {
    return (
      <div className="flex justify-center py-32 bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] ">
        <Card className="w-full max-w-lg shadow-lg rounded-xl border border-gray-200 animate-pulse">
          <CardHeader className="flex justify-between items-center">
            <Skeleton className="h-6 w-40 rounded" />
            <Skeleton className="h-6 w-20 rounded" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <Skeleton className="h-4 w-full rounded" />
            </div>
            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-green-600" />
              <Skeleton className="h-4 w-full rounded" />
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
            <Skeleton className="h-24 w-full rounded" />
            <Skeleton className="h-10 w-full rounded" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError || !ride) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No active ride found</p>
      </div>
    );
  }
  const handleCancel = async () => {
    try {
      await cancelRide({
        rideId: ride._id,
        cancellationReason: cancelReason,
      }).unwrap();
      setCancelReason("");
      toast.success("Ride cancelled successfully");
    } catch (err: any) {
      console.error(err);
      if (err?.data?.message) {
        toast.error(err.data.message);
      } else if (err?.message) {
        toast.error(err.message);
      } else {
        toast.error("Failed to cancel ride. Please try again.");
      }
      setCancelReason("");
    }
  };

  return (
    <div>
      <div className="flex justify-center bg-[linear-gradient(135deg,rgba(0,102,153,0.1),rgba(230,204,0,0.1))] py-32">
        <Card className="w-full max-w-lg shadow-lg rounded-xl border border-gray-200">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-xl font-semibold">
              Active Ride Details
            </CardTitle>
            <Badge
              className={`${
                ride.status === "PICKED_UP"
                  ? "bg-yellow-500"
                  : ride.status === "IN_TRANSIT"
                    ? "bg-blue-500"
                    : ride.status === "ACCEPTED"
                      ? "bg-green-500"
                      : "bg-gray-500"
              } text-white px-3 py-1 rounded-lg`}
            >
              {ride.status}
            </Badge>
            {ride.vehicleType && (
              <Badge
                className={`${
                  ride.vehicleType === "bike" ? "bg-purple-500" : "bg-indigo-500"
                } text-white px-3 py-1 rounded-lg flex items-center gap-1`}
              >
                {ride.vehicleType === "bike" ? (
                  <Bike className="w-3 h-3" />
                ) : (
                  <Car className="w-3 h-3" />
                )}
                {ride.vehicleType === "bike" ? "Bike" : "Car"}
              </Badge>
            )}
          </CardHeader>

          <CardContent className="space-y-4 text-gray-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <p>
                <span className="font-medium">Pickup:</span>{" "}
                {ride.pickupLocation?.address || "Unknown"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Navigation className="w-5 h-5 text-green-600" />
              <p>
                <span className="font-medium">Destination:</span>{" "}
                {ride.destination?.address || "Unknown"}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <p>
                <span className="font-medium">Estimated Cost:</span> $
                {ride.estimatedCost}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <p>
                <span className="font-medium">Requested At:</span>{" "}
                {new Date(ride.requestedAt).toLocaleString()}
              </p>
            </div>

            {/* Conditionally render additional timestamps */}
            {ride.pickedUpAt && (
              <p className="text-sm text-gray-500">
                Picked Up At:{" "}
                <span className="font-medium">
                  {new Date(ride.pickedUpAt).toLocaleString()}
                </span>
              </p>
            )}

            {ride.completedAt && (
              <p className="text-sm text-gray-500">
                Completed At:{" "}
                <span className="font-medium">
                  {new Date(ride.completedAt).toLocaleString()}
                </span>
              </p>
            )}

            {ride.cancelledAt && (
              <p className="text-sm text-red-500">
                Cancelled At:{" "}
                <span className="font-medium">
                  {new Date(ride.cancelledAt).toLocaleString()}
                </span>
              </p>
            )}

            {ride.cancellationReason && (
              <p className="text-sm text-red-500">
                Reason:{" "}
                <span className="font-medium">{ride.cancellationReason}</span>
              </p>
            )}

            <p className="text-sm text-gray-500">
              Distance: <span className="font-medium">{ride.distance} km</span>
            </p>

            {/* Payment Section - show when ride is COMPLETED and payment pending */}
            {ride.status === "COMPLETED" && ride.paymentStatus === "pending" && (
              <div className="border border-green-200 bg-green-50 rounded-lg p-4 space-y-2">
                <p className="text-green-700 font-semibold text-lg">Ride Completed!</p>
                <p className="text-gray-600 text-sm">Please proceed to pay for your ride.</p>
                <Button
                  onClick={() => navigate(`/rider-dashboard/payment?rideId=${ride._id}`)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg"
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Payment — ${ride.estimatedCost?.toFixed(2)}
                </Button>
              </div>
            )}
            {ride.status === "COMPLETED" && ride.paymentStatus === "paid" && (
              <div className="border border-blue-200 bg-blue-50 rounded-lg p-3 text-center text-blue-700 font-semibold">
                Payment submitted — awaiting driver confirmation
              </div>
            )}
            {ride.status === "COMPLETED" && ride.paymentStatus === "driver_confirmed" && (
              <div className="border border-green-200 bg-green-50 rounded-lg p-3 text-center text-green-700 font-semibold">
                ✓ Payment confirmed by driver
              </div>
            )}
            <div className="flex flex-col gap-3">
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter cancellation reason..."
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
              />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="w-full block">
                      <Button
                        size="lg"
                        disabled={ride.status !== "REQUESTED"}
                        variant="outline"
                        onClick={handleCancel}
                        className="w-full rounded bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
                      >
                        Cancel
                      </Button>
                    </span>
                  </TooltipTrigger>
                  {ride.status !== "REQUESTED" && (
                    <TooltipContent>
                      <p>You cannot cancel this ride after accept</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* CTA Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience All These Features
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already enjoying the benefits of
            RideManager's comprehensive feature set.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="rounded  bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
              >
                Start Riding <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                className="bg-white text-primary rounded hover:bg-white/90"
              >
                Become a Driver
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
