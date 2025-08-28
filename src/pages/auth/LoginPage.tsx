/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Car, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useLoginMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;

  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Redirect if already authenticated
  useEffect(() => {
    if (user) {
      const from =
        location.state?.from?.pathname || getDashboardPath(user.role);
      navigate(from, { replace: true });
    }
  }, [user, navigate, location]);

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

    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try {
      const result = await login(formData).unwrap();
      console.log(result);

      if (result.data?.user) {
        toast.success(`Welcome back, ${result.data.user.name}!`);
        const from =
          location.state?.from?.pathname ||
          getDashboardPath(result.data.user.role);
        navigate(from, { replace: true });
      } else {
        toast.info(result.data?.message || "Login failed. Please try again.");
      }
    } catch (err: any) {
      if (err.data.message === "Password does not match") {
        toast.error("Invalid credentials");
      }

      if (err.data.message === "User is not Verified") {
        toast.error("Your account is not verified");
        navigate("/verify", { state: formData.email });
      }
      console.error(err);
      const message = err.data.message || "Login failed";
      toast.error(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const demoAccounts = [
    { role: "Rider", email: "rider@demo.com", password: "12345Ph@" },
    { role: "Driver", email: "driver@demo.com", password: "12345Ph@" },
    { role: "Admin", email: "admin@demo.com", password: "12345Ph@" },
  ];

  const fillDemoAccount = (email: string, password: string) => {
    setFormData({ email, password });
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

        {/* Login Form */}
        <Card className="card-dashboard">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
            <p className="text-center text-muted-foreground">
              Sign in to your account to continue
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
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

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full btn-hero"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/register" className="text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary hover:underline font-medium"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Accounts */}
        <Card className="card-dashboard mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Demo Accounts</CardTitle>
            <p className="text-sm text-muted-foreground">
              Try the platform with pre-configured demo accounts
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {demoAccounts.map((account) => (
                <button
                  key={account.role}
                  onClick={() =>
                    fillDemoAccount(account.email, account.password)
                  }
                  className="w-full p-3 text-left border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="font-medium">{account.role} Demo</div>
                  <div className="text-sm text-muted-foreground">
                    {account.email}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
