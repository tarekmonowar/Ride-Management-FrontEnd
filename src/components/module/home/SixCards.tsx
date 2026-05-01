import { ArrowRight, Building2, Car, Globe, MapPin, Bike, Radio } from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: Building2,
    title: "Official Rides",
    desc: "Company-approved trips with admin tracking and secure corporate payment integration.",
    gradient: "from-cyan-500/10 to-blue-500/10",
    iconColor: "text-cyan-500",
  },
  {
    icon: Car,
    title: "City Rides",
    desc: "Go anywhere with RidePanda. Request a ride, hop in, and arrive in comfort.",
    gradient: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
  },
  {
    icon: Globe,
    title: "Intercity",
    desc: "Convenient, affordable outstation cabs booked anytime, right at your doorstep.",
    gradient: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: MapPin,
    title: "Rentals",
    desc: "Request a trip for a block of time and make multiple stops along the way.",
    gradient: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Bike,
    title: "Moto",
    desc: "Affordable two-wheeler rides in minutes — perfect for quick city commutes.",
    gradient: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: Radio,
    title: "Live Travel",
    desc: "Share your live location during trips. Admins monitor your travel for safety.",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-500",
  },
];

export default function SixCards() {
  return (
    <section className="py-24 bg-background" id="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="badge-startup mb-4 inline-flex">
            <Car className="h-3.5 w-3.5" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A ride for <span className="gradient-text">every need</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From daily commutes to long-distance travel, we've got you covered
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <Link
              to="/rider-dashboard/book"
              key={i}
              className="premium-card rounded-2xl p-6 bg-card border border-border group cursor-pointer"
              id={`service-card-${i}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-base font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
