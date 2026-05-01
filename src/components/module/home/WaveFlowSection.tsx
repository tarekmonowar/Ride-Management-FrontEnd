import { Check, MapPin, Navigation, Zap, Sparkles } from "lucide-react";

export function WaveFlowSection() {
  const steps = [
    {
      title: "Book Your Ride",
      description:
        "Enter pickup and destination on our intuitive map interface with AI-powered route optimization.",
      icon: MapPin,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      title: "Get Matched",
      description:
        "Our smart matching system finds the perfect driver for you in under 15 seconds on average.",
      icon: Zap,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-500/10",
    },
    {
      title: "Track in Real-Time",
      description:
        "Watch your driver arrive with live GPS tracking and get accurate ETA updates every step of the way.",
      icon: Navigation,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-500/10 to-orange-500/10",
    },
    {
      title: "Enjoy Your Journey",
      description:
        "Relax and enjoy a safe, comfortable ride to your destination. Rate and provide feedback after.",
      icon: Check,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-500/10 to-green-500/10",
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="badge-startup mb-4 inline-flex">
            <Sparkles className="h-3.5 w-3.5" />
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your journey in{" "}
            <span className="gradient-text">4 simple steps</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From booking to destination, we've made every step seamless and intuitive
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    isEven ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${step.bgGradient} border border-border mb-4`}>
                    <span className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                      {index + 1}
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed max-w-md ${
                      isEven ? "md:ml-auto" : "md:mr-auto"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className="relative w-28 h-28 md:w-32 md:h-32">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-10 blur-xl`}
                    />
                    <div
                      className={`absolute inset-3 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <step.icon className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
