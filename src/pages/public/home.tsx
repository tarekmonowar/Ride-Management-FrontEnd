import heroImage from "@/assets/images/hero-ride-sharing.jpg";
import { AppDownloadSection } from "@/components/module/home/AppDownloadSections";
import RequestRide from "@/components/module/home/requestRide";
import SixCards from "@/components/module/home/SixCards";
import CountUp from "@/components/module/home/StatsCard";
import { WaveFlowSection } from "@/components/module/home/WaveFlowSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))] overflow-hidden">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
                Your Perfect Ride,
                <span className="block text-secondary">Just a Tap Away</span>
              </h1>
              <p className="text-xl text-white/90 mb-10 xl:mb-10 animate-fade-in">
                Experience the future of transportation with our comprehensive
                ride management platform. Safe, reliable, and convenient rides
                for everyone.
              </p>
              <div className="relative">
                <div className="absolute left-[15px] top-[30px] bottom-[30px] w-[2px] bg-gradient-to-b from-secondary via-[#5e0866] to-secondary"></div>

                <div className="absolute left-[9px] top-[15px] w-[14px] h-[14px] rounded-full bg-secondary"></div>
                <div className="absolute left-[9px] bottom-[15px] w-[14px] h-[14px] rounded-full bg-secondary"></div>

                <div className="grid grid-cols-1 gap-6 pl-10 md:grid-cols-2">
                  <Card className="border-none shadow-lg bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%)))] rounded-md pt-3">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
                        Book Your Ride
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-purple-100 drop-shadow-sm -mt-2">
                      <p>
                        Enter pickup and destination on our intuitive map
                        interface
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%)))] rounded-md  pt-3">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
                        Get Matched
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-purple-100 drop-shadow-sm">
                      <p>
                        Our smart system finds the perfect driver for you
                        instantly
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg  bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] rounded-md  pt-3">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
                        Track in Real-Time
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-purple-100 drop-shadow-sm">
                      <p>Watch your driver arrive with live GPS ytacking</p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg  bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%)))] rounded-md  pt-3 ">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-white drop-shadow-sm">
                        Enjoy Your journey
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-purple-100 drop-shadow-sm">
                      <p>Relax and enjoy a safe ride to your destination</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full justify-between">
              <div className="relative animate-float">
                <img
                  src={heroImage}
                  alt="Modern ride sharing interface"
                  className="w-full  rounded-xl shadow-shadow-strong"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in mt-24 mb-2">
                <Link to="/rider-dashboard/book">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded  text-md bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-white"
                  >
                    Start Riding <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    size="lg"
                    className="bg-white text-black rounded text-md hover:bg-white/90 hover:scale-105 px-4"
                  >
                    Become a Driver
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ride booking Section */}
      <RequestRide />

      {/* Stats Section */}
      <section className="py-16 bg-white ">
        <div>
          <img src="/rideimage.jpg" alt="" />
        </div>
        <div className="max-w-7xl mx-auto p-4 mt-5">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={10000} suffix="+" />{" "}
              </div>
              <div className="text-muted-foreground">Happy Riders</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                {" "}
                <CountUp end={1200} suffix="+" />
              </div>
              <div className="text-muted-foreground">Active Drivers</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={50} suffix="+" />
              </div>
              <div className="text-muted-foreground">Cities</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                {" "}
                <CountUp end={4.8} decimals={1} />★
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 card section */}
      <SixCards />

      {/* Features Section */}
      <section className="py-20 bg-[rgba(0,102,153,0.1)]">
        <WaveFlowSection />
      </section>

      <AppDownloadSection />

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
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
              <div className="w-16 h-16 bg-fuchsia-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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
