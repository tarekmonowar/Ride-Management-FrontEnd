import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetPaymentsHistoryQuery } from "@/redux/features/admin/admin.api";

export default function AdminPaymentsDashboard() {
  const { data, isLoading, isError } = useGetPaymentsHistoryQuery();
  const result = data?.data;
  console.log(result);
  if (isLoading) {
    return (
      <div className="p-6 space-y-6">
        <Skeleton className="h-28 w-full rounded-xl" />
        <Skeleton className="h-96 w-full rounded-xl" />
      </div>
    );
  }

  if (isError || !data) {
    return <p className="text-center text-gray-500 py-20">No rides found</p>;
  }

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-yellow-50 to-white min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-10">
        <Card className="shadow-md border border-gray-200 rounded-2xl bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
          <CardHeader>
            <CardTitle className="text-black">Total Completed Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-yellow-500">
              Rides : {result?.totalCompletedRides}
            </p>
            <p className="text-lg font-semibold text-gray-100">
              Total Payments : ${result?.totalCompletedPayments.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md border border-gray-200 rounded-2xl bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
          <CardHeader>
            <CardTitle>Total Pending Rides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-800">
              Rides : {result?.totalPendingRides}
            </p>
            <p className="text-lg font-semibold text-gray-200">
              Total Payments : ${result?.totalPendingPayments.toFixed(2)}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {Object.entries(result?.ridesByStatus || {}).map(([status, info]) => (
          <Card
            key={status}
            className="shadow-md border border-gray-200 rounded-2xl"
          >
            <CardHeader>
              <CardTitle>{status.replace("_", " ")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{info.count}</p>
              <p className="text-lg font-semibold text-gray-600">
                ${info.totalPayment.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
