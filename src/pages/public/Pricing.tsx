import { Link } from "react-router";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect ride for your budget. No hidden fees or
            unexpected charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Economy */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                Economy
              </span>
              <h3 className="text-2xl font-bold">Standard</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                <span className="text-xl text-muted-foreground mr-1">$</span>
                0.99
                <span className="text-xl text-muted-foreground font-medium ml-1">
                  /mile
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 flex-1">
              Affordable, everyday rides for up to 4 passengers.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Shared routes available
              </li>
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div> Wait
                time: under 5 mins
              </li>
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Standard vehicles
              </li>
            </ul>
            <Link
              to="/register"
              className="w-full py-3 bg-muted hover:bg-muted/80 text-foreground text-center font-medium rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Premium */}
          <div className="bg-card p-8 rounded-2xl border-2 border-primary shadow-lg flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
              Most Popular
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Premium
              </span>
              <h3 className="text-2xl font-bold">Comfort</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                <span className="text-xl text-muted-foreground mr-1">$</span>
                1.49
                <span className="text-xl text-muted-foreground font-medium ml-1">
                  /mile
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 flex-1">
              Newer cars with extra legroom for up to 4 passengers.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Top-rated drivers
              </li>
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Extra spacious legroom
              </li>
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Temperature control
              </li>
            </ul>
            <Link
              to="/register"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-center font-medium rounded-lg transition-colors"
            >
              Sign Up Now
            </Link>
          </div>

          {/* Luxury */}
          <div className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full mb-4">
                Luxury
              </span>
              <h3 className="text-2xl font-bold">Black</h3>
              <div className="mt-4 flex items-baseline text-4xl font-extrabold">
                <span className="text-xl text-muted-foreground mr-1">$</span>
                2.99
                <span className="text-xl text-muted-foreground font-medium ml-1">
                  /mile
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 flex-1">
              Premium rides in luxury vehicles with professional drivers.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                High-end vehicles
              </li>
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Professional chauffeurs
              </li>
              <li className="flex items-center text-sm gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>{" "}
                Dedicated VIP support
              </li>
            </ul>
            <Link
              to="/register"
              className="w-full py-3 bg-muted hover:bg-muted/80 text-foreground text-center font-medium rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
