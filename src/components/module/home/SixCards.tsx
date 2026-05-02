import AnimatedDoneButton from "@/utils/AnimatedtButton";
import { Car } from "lucide-react";

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
          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Official Rides</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Take company-approved trips with admin tracking and secure
                  payment by officials.
                </p>
                <AnimatedDoneButton />
              </div>
              <div>
                <img
                  src="panda2.png"
                  alt="ride"
                  className="h-[100px] w-[170px] -mt-6 rounded"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Ride</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Go anywhere with Panda. Request ride, hop in, and go
                </p>
                <AnimatedDoneButton />
              </div>
              <div>
                <img
                  src="/assets/sug1.png"
                  alt="ride"
                  className="h-[130px] w-[200px] -mt-6 rounded"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Intercity</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Get convenient, affordable outstation cabs anytime at your
                  door.
                </p>
                <AnimatedDoneButton />
              </div>
              <div>
                <img
                  src="/assets/sig3.png"
                  alt="ride"
                  className="h-[130px] w-[200px] -mt-6 rounded"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Rentals</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Request a trip for a block of time and make multiple stops.
                </p>
                <AnimatedDoneButton />
              </div>
              <div>
                <img
                  src="/assets/sug2.png"
                  alt="ride"
                  className="h-[130px] w-[200px] -mt-6 rounded"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Moto</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Get affordable rides in minutes at your doorstep.
                </p>
                <AnimatedDoneButton />
              </div>
              <div>
                <img
                  src="/assets/sug4.png"
                  alt="ride"
                  className="h-[130px] w-[200px] -mt-6 rounded"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Live Travel</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Share your live location during trips. Admins monitor your
                  travel safely.
                </p>
                <AnimatedDoneButton />
              </div>
              <div>
                <img
                  src="/assets/sug2.png"
                  alt="ride"
                  className="h-[130px] w-[200px] -mt-6 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
