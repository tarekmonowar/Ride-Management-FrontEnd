/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Car, Eye, EyeOff, Home, Loader2, User, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  useRegisterMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  const [register, { isLoading }] = useRegisterMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(
    searchParams.get("role") === "driver" ? "driver" : "rider",
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    // Driver specific fields
    vehicleType: "car" as "bike" | "car",
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    plateNumber: "",
    nidPhoto: "",
    drivingLicensePhoto: "",
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      const dashboardPath = getDashboardPath(user.role);
      navigate(dashboardPath, { replace: true });
    }
  }, [user, navigate]);

  const getDashboardPath = (role: string) => {
    switch (role) {
      case "RIDER":
        return "/rider-dashboard";
      case "DRIVER":
        return "/driver-dashboard";
      case "SUPER_ADMIN":
        return "/admin-dashboard";
      default:
        return "/";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (formData.name.length < 2 || formData.name.length > 15) {
      toast.error("Name must be between 2 and 15 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    // Driver specific validation
    if (activeTab === "driver") {
      const { vehicleType, vehicleMake, vehicleModel, vehicleColor, plateNumber, nidPhoto, drivingLicensePhoto } = formData;

      if (!vehicleType || !vehicleMake || !vehicleModel || !vehicleColor || !plateNumber) {
        toast.error("Please fill in all vehicle information");
        return;
      }

      if (!nidPhoto) {
        toast.error("Please upload your NID photo");
        return;
      }

      if (!drivingLicensePhoto) {
        toast.error("Please upload your driving license photo");
        return;
      }

      if (vehicleMake.length < 2 || vehicleMake.length > 20) {
        toast.error("Vehicle Make must be between 2 and 20 characters");
        return;
      }

      if (vehicleModel.length < 2 || vehicleModel.length > 20) {
        toast.error("Vehicle Model must be between 2 and 20 characters");
        return;
      }

      if (vehicleColor.length < 2 || vehicleColor.length > 20) {
        toast.error("Vehicle Color must be between 2 and 20 characters");
        return;
      }

      if (plateNumber.length < 5 || plateNumber.length > 10) {
        toast.error("Plate Number must be between 5 and 10 characters");
        return;
      }
    }

    try {
      const registerData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: activeTab as "rider" | "driver",
        phone: formData.phone,
        ...(activeTab === "driver" && {
          vehicleInfo: {
            type: formData.vehicleType,
            make: formData.vehicleMake,
            model: formData.vehicleModel,
            color: formData.vehicleColor,
            licensePlate: formData.plateNumber,
          },
          nidPhoto: formData.nidPhoto,
          drivingLicensePhoto: formData.drivingLicensePhoto,
        }),
      };

      const result = await register(registerData).unwrap();
      console.log(result);

      if (result?.data) {
        toast.success(`Welcome to RideManagement, ${result.data.name}!`);
        if (activeTab === "driver") {
          setTimeout(() => {
            toast.info("Your driver account is pending approval by admin.");
            navigate("/verify", { state: formData.email });
          }, 3000);
        } else {
          // Non-driver users navigate immediately
          navigate("/verify", { state: formData.email });
        }
      } else {
        toast.error(
          result?.message || "Registration failed. Please try again.",
        );
      }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, [field]: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <Car className="h-10 w-10 text-white" />
            <span className="text-3xl font-bold text-white">RideManager</span>
          </Link>
        </div>

        {/* Back to Home */}
        <div className="text-center mb-4">
          <Link to="/">
            <Button
              variant="outline"
              className="rounded-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white px-6 py-2 font-medium transition-all duration-300 hover:scale-105"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Registration Form */}
        <Card className="card-dashboard">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Join Rider</CardTitle>
            <p className="text-center text-muted-foreground">
              Create your account to get started
            </p>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="rider" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Rider
                </TabsTrigger>
                <TabsTrigger value="driver" className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4" />
                  Driver
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Common Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1234567890"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Driver Specific Fields */}
                <TabsContent value="driver" className="mt-6 space-y-4">
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-4">Vehicle Information</h3>
                    <div className="mb-4">
                      <Label htmlFor="vehicleType">Vehicle Type *</Label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={(e) => setFormData((prev) => ({ ...prev, vehicleType: e.target.value as "bike" | "car" }))}
                        className="w-full rounded border p-2 bg-white"
                        required={activeTab === "driver"}
                      >
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="vehicleMake">Make *</Label>
                        <Input
                          id="vehicleMake"
                          name="vehicleMake"
                          value={formData.vehicleMake}
                          onChange={handleChange}
                          placeholder="Toyota"
                          required={activeTab === "driver"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="vehicleModel">Model *</Label>
                        <Input
                          id="vehicleModel"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="Camry"
                          required={activeTab === "driver"}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="vehicleColor">Color *</Label>
                        <Input
                          id="vehicleColor"
                          name="vehicleColor"
                          value={formData.vehicleColor}
                          onChange={handleChange}
                          placeholder="Blue"
                          required={activeTab === "driver"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="plateNumber">Plate Number *</Label>
                        <Input
                          id="plateNumber"
                          name="plateNumber"
                          value={formData.plateNumber}
                          onChange={handleChange}
                          placeholder="ABC-123"
                          required={activeTab === "driver"}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="nidPhoto">NID Photo *</Label>
                      <Input
                        id="nidPhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "nidPhoto")}
                        className="bg-white"
                        required={activeTab === "driver"}
                      />
                      {formData.nidPhoto && (
                        <p className="text-xs text-green-600 mt-1">NID photo uploaded</p>
                      )}
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="drivingLicensePhoto">Driving License Photo *</Label>
                      <Input
                        id="drivingLicensePhoto"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, "drivingLicensePhoto")}
                        className="bg-white"
                        required={activeTab === "driver"}
                      />
                      {formData.drivingLicensePhoto && (
                        <p className="text-xs text-green-600 mt-1">Driving license photo uploaded</p>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="rider" className="mt-0" />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-hero mt-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    `Create ${
                      activeTab === "driver" ? "Driver" : "Rider"
                    } Account`
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary hover:underline font-medium"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
