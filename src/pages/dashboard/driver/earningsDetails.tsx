import { useGetDriverEarningsQuery } from "@/redux/features/driver/driver.api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export default function EarningsDetails() {
  const { data, isLoading, isError } = useGetDriverEarningsQuery(undefined);
  const result = data?.data;

  const { data: user } = useUserInfoQuery(undefined);
  const userData = user?.data;

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Skeleton className="h-32 w-full mb-6 rounded-xl" />
          <Skeleton className="h-32 w-full mb-6 rounded-xl" />
          <Skeleton className="h-32 w-full mb-6 rounded-xl" />
        </div>
        <Skeleton className="h-56 w-full rounded-xl" />
      </div>
    );
  }

  if (isError || !data) {
    return <p className="text-center text-gray-500 py-20">No earnings found</p>;
  }

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-yellow-50 to-white min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Card className="shadow-md border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-blue-700">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-800">
              ${result?.totalEarnings.toFixed(2)}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-blue-700">Completed Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gray-800">
              {result?.totalRides}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-md border border-gray-200 rounded-2xl">
          <CardHeader>
            <CardTitle className="text-red-700">Canceled Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-800">
              {userData?.cancelledRidesCount}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Ride Table */}
      <Card className="shadow-lg border border-gray-200 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-blue-700">Ride History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pickup</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Earning</TableHead>
                <TableHead>Completed At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {result?.rides.map((ride) => (
                <TableRow key={ride._id}>
                  <TableCell>{ride.pickupLocation?.address}</TableCell>
                  <TableCell>{ride.destination?.address}</TableCell>
                  <TableCell className="font-semibold">
                    ${ride.estimatedCost}
                  </TableCell>
                  <TableCell>
                    {ride.completedAt
                      ? new Date(ride.completedAt).toLocaleString()
                      : "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
