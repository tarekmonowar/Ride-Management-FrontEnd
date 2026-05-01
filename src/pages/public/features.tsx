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
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  iconColor,
  gradient,
  id,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor: string;
  gradient: string;
  id: string;
}) => (
  <div
    className="premium-card rounded-2xl p-6 bg-card border border-border group"
    id={id}
  >
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
    >
      <Icon className={`h-6 w-6 ${iconColor}`} />
    </div>
    <h3 className="text-base font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── Hero ─── */}
      <section className="relative py-28 hero-gradient overflow-hidden" id="features-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-6 inline-flex !bg-white/10 !border-white/15 !text-white/80">
            <Sparkles className="h-3.5 w-3.5" />
            Platform Features
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful features for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
              every user
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Discover the comprehensive toolset that makes RidePanda the smartest
            choice for riders, drivers, and fleet administrators.
          </p>
        </div>
      </section>

      {/* ─── Highlight Strip ─── */}
      <section className="py-10 bg-background border-b border-border" id="feature-highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Zap, label: "< 15s Matching", desc: "Average match time" },
              { icon: Shield, label: "99.9% Uptime", desc: "AWS-powered SLA" },
              { icon: MapPin, label: "50+ Cities", desc: "And expanding fast" },
              { icon: Star, label: "4.8★ Rating", desc: "From 10K+ users" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group" id={`highlight-${i}`}>
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Feature Tabs ─── */}
      <section className="py-24" id="features-tabs-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-14 h-12 bg-muted/50 rounded-xl p-1">
              <TabsTrigger
                value="riders"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium"
                id="tab-riders"
              >
                For Riders
              </TabsTrigger>
              <TabsTrigger
                value="drivers"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium"
                id="tab-drivers"
              >
                For Drivers
              </TabsTrigger>
              <TabsTrigger
                value="admins"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium"
                id="tab-admins"
              >
                For Admins
              </TabsTrigger>
            </TabsList>

            {/* Rider Features */}
            <TabsContent value="riders">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Rider <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-muted-foreground">
                  Everything you need for a perfect ride, every time
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <FeatureCard icon={MapPin} title="Smart Booking" description="Book rides with a few taps. Enter pickup and destination, choose your ride type, and get instant fare estimates with AI-optimized routes." iconColor="text-cyan-500" gradient="from-cyan-500/10 to-blue-500/10" id="feature-rider-1" />
                <FeatureCard icon={Clock} title="Real-time Tracking" description="Track your driver's location in real-time on an interactive map and get accurate ETA updates throughout your journey." iconColor="text-violet-500" gradient="from-violet-500/10 to-purple-500/10" id="feature-rider-2" />
                <FeatureCard icon={CreditCard} title="Multiple Payments" description="Pay with cash, credit card, or digital wallet. Automatic receipts and split-fare support for group rides." iconColor="text-emerald-500" gradient="from-emerald-500/10 to-green-500/10" id="feature-rider-3" />
                <FeatureCard icon={Star} title="Rating & Feedback" description="Rate your rides and provide feedback to help maintain consistently high service quality across the platform." iconColor="text-amber-500" gradient="from-amber-500/10 to-orange-500/10" id="feature-rider-4" />
                <FeatureCard icon={AlertTriangle} title="Emergency SOS" description="Built-in emergency features with one-tap SOS button and automatic location sharing with your emergency contacts." iconColor="text-rose-500" gradient="from-rose-500/10 to-red-500/10" id="feature-rider-5" />
                <FeatureCard icon={BarChart3} title="Ride History" description="View your complete ride history with detailed receipts, routes, and expense tracking for personal or business use." iconColor="text-cyan-500" gradient="from-cyan-500/10 to-teal-500/10" id="feature-rider-6" />
              </div>
            </TabsContent>

            {/* Driver Features */}
            <TabsContent value="drivers">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Driver <span className="gradient-text">Tools</span>
                </h2>
                <p className="text-muted-foreground">
                  Powerful tools to maximize your earnings and efficiency
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <FeatureCard icon={Zap} title="Instant Requests" description="Receive ride requests instantly with detailed pickup information and fare estimates. Accept or decline based on your preferences." iconColor="text-cyan-500" gradient="from-cyan-500/10 to-blue-500/10" id="feature-driver-1" />
                <FeatureCard icon={BarChart3} title="Earnings Dashboard" description="Track your daily, weekly, and monthly earnings with detailed analytics and insights to optimize your driving schedule." iconColor="text-violet-500" gradient="from-violet-500/10 to-purple-500/10" id="feature-driver-2" />
                <FeatureCard icon={Smartphone} title="Online/Offline Toggle" description="Control your availability with a simple toggle. Go online when ready to accept rides, offline when you need a break." iconColor="text-emerald-500" gradient="from-emerald-500/10 to-green-500/10" id="feature-driver-3" />
                <FeatureCard icon={MapPin} title="Smart Navigation" description="Integrated navigation with turn-by-turn directions and AI-optimized route suggestions for the most efficient rides." iconColor="text-amber-500" gradient="from-amber-500/10 to-orange-500/10" id="feature-driver-4" />
                <FeatureCard icon={Shield} title="Driver Safety" description="Enhanced safety features including rider verification, emergency assistance, and 24/7 support dedicated to drivers." iconColor="text-rose-500" gradient="from-rose-500/10 to-red-500/10" id="feature-driver-5" />
                <FeatureCard icon={Star} title="Performance Metrics" description="Monitor your ratings, completion rates, and performance metrics to maintain high service standards and earn bonuses." iconColor="text-cyan-500" gradient="from-cyan-500/10 to-teal-500/10" id="feature-driver-6" />
              </div>
            </TabsContent>

            {/* Admin Features */}
            <TabsContent value="admins">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Admin <span className="gradient-text">Control Center</span>
                </h2>
                <p className="text-muted-foreground">
                  Comprehensive tools for platform management and oversight
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <FeatureCard icon={Users} title="User Management" description="Manage riders and drivers with tools for verification, status updates, account administration, and role-based permissions." iconColor="text-cyan-500" gradient="from-cyan-500/10 to-blue-500/10" id="feature-admin-1" />
                <FeatureCard icon={BarChart3} title="Analytics Dashboard" description="Comprehensive analytics with ride volume, revenue trends, user growth, and platform performance metrics in real-time." iconColor="text-violet-500" gradient="from-violet-500/10 to-purple-500/10" id="feature-admin-2" />
                <FeatureCard icon={Car} title="Ride Oversight" description="Monitor all rides in real-time with advanced filtering, search, and detailed ride information for quality control." iconColor="text-emerald-500" gradient="from-emerald-500/10 to-green-500/10" id="feature-admin-3" />
                <FeatureCard icon={AlertTriangle} title="Safety Monitoring" description="Advanced safety monitoring with incident reporting, emergency response coordination, and safety analytics dashboards." iconColor="text-amber-500" gradient="from-amber-500/10 to-orange-500/10" id="feature-admin-4" />
                <FeatureCard icon={Headphones} title="Support Tools" description="Customer support integration with ticket management, user communication tools, and issue resolution tracking." iconColor="text-rose-500" gradient="from-rose-500/10 to-red-500/10" id="feature-admin-5" />
                <FeatureCard icon={Shield} title="Security & Compliance" description="Advanced security features with fraud detection, compliance monitoring, data protection, and audit logging." iconColor="text-cyan-500" gradient="from-cyan-500/10 to-teal-500/10" id="feature-admin-6" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ─── Tech Stack ─── */}
      <section className="py-24 bg-muted/30 dot-pattern" id="tech-stack-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-startup mb-4 inline-flex">
              <Zap className="h-3.5 w-3.5" />
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with <span className="gradient-text">modern tech</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform leverages cutting-edge technologies to deliver
              enterprise-grade performance and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "React + TypeScript", desc: "Type-safe, component-driven frontend with blazing-fast rendering", items: ["Vite build system", "Redux Toolkit", "React Router v7"] },
              { title: "Node.js + Express", desc: "Scalable RESTful API with real-time event processing", items: ["TypeScript backend", "JWT authentication", "Zod validation"] },
              { title: "MongoDB + Redis", desc: "NoSQL database with in-memory caching for sub-ms reads", items: ["Mongoose ODM", "Redis session store", "Data sharding"] },
              { title: "AWS Cloud", desc: "Enterprise infrastructure with auto-scaling and global CDN", items: ["EC2 + Load Balancer", "CI/CD Pipeline", "CloudFront CDN"] },
            ].map((tech, i) => (
              <div key={i} className="premium-card rounded-2xl p-6 bg-card border border-border" id={`tech-card-${i}`}>
                <h3 className="text-base font-semibold mb-2">{tech.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{tech.desc}</p>
                <ul className="space-y-2">
                  {tech.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-24 hero-gradient overflow-hidden" id="features-cta">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Experience all these{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
              features today
            </span>
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Join thousands of users already enjoying RidePanda's comprehensive
            feature set. Sign up in 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="rounded-xl bg-white text-foreground font-semibold hover:bg-white/90 shadow-lg px-8 h-12"
                id="features-cta-rider"
              >
                Start Riding Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white font-medium px-8 h-12 backdrop-blur-sm"
                id="features-cta-driver"
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
