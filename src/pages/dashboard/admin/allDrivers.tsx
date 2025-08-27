/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

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
} from "@/redux/features/admin/admin.api";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function AllDrivers() {
  const { data, isLoading } = useAllDriversQuery(undefined);
  const [toggleBlock, { isLoading: toggleLoading }] =
    useToggleBlockUserMutation();
  const drivers = data?.data;

  const handleToggle = async (driver: any) => {
    try {
      console.log("fuck driver", driver);
      await toggleBlock({
        userId: driver._id,
        isBlocked: !driver.isBlocked,
      }).unwrap();

      toast.success(
        `Driver ${driver.isBlocked ? "unblocked" : "blocked"} successfully`,
      );
    } catch (err: any) {
      const errorMessage =
        err?.data?.message ||
        err?.error ||
        err?.message ||
        "Something went wrong";

      toast.error(errorMessage);
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
      <Card className="shadow rounded-2xl border border-gray-200">
        <CardContent className="p-4">
          <Table>
            <TableCaption>List of all registered users</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right pr-8">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver: any) => (
                <TableRow key={driver._id}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{driver.email}</TableCell>
                  <TableCell>{driver.role}</TableCell>
                  <TableCell>
                    {driver.isBlocked ? (
                      <span className="text-red-500 font-semibold">
                        Blocked
                      </span>
                    ) : (
                      <span className="text-green-600 font-semibold">
                        Active
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-3">
                      <Button
                        variant={driver.isBlocked ? "default" : "destructive"}
                        size="sm"
                        onClick={() => handleToggle(driver)}
                        disabled={toggleLoading}
                        className="w-[80px] rounded text-lg "
                      >
                        {toggleLoading ? (
                          <Loader2 className="animate-spin h-4 w-4 mr-2" />
                        ) : driver.isBlocked ? (
                          "Unblock"
                        ) : (
                          "Block"
                        )}
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
