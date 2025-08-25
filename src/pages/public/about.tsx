import { Car, Users, Target, Heart, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            About RideManagement
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We're revolutionizing urban transportation by connecting riders and
            drivers through innovative technology and exceptional service.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To make transportation accessible, affordable, and reliable for
                everyone. We believe that mobility is a fundamental right that
                should be available to all members of our community.
              </p>
              <p className="text-lg text-muted-foreground">
                Through cutting-edge technology and a commitment to safety,
                we're building a platform that serves both riders seeking
                convenient transportation and drivers looking for flexible
                earning opportunities.
              </p>
            </div>
            <div className="bg-gradient-card p-8 rounded-radius-xl">
              <Target className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a world where transportation is seamless, sustainable,
                and accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Safety First</h3>
                <p className="text-muted-foreground">
                  We prioritize the safety and security of all our users through
                  rigorous verification processes and advanced safety features.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-secondary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Community</h3>
                <p className="text-muted-foreground">
                  We're building more than a service - we're creating a
                  community of riders and drivers who support each other.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <Award className="h-16 w-16 text-success mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We continuously strive for excellence in every aspect of our
                  service, from technology to customer support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              The passionate people behind RideManager
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6">
                  {" "}
                  <img src="/public/tm.png"></img>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tarek Monowar</h3>
                <p className="text-primary font-medium mb-4">
                  CEO & Co-Founder
                </p>
                <p className="text-muted-foreground">
                  Former Uber executive with 10+ years in transportation
                  technology.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-secondary rounded-full mx-auto mb-6">
                  <img src="/public/tm.png"></img>
                </div>
                <h3 className="text-xl font-semibold mb-2">PH Lavel-2</h3>
                <p className="text-primary font-medium mb-4">
                  CTO & Co-Founder
                </p>
                <p className="text-muted-foreground">
                  Tech veteran with expertise in scalable platforms and AI.
                </p>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gradient-to-r from-success to-success/70 rounded-full mx-auto mb-6">
                  {" "}
                  <img src="/public/tm.png"></img>
                </div>
                <h3 className="text-xl font-semibold mb-2">Janker Mahbub</h3>
                <p className="text-primary font-medium mb-4">
                  Head of Operations
                </p>
                <p className="text-muted-foreground">
                  Operations expert focused on driver and rider experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90">
              Making a difference in transportation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Globe className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Cities Served</div>
            </div>
            <div>
              <Users className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">15K+</div>
              <div className="text-white/90">Total Users</div>
            </div>
            <div>
              <Car className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/90">Rides Completed</div>
            </div>
            <div>
              <Award className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/90">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking for reliable transportation or flexible
            earning opportunities, we'd love to have you as part of the
            RideManager family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-primary rounded border border-gray-400 hover:bg-gray-200"
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
    </div>
  );
};

export default AboutPage;
