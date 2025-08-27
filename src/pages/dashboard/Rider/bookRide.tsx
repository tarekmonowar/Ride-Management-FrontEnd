import RequestRide from "@/components/module/home/requestRide";

export default function BookRide() {
  return (
    <div>
      <RequestRide />
      <div className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Powerful Features
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover all the features that make RideManager the best choice for
            riders, drivers, and administrators.
          </p>
        </div>
      </div>
    </div>
  );
}
