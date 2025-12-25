import { Check, MapPin, Navigation, Zap } from "lucide-react";

export function WaveFlowSection() {
  const steps = [
    {
      title: "Book Your Ride",
      description:
        "Enter pickup and destination on our intuitive map interface",
      icon: MapPin,
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Get Matched",
      description:
        "Our smart system finds the perfect driver for you instantly",
      icon: Zap,
      color: "from-teal-500 to-emerald-600",
    },
    {
      title: "Track in Real-Time",
      description: "Watch your driver arrive with live GPS tracking",
      icon: Navigation,
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Enjoy Your Journey",
      description:
        "Relax and enjoy a safe, comfortable ride to your destination",
      icon: Check,
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-balance">
            Your Journey in{" "}
            <span className="bg-gradient-to-r from-primary via-teal-500 to-yellow-500 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From booking to destination, we've made every step seamless
          </p>
        </div>

        {/* Wave flow */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-5 mb-5 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    isEven ? "md:text-right" : "md:text-left"
                  } animate-slide-in-${isEven ? "left" : "right"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="inline-block mb-2">
                    <div
                      className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-lg`}
                    >
                      <span className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      Step {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
                    {step.title}
                  </h3>
                  <p
                    className={`text-lg text-muted-foreground leading-relaxed text-pretty max-w-md
    ${isEven ? "md:ml-auto md:text-right" : "md:mr-auto md:text-left"}
  `}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Icon with morphing shape */}
                <div className="relative">
                  <div className={`relative w-40 h-40 animate-morph`}>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-[40%] blur-2xl opacity-40 animate-pulse`}
                    />
                    <div
                      className={`absolute inset-4 bg-gradient-to-br ${step.color} rounded-[35%] flex items-center justify-center shadow-2xl animate-morph-shape`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <step.icon className="h-16 w-16 text-white animate-float" />
                    </div>
                  </div>
                </div>

                {/* Connecting line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-muted to-transparent"
                    style={{ top: `${(index + 1) * 300}px` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
