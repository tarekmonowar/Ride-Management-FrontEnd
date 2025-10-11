export default function SixCards() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-10 pb-20">
        <h3 className="text-primary text-4xl font-semibold mb-10">
          Suggestions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {/* card 1 */}
          <div className="bg-white rounded border border-gray-300 p-3 shadow-sm">
            <p className="font-semibold text-lg">Official Rides</p>
            <div className="flex flex-row ">
              <div>
                <p className="text-sm my-2 mb-5">
                  Take company-approved trips with admin tracking and secure
                  payment by officials.
                </p>
                <button className="rounded text-sm text-black bg-gray-200 px-4 py-2 font-semibold transition-all duration-300 cursor-pointer hover:bg-white">
                  Details
                </button>
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
                <button className="rounded text-sm text-black bg-gray-200 px-4 py-2 font-semibold transition-all duration-300 cursor-pointer hover:bg-white">
                  Details
                </button>
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
                <button className="rounded text-sm text-black bg-gray-200 px-4 py-2 font-semibold transition-all duration-300 cursor-pointer hover:bg-white">
                  Details
                </button>
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
                <button className="rounded text-sm text-black bg-gray-200 px-4 py-2 font-semibold transition-all duration-300 cursor-pointer hover:bg-white">
                  Details
                </button>
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
                <button className="rounded text-sm text-black bg-gray-200 px-4 py-2 font-semibold transition-all duration-300 cursor-pointer hover:bg-white">
                  Details
                </button>
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
                <button className="rounded text-sm text-black bg-gray-200 px-4 py-2 font-semibold transition-all duration-300 cursor-pointer hover:bg-white">
                  Details
                </button>
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
