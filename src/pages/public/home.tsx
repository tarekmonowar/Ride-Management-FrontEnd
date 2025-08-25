import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import heroImage from "@/assets/images/hero-ride-sharing.jpg";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))] overflow-hidden">
        <div className="max-w-7xl px-[32px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Your Perfect Ride,
                <span className="block text-secondary">Just a Tap Away</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in">
                Experience the future of transportation with our comprehensive
                ride management platform. Safe, reliable, and convenient rides
                for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
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

            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Modern ride sharing interface"
                className="w-full h-auto rounded-xl shadow-shadow-strong"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Happy Riders</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">5K+</div>
              <div className="text-muted-foreground">Active Drivers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Cities</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose RideManager?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the most comprehensive and user-friendly ride
              management experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-dashboard text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Shield className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safe & Secure</h3>
                <p className="text-muted-foreground">
                  Advanced safety features including real-time tracking, driver
                  verification, and emergency SOS
                </p>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Clock className="h-8 w-8 text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quick & Reliable</h3>
                <p className="text-muted-foreground">
                  Get matched with nearby drivers instantly and enjoy
                  consistent, on-time pickups
                </p>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[hsl(142_71%_45%/_0.1)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[hsl(142_71%_45%)] group-hover:text-white transition-all duration-300">
                  <Star className="h-8 w-8 text-[hsl(142_71%_45%)] group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Premium Experience
                </h3>
                <p className="text-muted-foreground">
                  Enjoy comfortable rides with vetted drivers and excellent
                  customer service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to get your ride
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Book Your Ride</h3>
              <p className="text-muted-foreground">
                Enter your pickup and destination. Choose your preferred ride
                type and payment method.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Our system finds the nearest available driver and shares their
                details with you.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[hsl(142_71%_45%)] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Enjoy Your Ride</h3>
              <p className="text-muted-foreground">
                Track your ride in real-time and enjoy a safe, comfortable
                journey to your destination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of riders and drivers who trust RideManager for their
            daily transportation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-primary rounded hover:bg-white/90"
              >
                Sign Up as Rider
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                variant="outline"
                className="rounded bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
              >
                Become a Driver
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
