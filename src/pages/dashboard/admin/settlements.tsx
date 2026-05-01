/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useGetSettlementsQuery,
  useSettleDriverMutation,
} from "@/redux/features/admin/admin.api";
import { CheckCircle, Loader2, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export default function Settlements() {
  const { data, isLoading, refetch } = useGetSettlementsQuery(undefined);
  const settlements = data?.data || [];
  const [settleDriver, { isLoading: settling }] = useSettleDriverMutation();

  const handleSettle = async (driverId: string, driverName: string) => {
    try {
      const result = await settleDriver(driverId).unwrap();
      toast.success(
        `Settled ${result.data?.modifiedCount || 0} cash ride(s) for ${driverName}`,
      );
      refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to settle driver");
    }
  };

  const totalUnsettled = settlements.reduce(
    (sum: number, s: any) => sum + (s.unsettledCash || 0),
    0,
  );
  const totalSettled = settlements.reduce(
    (sum: number, s: any) => sum + (s.settledCash || 0),
    0,
  );
  const totalStripe = settlements.reduce(
    (sum: number, s: any) => sum + (s.stripeTotal || 0),
    0,
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Driver Settlements</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-orange-600">
              Unsettled Cash
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-orange-600">
              ${totalUnsettled.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Cash collected by drivers not yet remitted to owner
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-green-600">
              Settled Cash
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-green-600">
              ${totalSettled.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Cash already accounted for
            </p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-blue-600 flex items-center gap-1">
              <TrendingUp className="h-4 w-4" /> Stripe Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-blue-600">
              ${totalStripe.toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Directly deposited to account
            </p>
          </CardContent>
        </Card>
      </div>

      {settlements.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-gray-500">
            No settlement data found. Payments will appear here once drivers
            complete rides.
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow rounded-2xl border border-gray-200">
          <CardContent className="p-4 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Total Rides</TableHead>
                  <TableHead className="text-right">Total Earnings</TableHead>
                  <TableHead className="text-right">Cash Total</TableHead>
                  <TableHead className="text-right">Stripe Total</TableHead>
                  <TableHead className="text-right">Unsettled Cash</TableHead>
                  <TableHead className="text-right">Settled Cash</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {settlements.map((s: any) => (
                  <TableRow key={s.driverId}>
                    <TableCell className="font-medium">
                      {s.driverName}
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {s.driverEmail}
                    </TableCell>
                    <TableCell className="text-right">{s.totalRides}</TableCell>
                    <TableCell className="text-right font-semibold">
                      ${s.totalEarnings?.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      ${s.cashTotal?.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right text-blue-600">
                      ${s.stripeTotal?.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      {s.unsettledCash > 0 ? (
                        <Badge className="bg-orange-500 text-white">
                          ${s.unsettledCash?.toFixed(2)}
                        </Badge>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right text-green-600">
                      ${s.settledCash?.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-center">
                      {s.unsettledCash > 0 ? (
                        <Button
                          size="sm"
                          className="bg-green-600 text-white hover:bg-green-700"
                          onClick={() => handleSettle(s.driverId, s.driverName)}
                          disabled={settling}
                        >
                          {settling ? (
                            <Loader2 className="animate-spin h-3 w-3" />
                          ) : (
                            <>
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Settle Now
                            </>
                          )}
                        </Button>
                      ) : (
                        <Badge className="bg-green-500 text-white">
                          Settled
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
