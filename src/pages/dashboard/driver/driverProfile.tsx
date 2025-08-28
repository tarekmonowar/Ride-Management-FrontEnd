/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  useChangePasswordMutation,
  useUpdateUserMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { Eye, EyeOff } from "lucide-react";

export default function DriverProfileUpdate() {
  const { data: user, isLoading } = useUserInfoQuery(undefined);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  const [changePassword, { isLoading: isChangingPassword }] =
    useChangePasswordMutation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    vehicleModel: "",
    vehiclePlate: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  // User Profile
  useEffect(() => {
    if (user?.data) {
      setFormData({
        name: user.data.name || "",
        phone: user.data.phone || "",
        address: user.data.address || "",
        vehicleModel: user.data.vehicle?.model || "",
        vehiclePlate: user.data.vehicle?.licensePlate || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUser({
        userId: user?.data._id,
        data: {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          vehicle: {
            model: formData.vehicleModel,
            licensePlate: formData.vehiclePlate,
          },
        },
      }).unwrap();

      toast.success("Profile updated successfully!");
    } catch (e: any) {
      const errorData = e?.data;
      let message = "Registration failed.";
      if (errorData?.errorSource?.length > 0) {
        const seen = new Set();
        message = errorData.errorSource
          .filter((e: any) => {
            if (seen.has(e.path)) return false;
            seen.add(e.path);
            return true;
          })
          .map((e: any) => `${e.path}: ${e.message}`)
          .join(", ");
      } else if (errorData?.message) {
        message = errorData.message;
      } else if ((e.data as any)?.message) {
        message = (e.data as any).message;
      }
      toast.error(message);
    }
  };

  if (isLoading) return <p className="text-center py-6">Loading profile...</p>;

  //Password change
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !passwordData.oldPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (
      passwordData.oldPassword.length < 8 ||
      passwordData.newPassword.length < 8 ||
      passwordData.confirmPassword.length < 8
    ) {
      toast.error("All passwords must be at least 8 characters long.");
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      await changePassword({
        oldPassword: passwordData.oldPassword,
        newPassword: passwordData.newPassword,
      }).unwrap();

      toast.success("Password changed successfully!");
      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (e: any) {
      const errorData = e?.data;
      let message = "Registration failed.";
      if (errorData?.errorSource?.length > 0) {
        const seen = new Set();
        message = errorData.errorSource
          .filter((e: any) => {
            if (seen.has(e.path)) return false;
            seen.add(e.path);
            return true;
          })
          .map((e: any) => `${e.path}: ${e.message}`)
          .join(", ");
      } else if (errorData?.message) {
        message = errorData.message;
      } else if ((e.data as any)?.message) {
        message = (e.data as any).message;
      }
      toast.error(message);
    }
  };

  const toggle = (field: "old" | "new" | "confirm") =>
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));

  return (
    <div className="flex flex-col md:flex-row ">
      <Card className="max-w-xl mx-auto mt-8 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-bold">Update Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 grid grid-cols-2 gap-4"
          >
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
            />
            <Input
              name="vehicleModel"
              value={formData.vehicleModel}
              onChange={handleChange}
              placeholder="Vehicle Model"
            />
            <Input
              name="vehiclePlate"
              value={formData.vehiclePlate}
              onChange={handleChange}
              placeholder="License Plate"
            />

            <Button type="submit" disabled={isUpdating} className="w-full">
              {isUpdating ? "Updating..." : "Update Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* password card */}
      <Card className="w-sm mx-auto mt-8 shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmitPassword} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">
                Old Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword.old ? "text" : "password"}
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handleChangePassword}
                  placeholder="Enter old password"
                />
                <button
                  type="button"
                  onClick={() => toggle("old")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {showPassword.old ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword.new ? "text" : "password"}
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handleChangePassword}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => toggle("new")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {showPassword.new ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                Confirm New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handleChangePassword}
                  placeholder="Re-enter new password"
                />
                <button
                  type="button"
                  onClick={() => toggle("confirm")}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  {showPassword.confirm ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isChangingPassword}
              className="w-full"
            >
              {isChangingPassword ? "Changing..." : "Change Password"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
