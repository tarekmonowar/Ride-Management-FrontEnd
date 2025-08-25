import {
  Car,
  Shield,
  Clock,
  Star,
  MapPin,
  CreditCard,
  Smartphone,
  Users,
  BarChart3,
  AlertTriangle,
  Headphones,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover all the features that make RideManager the best choice for
            riders, drivers, and administrators.
          </p>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="riders">For Riders</TabsTrigger>
              <TabsTrigger value="drivers">For Drivers</TabsTrigger>
              <TabsTrigger value="admins">For Admins</TabsTrigger>
            </TabsList>

            {/* Rider Features */}
            <TabsContent value="riders">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Rider Features</h2>
                <p className="text-xl text-muted-foreground">
                  Everything you need for a perfect ride experience
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="card-dashboard">
                  <CardHeader>
                    <MapPin className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Easy Booking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Book rides with just a few taps. Enter pickup and
                      destination, choose your ride type, and get instant fare
                      estimates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Clock className="h-12 w-12 text-secondary mb-4" />
                    <CardTitle>Real-time Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Track your driver's location in real-time and get accurate
                      ETA updates throughout your journey.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <CreditCard className="h-12 w-12 text-success mb-4" />
                    <CardTitle>Multiple Payment Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Pay with cash, credit card, or digital wallet. Automatic
                      payments and ride receipts for your convenience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Star className="h-12 w-12 text-warning mb-4" />
                    <CardTitle>Rating & Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Rate your rides and provide feedback to help maintain high
                      service quality across the platform.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
                    <CardTitle>Emergency SOS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Built-in emergency features with one-tap SOS button and
                      automatic location sharing with emergency contacts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <BarChart3 className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Ride History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      View your complete ride history with detailed receipts,
                      routes, and expense tracking for personal or business use.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Driver Features */}
            <TabsContent value="drivers">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Driver Features</h2>
                <p className="text-xl text-muted-foreground">
                  Powerful tools to maximize your earnings and efficiency
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="card-dashboard">
                  <CardHeader>
                    <Zap className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Instant Ride Requests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Receive ride requests instantly with detailed pickup
                      information and fare estimates. Accept or decline based on
                      your preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <BarChart3 className="h-12 w-12 text-secondary mb-4" />
                    <CardTitle>Earnings Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Track your daily, weekly, and monthly earnings with
                      detailed analytics and insights to optimize your driving
                      schedule.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Smartphone className="h-12 w-12 text-success mb-4" />
                    <CardTitle>Online/Offline Toggle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Control your availability with a simple toggle. Go online
                      when ready to accept rides, offline when you need a break.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <MapPin className="h-12 w-12 text-warning mb-4" />
                    <CardTitle>Navigation Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Integrated navigation with turn-by-turn directions and
                      optimal route suggestions for efficient rides.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-destructive mb-4" />
                    <CardTitle>Driver Safety</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enhanced safety features including rider verification,
                      emergency assistance, and 24/7 support.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Star className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monitor your ratings, completion rates, and performance
                      metrics to maintain high service standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Admin Features */}
            <TabsContent value="admins">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Admin Features</h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive tools for platform management and oversight
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="card-dashboard">
                  <CardHeader>
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Manage riders and drivers with tools for verification,
                      status updates, and account administration.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <BarChart3 className="h-12 w-12 text-secondary mb-4" />
                    <CardTitle>Analytics Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Comprehensive analytics with ride volume, revenue trends,
                      user growth, and platform performance metrics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Car className="h-12 w-12 text-success mb-4" />
                    <CardTitle>Ride Oversight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monitor all rides in real-time with filtering, search, and
                      detailed ride information for quality control.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <AlertTriangle className="h-12 w-12 text-warning mb-4" />
                    <CardTitle>Safety Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Advanced safety monitoring with incident reporting,
                      emergency response coordination, and safety analytics.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Headphones className="h-12 w-12 text-destructive mb-4" />
                    <CardTitle>Support Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Customer support integration with ticket management, user
                      communication tools, and issue resolution tracking.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>Security & Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Advanced security features with fraud detection,
                      compliance monitoring, and data protection tools.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))]">
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
};

export default FeaturesPage;
