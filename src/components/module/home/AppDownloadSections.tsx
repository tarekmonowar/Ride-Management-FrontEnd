import { MapPin, Navigation, Users, Zap } from "lucide-react";

export function AppDownloadSection() {
  return (
    <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] ">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 md:p-12">
            {/* Left Column - Text, QR Code, and App Store Buttons */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white text-balance">
                  Take it easy!
                </h2>
                <p className="text-lg md:text-xl text-gray-300 text-pretty leading-relaxed">
                  Book, track, change date and time, or cancel rides.
                </p>
              </div>

              {/* QR Code and App Store Buttons Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                {/* QR Code */}
                <div className="bg-white p-4 rounded-2xl shadow-lg">
                  <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="100" height="100" fill="white" />
                      <g fill="black">
                        <rect x="5" y="5" width="25" height="25" />
                        <rect
                          x="10"
                          y="10"
                          width="15"
                          height="15"
                          fill="white"
                        />
                        <rect x="13" y="13" width="9" height="9" />

                        <rect x="70" y="5" width="25" height="25" />
                        <rect
                          x="75"
                          y="10"
                          width="15"
                          height="15"
                          fill="white"
                        />
                        <rect x="78" y="13" width="9" height="9" />

                        <rect x="5" y="70" width="25" height="25" />
                        <rect
                          x="10"
                          y="75"
                          width="15"
                          height="15"
                          fill="white"
                        />
                        <rect x="13" y="78" width="9" height="9" />

                        {/* Bottom-right corner */}
                        <rect x="70" y="70" width="25" height="25" />
                        <rect
                          x="75"
                          y="75"
                          width="15"
                          height="15"
                          fill="white"
                        />
                        <rect x="78" y="78" width="9" height="9" />

                        <rect x="35" y="10" width="5" height="5" />
                        <rect x="45" y="10" width="5" height="5" />
                        <rect x="55" y="10" width="5" height="5" />
                        <rect x="40" y="20" width="5" height="5" />
                        <rect x="50" y="20" width="5" height="5" />
                        <rect x="60" y="20" width="5" height="5" />
                        <rect x="21" y="34" width="5" height="5" />
                        <rect x="30" y="34" width="5" height="5" />
                        <rect x="38" y="34" width="5" height="5" />
                        <rect x="47" y="34" width="5" height="5" />
                        <rect x="55" y="34" width="5" height="5" />
                        <rect x="64" y="34" width="5" height="5" />
                        <rect x="73" y="34" width="5" height="5" />
                        <rect x="21" y="44" width="5" height="5" />
                        <rect x="30" y="44" width="5" height="5" />
                        <rect x="38" y="44" width="5" height="5" />
                        <rect x="47" y="44" width="5" height="5" />
                        <rect x="55" y="44" width="5" height="5" />
                        <rect x="64" y="44" width="5" height="5" />
                        <rect x="73" y="44" width="5" height="5" />
                        <rect x="21" y="54" width="5" height="5" />
                        <rect x="30" y="54" width="5" height="5" />
                        <rect x="38" y="54" width="5" height="5" />
                        <rect x="47" y="54" width="5" height="5" />
                        <rect x="55" y="54" width="5" height="5" />
                        <rect x="64" y="54" width="5" height="5" />
                        <rect x="73" y="54" width="5" height="5" />
                        <rect x="21" y="64" width="5" height="5" />
                        <rect x="30" y="64" width="5" height="5" />
                        <rect x="38" y="64" width="5" height="5" />
                        <rect x="47" y="64" width="5" height="5" />
                        <rect x="55" y="64" width="5" height="5" />
                        <rect x="64" y="64" width="5" height="5" />
                        <rect x="73" y="64" width="5" height="5" />
                        <rect x="35" y="75" width="5" height="5" />
                        <rect x="45" y="75" width="5" height="5" />
                        <rect x="62" y="75" width="5" height="5" />
                        <rect x="53" y="75" width="5" height="5" />
                        <rect x="40" y="85" width="5" height="5" />
                        <rect x="60" y="85" width="5" height="5" />
                        <rect x="50" y="85" width="5" height="5" />
                      </g>
                    </svg>
                  </div>
                  <p className="text-center text-xs text-gray-600 mt-3 font-medium">
                    Download RidePanda App
                  </p>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl border border-gray-700"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">
                        Download on the
                      </div>
                      <div className="text-lg font-semibold text-white leading-tight">
                        App Store
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 transition-colors px-6 py-3 rounded-xl border border-gray-700"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-400">GET IT ON</div>
                      <div className="text-lg font-semibold text-white leading-tight">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Phone Mockups */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] animate-fade-in-up animation-delay-200">
              {/* Phone 1 - Left phone with map */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[280px] z-10 animate-float">
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20" />

                  {/* Screen content */}
                  <div className="relative bg-gradient-to-br from-cyan-500 via-teal-600 to-teal-700 rounded-[2rem] aspect-[9/19] overflow-hidden">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 px-6 pt-3 flex justify-between text-white text-xs z-10">
                      <span className="font-semibold">15:43</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-3 border border-white rounded-sm" />
                      </div>
                    </div>

                    {/* Map interface */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/80 text-center p-6">
                        <MapPin className="h-16 w-16 mx-auto mb-4 animate-bounce-slow" />
                        <div className="text-sm font-medium">New York</div>
                        <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                          <div className="text-xs opacity-80">
                            New York JFK Airport
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Right phone with ride details */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[320px] z-20 animate-float animation-delay-500">
                <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                  {/* Phone notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-20" />

                  {/* Screen content */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2rem] aspect-[9/19] overflow-hidden">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 px-6 pt-3 flex justify-between text-white text-xs z-10">
                      <span className="font-semibold">16:42</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-3 border border-white rounded-sm" />
                      </div>
                    </div>

                    {/* App interface */}
                    <div className="absolute inset-0 p-6 pt-12">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">
                          Good afternoon,
                        </h3>
                        <p className="text-2xl font-bold text-yellow-400 mb-6">
                          Tarek Monowar
                        </p>

                        {/* Search bar */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
                          <div className="flex items-center gap-2 text-sm text-white/80">
                            <Navigation className="h-4 w-4" />
                            <span>Where shall we drive you?</span>
                          </div>
                        </div>

                        {/* Services grid */}
                        <div className="grid grid-cols-4 gap-3 mb-6">
                          <div className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-1">
                              <MapPin className="h-5 w-5 mx-auto" />
                            </div>
                            <div className="text-[10px]">Airport</div>
                          </div>
                          <div className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-1">
                              <Zap className="h-5 w-5 mx-auto" />
                            </div>
                            <div className="text-[10px]">By-hour</div>
                          </div>
                          <div className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-1">
                              <Users className="h-5 w-5 mx-auto" />
                            </div>
                            <div className="text-[10px]">City</div>
                          </div>
                          <div className="text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-1">
                              <Navigation className="h-5 w-5 mx-auto" />
                            </div>
                            <div className="text-[10px]">City-City</div>
                          </div>
                        </div>

                        {/* Upcoming rides */}
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-sm font-semibold">
                              Your upcoming rides
                            </h4>
                            <span className="text-xs text-cyan-400">
                              See all
                            </span>
                          </div>

                          {/* Ride card */}
                          <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-4 border border-teal-500/30">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <div className="text-2xl">🚗</div>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="text-xs font-semibold">
                                    Economy
                                  </span>
                                  <span className="text-[10px] bg-emerald-500/30 text-emerald-300 px-2 py-0.5 rounded-full">
                                    Confirmed
                                  </span>
                                </div>
                                <div className="text-[10px] text-white/60 mb-2">
                                  <div>23 September 2025 • 09:40</div>
                                  <div className="flex items-center gap-1 mt-1">
                                    <MapPin className="h-3 w-3" />
                                    <span>New York JFK Airport (JFK)</span>
                                  </div>
                                  <div className="text-yellow-400">
                                    To be clarified with your driver
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
