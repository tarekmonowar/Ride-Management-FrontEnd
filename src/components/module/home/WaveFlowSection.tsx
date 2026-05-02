import { Check, MapPin, Navigation, Zap, Sparkles } from "lucide-react";

export function WaveFlowSection() {
  const steps = [
    {
      title: "Book Your Ride",
      description:
        "Enter pickup & destination on our map with AI-powered route optimization.",
      icon: MapPin,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Get Matched",
      description:
        "Our smart system finds the perfect driver for you in under 15 seconds.",
      icon: Zap,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Track in Real-Time",
      description:
        "Watch your driver arrive with live GPS tracking and accurate ETAs.",
      icon: Navigation,
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Enjoy Your Journey",
      description:
        "Relax and enjoy a safe, comfortable ride. Rate & review after.",
      icon: Check,
      gradient: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-startup mb-3 inline-flex">
            <Sparkles className="h-3.5 w-3.5" />
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Your journey in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto">
            From booking to destination — seamless and intuitive
          </p>
        </div>

        {/* Steps — Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-cyan-500/20 via-violet-500/20 via-amber-500/20 to-emerald-500/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center group"
            >
              {/* Step number + Icon */}
              <div className="relative inline-flex flex-col items-center mb-4">
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                >
                  <step.icon className="h-7 w-7 text-white" />
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-border flex items-center justify-center text-[10px] font-bold text-foreground shadow-sm">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold mb-1.5">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
