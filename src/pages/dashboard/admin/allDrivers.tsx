/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useAllDriversQuery,
  useToggleBlockUserMutation,
  useReviewDriverMutation,
} from "@/redux/features/admin/admin.api";
import { Bike, Car, CheckCircle, Eye, Loader2, XCircle } from "lucide-react";
import { toast } from "sonner";

export default function AllDrivers() {
  const { data, isLoading } = useAllDriversQuery(undefined);
  const [toggleBlock, { isLoading: toggleLoading }] =
    useToggleBlockUserMutation();
  const [reviewDriver, { isLoading: reviewLoading }] =
    useReviewDriverMutation();
  const drivers = data?.data;

  const [rejectDialog, setRejectDialog] = useState<{
    open: boolean;
    driverId: string;
    driverName: string;
  }>({
    open: false,
    driverId: "",
    driverName: "",
  });
  const [rejectionReason, setRejectionReason] = useState("");
  const [docsDialog, setDocsDialog] = useState<{ open: boolean; driver: any }>({
    open: false,
    driver: null,
  });

  const handleToggle = async (driver: any) => {
    try {
      await toggleBlock({
        userId: driver._id,
        isBlocked: !driver.isBlocked,
      }).unwrap();
      toast.success(
        `Driver ${driver.isBlocked ? "unblocked" : "blocked"} successfully`,
      );
    } catch (err: any) {
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  const handleApprove = async (driverId: string) => {
    try {
      await reviewDriver({ driverId, action: "approve" }).unwrap();
      toast.success("Driver approved! Confirmation email sent.");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to approve driver");
    }
  };

  const handleReject = async () => {
    if (!rejectionReason.trim()) {
      toast.error("Please enter a rejection reason");
      return;
    }
    try {
      await reviewDriver({
        driverId: rejectDialog.driverId,
        action: "reject",
        reason: rejectionReason,
      }).unwrap();
      toast.success("Driver rejected. Email notification sent.");
      setRejectDialog({ open: false, driverId: "", driverName: "" });
      setRejectionReason("");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to reject driver");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Docs Dialog */}
      {docsDialog.open && docsDialog.driver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Documents — {docsDialog.driver.name}
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDocsDialog({ open: false, driver: null })}
              >
                Close
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold mb-2">NID Photo</p>
                {docsDialog.driver.nidPhoto ? (
                  <img
                    src={docsDialog.driver.nidPhoto}
                    alt="NID"
                    className="rounded border w-full object-contain max-h-64"
                  />
                ) : (
                  <p className="text-gray-400 text-sm">Not uploaded</p>
                )}
              </div>
              <div>
                <p className="font-semibold mb-2">Driving License</p>
                {docsDialog.driver.drivingLicensePhoto ? (
                  <img
                    src={docsDialog.driver.drivingLicensePhoto}
                    alt="License"
                    className="rounded border w-full object-contain max-h-64"
                  />
                ) : (
                  <p className="text-gray-400 text-sm">Not uploaded</p>
                )}
              </div>
            </div>
            {docsDialog.driver.vehicle && (
              <div className="border-t pt-3 text-sm space-y-1">
                <p>
                  <span className="font-medium">Vehicle:</span>{" "}
                  {docsDialog.driver.vehicle.type?.toUpperCase()} —{" "}
                  {docsDialog.driver.vehicle.make}{" "}
                  {docsDialog.driver.vehicle.model}
                </p>
                <p>
                  <span className="font-medium">Color:</span>{" "}
                  {docsDialog.driver.vehicle.color}
                </p>
                <p>
                  <span className="font-medium">Plate:</span>{" "}
                  {docsDialog.driver.vehicle.licensePlate}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Reject Dialog */}
      {rejectDialog.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 space-y-4">
            <h2 className="text-xl font-bold">
              Reject Driver — {rejectDialog.driverName}
            </h2>
            <p className="text-gray-500 text-sm">
              An email will be sent to the driver with your reason.
            </p>
            <textarea
              className="w-full border rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-red-400"
              rows={4}
              placeholder="Enter rejection reason..."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  setRejectDialog({
                    open: false,
                    driverId: "",
                    driverName: "",
                  });
                  setRejectionReason("");
                }}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-600 text-white hover:bg-red-700"
                onClick={handleReject}
                disabled={reviewLoading}
              >
                {reviewLoading ? (
                  <Loader2 className="animate-spin h-4 w-4" />
                ) : (
                  "Reject & Send Email"
                )}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Card className="shadow rounded-2xl border border-gray-200">
        <CardContent className="p-4 overflow-x-auto">
          <Table>
            <TableCaption>List of all registered drivers</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>App Status</TableHead>
                <TableHead>Account</TableHead>
                <TableHead>Docs</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers?.map((driver: any) => (
                <TableRow key={driver._id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell className="text-sm">{driver.email}</TableCell>
                  <TableCell>
                    {driver.vehicle?.type ? (
                      <Badge
                        className={
                          driver.vehicle.type === "bike"
                            ? "bg-purple-500 text-white"
                            : "bg-indigo-500 text-white"
                        }
                      >
                        {driver.vehicle.type === "bike" ? (
                          <Bike className="w-3 h-3 mr-1 inline" />
                        ) : (
                          <Car className="w-3 h-3 mr-1 inline" />
                        )}
                        {driver.vehicle.type}
                      </Badge>
                    ) : (
                      <span className="text-gray-400 text-sm">—</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        driver.applicationStatus === "approved"
                          ? "bg-green-500 text-white"
                          : driver.applicationStatus === "rejected"
                            ? "bg-red-500 text-white"
                            : "bg-yellow-500 text-white"
                      }
                    >
                      {driver.applicationStatus || "pending"}
                    </Badge>
                    {driver.applicationStatus === "rejected" &&
                      driver.rejectionReason && (
                        <p
                          className="text-xs text-red-500 mt-1 max-w-[120px] truncate"
                          title={driver.rejectionReason}
                        >
                          {driver.rejectionReason}
                        </p>
                      )}
                  </TableCell>
                  <TableCell>
                    {driver.isBlocked ? (
                      <span className="text-red-500 font-semibold text-sm">
                        Blocked
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold text-sm">
                        Active
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setDocsDialog({ open: true, driver })}
                      className="text-xs"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-2 flex-wrap">
                      {driver.applicationStatus === "pending" && (
                        <>
                          <Button
                            size="sm"
                            className="bg-green-600 text-white hover:bg-green-700 text-xs"
                            onClick={() => handleApprove(driver._id)}
                            disabled={reviewLoading}
                          >
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-600 text-white hover:bg-red-700 text-xs"
                            onClick={() =>
                              setRejectDialog({
                                open: true,
                                driverId: driver._id,
                                driverName: driver.name,
                              })
                            }
                          >
                            <XCircle className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                      <Button
                        variant={driver.isBlocked ? "default" : "destructive"}
                        size="sm"
                        onClick={() => handleToggle(driver)}
                        disabled={toggleLoading}
                        className="text-xs"
                      >
                        {driver.isBlocked ? "Unblock" : "Block"}
                      </Button>
                    </div>
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
