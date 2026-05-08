import wave from "@/assets/images/wave-2.svg";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            How <span className="gradient-text">RidePanda</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get from point A to point B safely and seamlessly in just a few
            taps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 hidden md:block z-0"></div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center relative z-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6 shadow-lg">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Request a Ride</h3>
            <p className="text-muted-foreground">
              Open the app, enter your destination, and choose your preferred
              ride type. See upfront pricing to know exactly what you'll pay.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center relative z-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6 shadow-lg">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Meet Your Driver</h3>
            <p className="text-muted-foreground">
              Track your driver in real-time on the map. You'll see their
              picture, reviews, and vehicle details before they arrive.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col items-center text-center relative z-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold mb-6 shadow-lg">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Arrive & Pay</h3>
            <p className="text-muted-foreground">
              Sit back and relax. Payment happens automatically in the app when
              the trip ends. Rate your driver to help keep the community safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
