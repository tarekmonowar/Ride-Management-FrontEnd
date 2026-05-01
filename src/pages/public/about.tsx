import {
  Users,
  Target,
  Heart,
  Award,
  Globe,
  Rocket,
  Shield,
  Lightbulb,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import CountUp from "@/components/module/home/StatsCard";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ─── Hero ─── */}
      <section className="relative py-28 hero-gradient overflow-hidden" id="about-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-6 inline-flex !bg-white/10 !border-white/15 !text-white/80">
            <Sparkles className="h-3.5 w-3.5" />
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Mobility reimagined for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
              everyone
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            We're building the infrastructure for the next generation of urban
            transportation — accessible, reliable, and sustainable.
          </p>
        </div>
      </section>

      {/* ─── Mission & Vision ─── */}
      <section className="py-24" id="mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <span className="badge-startup mb-4 inline-flex">
                <Target className="h-3.5 w-3.5" />
                Our Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Making transportation <span className="gradient-text">accessible</span> for all
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe mobility is a fundamental right. Our platform connects
                riders with reliable drivers through cutting-edge technology,
                creating opportunities for both parties while making cities more
                connected.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Built on AWS cloud infrastructure, our system processes thousands
                of ride requests per minute with sub-second matching latency,
                ensuring you're never left waiting.
              </p>
            </div>

            <div className="premium-card rounded-2xl p-8 bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A world where transportation is seamless, sustainable, and
                accessible to everyone — powered by AI and built at scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Zero emissions by", value: "2030" },
                  { label: "Countries target", value: "25+" },
                  { label: "Rides monthly", value: "1M+" },
                  { label: "Carbon offset", value: "100%" },
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-lg font-bold text-primary">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="py-24 bg-muted/30 dot-pattern" id="values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-startup mb-4 inline-flex">
              <Heart className="h-3.5 w-3.5" />
              Core Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Principles that <span className="gradient-text">guide us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every decision we make is anchored in these foundational beliefs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Rigorous driver verification, real-time monitoring, and emergency SOS system to ensure every ride is safe.",
                color: "from-cyan-500/10 to-blue-500/10",
                iconColor: "text-cyan-500",
              },
              {
                icon: Users,
                title: "Community Driven",
                desc: "We're building more than a service — a community of riders and drivers who support and uplift each other.",
                color: "from-violet-500/10 to-purple-500/10",
                iconColor: "text-violet-500",
              },
              {
                icon: Award,
                title: "Relentless Excellence",
                desc: "From technology to customer support, we continuously raise the bar on every aspect of our platform.",
                color: "from-amber-500/10 to-orange-500/10",
                iconColor: "text-amber-500",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="premium-card rounded-2xl p-7 bg-card border border-border text-center group"
                id={`value-card-${i}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`h-7 w-7 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ─── */}
      <section className="py-24" id="team-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-startup mb-4 inline-flex">
              <Rocket className="h-3.5 w-3.5" />
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="gradient-text">founders</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate builders committed to transforming urban mobility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Tarek Monowar",
                role: "CEO & Co-Founder",
                bio: "Full-stack developer and serial entrepreneur with deep expertise in scalable transportation platforms.",
                gradient: "from-cyan-500 to-blue-600",
              },
              {
                name: "PH Level-2",
                role: "CTO & Co-Founder",
                bio: "Tech veteran with expertise in distributed systems, AI/ML, and building platforms that serve millions.",
                gradient: "from-violet-500 to-purple-600",
              },
              {
                name: "Janker Mahbub",
                role: "Head of Operations",
                bio: "Operations specialist focused on driver onboarding, rider experience, and market expansion strategy.",
                gradient: "from-amber-500 to-orange-600",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="premium-card rounded-2xl p-7 bg-card border border-border text-center group"
                id={`team-member-${i}`}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} mx-auto mb-5 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Impact Stats ─── */}
      <section className="relative py-24 hero-gradient overflow-hidden" id="impact-section">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-60 h-60 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-white/50">Making a measurable difference in transportation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Globe, end: 50, suffix: "+", label: "Cities Served" },
              { icon: Users, end: 15000, suffix: "+", label: "Total Users" },
              { icon: Car, end: 1000000, suffix: "+", label: "Rides Completed" },
              { icon: Award, end: 4.8, decimals: 1, suffix: "★", label: "Average Rating" },
            ].map((stat, i) => (
              <div key={i} id={`impact-stat-${i}`}>
                <stat.icon className="h-8 w-8 text-white/60 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-background" id="about-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join our <span className="gradient-text">mission</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-lg">
            Whether you're looking for reliable transportation or flexible earning
            opportunities, become part of the RidePanda family today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] px-8 h-12"
                id="about-cta-rider"
              >
                Sign Up as Rider
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register?role=driver">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl font-medium px-8 h-12"
                id="about-cta-driver"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
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
