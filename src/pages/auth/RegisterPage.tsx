/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Car, Eye, EyeOff, Loader2, User, UserCheck } from "lucide-react";
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
    vehicleMake: "",
    vehicleModel: "",
    vehicleColor: "",
    plateNumber: "",
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
      if (
        !formData.vehicleMake ||
        !formData.vehicleModel ||
        !formData.vehicleColor ||
        !formData.plateNumber
      ) {
        toast.error("Please fill in all vehicle information");
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
            make: formData.vehicleMake,
            model: formData.vehicleModel,
            color: formData.vehicleColor,
            plateNumber: formData.plateNumber,
          },
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
    } catch (error: any) {
      toast.error(
        error?.data?.message || "Registration failed. Please try again.",
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
