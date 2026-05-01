import { AppDownloadSection } from "@/components/module/home/AppDownloadSections";
import RequestRide from "@/components/module/home/requestRide";
import SixCards from "@/components/module/home/SixCards";
import CountUp from "@/components/module/home/StatsCard";
import { WaveFlowSection } from "@/components/module/home/WaveFlowSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Navigation,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="relative min-h-[92vh] flex items-center hero-gradient overflow-hidden" id="hero-section">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <div className="badge-startup mb-6 animate-fade-up" id="hero-badge">
                <Sparkles className="h-3.5 w-3.5" />
                Now live in 50+ cities
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up animate-fade-up-delay-1" id="hero-heading">
                The Future of
                <span className="block mt-1">
                  <span className="bg-gradient-to-r from-cyan-400 via-primary to-secondary bg-clip-text text-transparent">Urban Mobility</span>
                </span>
              </h1>

              <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-2 mx-auto lg:mx-0">
                AI-powered ride matching, real-time tracking, and seamless payments.
                Get anywhere safely, quickly, and affordably.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-3">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] px-7 h-12"
                    id="hero-cta-primary"
                  >
                    Start Riding Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/register?role=driver">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white font-medium px-7 h-12 backdrop-blur-sm"
                    id="hero-cta-secondary"
                  >
                    Become a Driver
                  </Button>
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {["T", "A", "J", "S"][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/50">Trusted by 10,000+ riders</p>
                </div>
              </div>
            </div>

            {/* Right - Feature Cards */}
            <div className="relative animate-fade-up animate-fade-up-delay-3">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: MapPin,
                    title: "Smart Booking",
                    desc: "Intuitive map interface with AI-optimized routes",
                    gradient: "from-cyan-500/20 to-blue-600/20",
                    iconColor: "text-cyan-400",
                  },
                  {
                    icon: Zap,
                    title: "Instant Match",
                    desc: "Get paired with the nearest driver in seconds",
                    gradient: "from-violet-500/20 to-purple-600/20",
                    iconColor: "text-violet-400",
                  },
                  {
                    icon: Navigation,
                    title: "Live Tracking",
                    desc: "Real-time GPS tracking with accurate ETAs",
                    gradient: "from-amber-500/20 to-orange-600/20",
                    iconColor: "text-amber-400",
                  },
                  {
                    icon: Shield,
                    title: "Safe & Secure",
                    desc: "Verified drivers, SOS button, trip sharing",
                    gradient: "from-emerald-500/20 to-green-600/20",
                    iconColor: "text-emerald-400",
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className={`glass-card rounded-2xl p-5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 group`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TRUSTED BY / STATS ═══════════════════ */}
      <section className="py-16 bg-background border-b border-border" id="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground">
              Powered by data. Driven by impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 10000, suffix: "+", label: "Happy Riders", icon: Users },
              { end: 1200, suffix: "+", label: "Active Drivers", icon: TrendingUp },
              { end: 50, suffix: "+", label: "Cities Served", icon: MapPin },
              { end: 4.8, decimals: 1, label: "Avg. Rating", icon: Star, suffix: "★" },
            ].map((stat, i) => (
              <div key={i} className="text-center group" id={`stat-${i}`}>
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ REQUEST RIDE ═══════════════════ */}
      <RequestRide />

      {/* ═══════════════════ SERVICE CARDS ═══════════════════ */}
      <SixCards />

      {/* ═══════════════════ HOW IT WORKS (WAVE FLOW) ═══════════════════ */}
      <section className="py-24 bg-muted/50 dot-pattern" id="how-it-works-section">
        <WaveFlowSection />
      </section>

      {/* ═══════════════════ APP DOWNLOAD ═══════════════════ */}
      <AppDownloadSection />

      {/* ═══════════════════ WHY CHOOSE US ═══════════════════ */}
      <section className="py-24 bg-background" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-startup mb-4 inline-flex">
              <Shield className="h-3.5 w-3.5" />
              Why RidePanda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="gradient-text">reliability</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another ride app. We're a platform engineered for safety, speed, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                desc: "End-to-end encryption, verified drivers with background checks, and real-time SOS emergency system.",
                items: ["AES-256 encryption", "Background verification", "24/7 monitoring"],
              },
              {
                icon: Smartphone,
                title: "Seamless Experience",
                desc: "Intuitive design with real-time maps, instant notifications, and multiple payment options.",
                items: ["Google Maps integration", "Push notifications", "Multi-payment support"],
              },
              {
                icon: TrendingUp,
                title: "Scalable Architecture",
                desc: "Built on AWS cloud infrastructure designed to handle millions of concurrent rides globally.",
                items: ["AWS-powered backend", "99.9% uptime SLA", "Global CDN delivery"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="premium-card rounded-2xl p-7 bg-card border border-border group"
                id={`why-card-${i}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map((check, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {check}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA SECTION ═══════════════════ */}
      <section className="relative py-24 overflow-hidden" id="cta-section">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-6 inline-flex !bg-white/10 !border-white/15 !text-white/80">
            <Sparkles className="h-3.5 w-3.5" />
            Join the movement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to transform how{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
              you move
            </span>
            ?
          </h2>
          <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
            Join thousands of riders and drivers who trust RidePanda for their
            daily transportation needs. Sign up in 30 seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="rounded-xl bg-white text-foreground font-semibold hover:bg-white/90 shadow-lg px-8 h-13"
                id="cta-rider-btn"
              >
                Sign Up as Rider
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-white/20 text-white bg-white/5 hover:bg-white/10 hover:text-white font-medium px-8 h-13 backdrop-blur-sm"
                id="cta-driver-btn"
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
