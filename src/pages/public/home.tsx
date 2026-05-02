import RequestRide from "@/components/module/home/requestRide";
import SixCards from "@/components/module/home/SixCards";
import CountUp from "@/components/module/home/StatsCard";
import { WaveFlowSection } from "@/components/module/home/WaveFlowSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Globe,
  MapPin,
  Navigation,
  Phone,
  Quote,
  Shield,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const images = [
  "/reviewImages/4.jpeg",
  "/reviewImages/2.jpeg",
  "/reviewImages/3.jpeg",
  "/reviewImages/1.jpeg",
];

/* ── Review Data ── */
const reviews = [
  {
    name: "Rafiqul Islam",
    phone: "01720******89",
    rating: 5,
    comment:
      "RidePanda completely changed my daily commute. The driver matching is incredibly fast and the fare is always transparent. Best ride service I've used!",
    role: "Regular Rider",
    initials: "RI",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Fatema Akter",
    phone: "01815******34",
    rating: 5,
    comment:
      "As a working woman, safety is my top priority. The SOS feature and real-time trip sharing give me complete peace of mind. Highly recommended.",
    role: "Regular Rider",
    initials: "FA",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Mohammad Karim",
    phone: "01672******56",
    rating: 5,
    comment:
      "I've been driving with RidePanda for 8 months. The earnings dashboard is super helpful and I love the flexible schedule. Great platform for drivers!",
    role: "Verified Driver",
    initials: "MK",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    name: "Nusrat Jahan",
    phone: "01912******12",
    rating: 4,
    comment:
      "The intercity ride feature saved me so much hassle during Eid. Booked a car to my hometown with just a few taps. Excellent service and polite drivers.",
    role: "Regular Rider",
    initials: "NJ",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Tanvir Ahmed",
    phone: "01534******78",
    rating: 5,
    comment:
      "Our company uses RidePanda for all official rides. The admin dashboard gives us complete oversight and the billing integration is seamless.",
    role: "Regular Rider",
    initials: "TA",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Sharmin Sultana",
    phone: "01688******45",
    rating: 5,
    comment:
      "I use RidePanda every day for school pickup. The live tracking lets me see exactly where my kids are. It's reliable and the drivers are verified.",
    role: "Regular Rider",
    initials: "SS",
    gradient: "from-teal-500 to-cyan-600",
  },
  {
    name: "Ariful Haque",
    phone: "01776******23",
    rating: 5,
    comment:
      "The corporate billing feature is a game-changer for our logistics team. We manage 50+ daily trips effortlessly through the admin panel.",
    role: "Regular Rider",
    initials: "AH",
    gradient: "from-indigo-500 to-blue-600",
  },
  {
    name: "Rima Begum",
    phone: "01856******67",
    rating: 5,
    comment:
      "I switched from other apps to RidePanda because of the fair pricing. No surge surprises — what you see is what you pay. Love it!",
    role: "Regular Rider",
    initials: "RB",
    gradient: "from-pink-500 to-rose-600",
  },
];

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative min-h-[92vh] flex items-center hero-gradient overflow-hidden"
        id="hero-section"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div
                className="badge-startup mb-6 animate-fade-up"
                id="hero-badge"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Now live in 50+ cities
              </div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up animate-fade-up-delay-1"
                id="hero-heading"
              >
                The Future of
                <span className="block mt-1">
                  <span className="bg-gradient-to-r from-cyan-400 via-primary to-secondary bg-clip-text text-transparent">
                    Urban Mobility
                  </span>
                </span>
              </h1>
              <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed animate-fade-up animate-fade-up-delay-2 mx-auto lg:mx-0">
                AI-powered ride matching, real-time tracking, and seamless
                payments. Get anywhere safely, quickly, and affordably.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-3">
                <Link to="/register">
                  <Button
                    size="lg"
                    className="rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] px-7 h-12"
                    id="hero-cta-primary"
                  >
                    Start Riding Free <ArrowRight className="ml-2 h-4 w-4" />
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
              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-up animate-fade-up-delay-4">
                <div className="flex -space-x-2">
                  {images.map((src, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-background overflow-hidden"
                    >
                      <img
                        src={src}
                        alt={`avatar-${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-white/50">
                    Trusted by 5,000+ riders
                  </p>
                </div>
              </div>
            </div>
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
                    className="glass-card rounded-2xl p-5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className={`h-5 w-5 ${card.iconColor}`} />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {card.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      {/* Stats Section */}
      <section className="py-16 bg-white ">
        <div>
          <img src="/rideimage.jpg" alt="" />
        </div>
        <div className="max-w-7xl mx-auto p-4 mt-5">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={5000} suffix="+" />{" "}
              </div>
              <div className="text-muted-foreground">Happy Riders</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">
                {" "}
                <CountUp end={200} suffix="+" />
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

      {/* ═══════════ REQUEST RIDE ═══════════ */}
      <RequestRide />

      {/* ═══════════ SERVICE CARDS ═══════════ */}
      <SixCards />

      {/* ═══════════ HOW IT WORKS ═══════════ */}

      {/* ═══════════ PRODUCT MISSION — What We Solve ═══════════ */}
      <section className="py-14 bg-background" id="product-mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="badge-startup mb-3 inline-flex">
                <Target className="h-3.5 w-3.5" />
                The Problem We Solve
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Making transportation{" "}
                <span className="gradient-text">accessible</span> for all
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                In rapidly urbanizing cities, millions struggle with unreliable,
                unsafe, and overpriced transportation daily. Riders waste hours,
                drivers earn unfairly, and cities suffer from inefficiency.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">RidePanda</strong> connects
                riders with verified drivers through AI-powered matching —
                ensuring safe, affordable, and reliable transportation. Built on{" "}
                <strong className="text-foreground">
                  AWS cloud infrastructure
                </strong>
                , our system processes thousands of ride requests per minute
                with sub-second matching latency.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: Cloud,
                    label: "AWS-Powered",
                    desc: "EC2, CloudFront",
                  },
                  {
                    icon: Zap,
                    label: "< 15s Matching",
                    desc: "AI-optimized pairing",
                  },
                  {
                    icon: Shield,
                    label: "Verified Drivers",
                    desc: "Background checks",
                  },
                  {
                    icon: Globe,
                    label: "50+ Cities",
                    desc: "Rapidly expanding",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/50 group"
                    id={`mission-metric-${i}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold leading-tight">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-lg h-9 px-4 text-xs"
                    id="mission-learn-more"
                  >
                    Learn More <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button
                    size="sm"
                    className="rounded-lg bg-gradient-to-r from-primary to-cyan-500 text-white h-9 px-4 text-xs"
                    id="mission-see-features"
                  >
                    See All Features
                  </Button>
                </Link>
              </div>
            </div>
            {/* Dashboard Showcase Image */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/8 via-transparent to-secondary/8 rounded-2xl blur-xl" />
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-border">
                <img
                  src="/dashboard-showcase.png"
                  alt="RidePanda Admin Dashboard — real-time ride tracking, analytics, and fleet management"
                  className="w-full h-auto block"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-md flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold leading-tight">
                    99.9% Uptime
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    AWS SLA guaranteed
                  </p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm border border-border rounded-lg px-3 py-2 shadow-md flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold leading-tight">
                    5K+ Rides
                  </p>
                  <p className="text-[9px] text-muted-foreground">
                    Processed monthly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-14 dot-pattern bg-background"
        id="how-it-works-section"
      >
        <WaveFlowSection />
      </section>

      {/* ═══════════ WHY CHOOSE US ═══════════ */}
      <section className="py-24 bg-background" id="why-choose-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-startup mb-4 inline-flex">
              <Shield className="h-3.5 w-3.5" /> Why RidePanda
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for <span className="gradient-text">reliability</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another ride app. We're a platform engineered for
              safety, speed, and scale.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                desc: "End-to-end encryption, verified drivers with background checks, and real-time SOS emergency system.",
                items: [
                  "AES-256 encryption",
                  "Background verification",
                  "24/7 monitoring",
                ],
              },
              {
                icon: Smartphone,
                title: "Seamless Experience",
                desc: "Intuitive design with real-time maps, instant notifications, and multiple payment options.",
                items: [
                  "Google Maps integration",
                  "Push notifications",
                  "Multi-payment support",
                ],
              },
              {
                icon: TrendingUp,
                title: "Scalable Architecture",
                desc: "Built on AWS cloud infrastructure designed to handle millions of concurrent rides globally.",
                items: [
                  "AWS-powered backend",
                  "99.9% uptime SLA",
                  "Global CDN delivery",
                ],
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
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="space-y-2">
                  {item.items.map((check, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
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

      {/* ═══════════ REVIEWS SECTION ═══════════ */}
      <section className="py-24 bg-muted/30 dot-pattern" id="reviews-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-startup mb-4 inline-flex">
              <Star className="h-3.5 w-3.5" />
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What our <span className="gradient-text">users say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real riders and drivers across Bangladesh
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="premium-card rounded-xl p-4 bg-card border border-border group relative"
                id={`review-card-${i}`}
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 h-6 w-6 text-muted-foreground/10" />

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-2.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-3 w-3 ${
                        j < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  "{review.comment}"
                </p>

                {/* Reviewer info */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-border">
                  <div
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 shadow-sm`}
                  >
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold truncate">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {review.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground flex-shrink-0">
                    <Phone className="h-2.5 w-2.5" />
                    <span>{review.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall rating */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-card border border-border shadow-sm">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4.8</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-left">
                <p className="text-sm font-semibold">Excellent</p>
                <p className="text-xs text-muted-foreground">
                  Based on 2,000+ verified reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative py-24 overflow-hidden" id="cta-section">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-6 inline-flex !bg-white/10 !border-white/15 !text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> Join the movement
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
                Sign Up as Rider <ArrowRight className="ml-2 h-4 w-4" />
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
