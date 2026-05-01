import { MapPin, Navigation, Users, Zap, Smartphone } from "lucide-react";

export function AppDownloadSection() {
  return (
    <section className="relative py-24 hero-gradient overflow-hidden" id="app-download-section">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text & Downloads */}
          <div className="space-y-8">
            <div>
              <span className="badge-startup mb-4 inline-flex !bg-white/10 !border-white/15 !text-white/80">
                <Smartphone className="h-3.5 w-3.5" />
                Mobile App
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Your rides,{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
                  in your pocket
                </span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                Book, track, reschedule, or cancel rides from anywhere.
                Available on iOS and Android.
              </p>
            </div>

            {/* QR + Store buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* QR Code */}
              <div className="bg-white p-3 rounded-2xl shadow-lg">
                <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="100" fill="white" />
                    <g fill="black">
                      <rect x="5" y="5" width="25" height="25" />
                      <rect x="10" y="10" width="15" height="15" fill="white" />
                      <rect x="13" y="13" width="9" height="9" />
                      <rect x="70" y="5" width="25" height="25" />
                      <rect x="75" y="10" width="15" height="15" fill="white" />
                      <rect x="78" y="13" width="9" height="9" />
                      <rect x="5" y="70" width="25" height="25" />
                      <rect x="10" y="75" width="15" height="15" fill="white" />
                      <rect x="13" y="78" width="9" height="9" />
                      <rect x="70" y="70" width="25" height="25" />
                      <rect x="75" y="75" width="15" height="15" fill="white" />
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
                      <rect x="38" y="44" width="5" height="5" />
                      <rect x="55" y="44" width="5" height="5" />
                      <rect x="73" y="44" width="5" height="5" />
                      <rect x="21" y="54" width="5" height="5" />
                      <rect x="38" y="54" width="5" height="5" />
                      <rect x="55" y="54" width="5" height="5" />
                      <rect x="73" y="54" width="5" height="5" />
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
                <p className="text-center text-[10px] text-gray-500 mt-2 font-medium">
                  Scan to download
                </p>
              </div>

              {/* Store buttons */}
              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-all duration-300 px-5 py-3 rounded-xl border border-white/10 group"
                  id="app-store-btn"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/60">Download on the</div>
                    <div className="text-sm font-semibold text-white leading-tight group-hover:text-white">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm transition-all duration-300 px-5 py-3 rounded-xl border border-white/10 group"
                  id="play-store-btn"
                >
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-white/60">GET IT ON</div>
                    <div className="text-sm font-semibold text-white leading-tight group-hover:text-white">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[550px]">
            {/* Phone 1 */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[250px] z-10 animate-float">
              <div className="relative bg-gray-900 rounded-[2rem] p-2.5 shadow-2xl border-2 border-gray-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-20" />
                <div className="relative bg-gradient-to-br from-cyan-600 via-teal-600 to-teal-700 rounded-[1.5rem] aspect-[9/19] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 px-5 pt-3 flex justify-between text-white text-[10px] z-10">
                    <span className="font-semibold">15:43</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-2.5 border border-white rounded-sm" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/80 text-center p-5">
                      <MapPin className="h-12 w-12 mx-auto mb-3 animate-float" style={{ animationDelay: "1s" }} />
                      <div className="text-xs font-medium mb-3">Live Tracking</div>
                      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3">
                        <div className="text-[10px] opacity-70">Your driver is arriving</div>
                        <div className="text-xs font-semibold mt-1">ETA: 3 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] max-w-[280px] z-20 animate-float" style={{ animationDelay: "2s" }}>
              <div className="relative bg-gray-900 rounded-[2rem] p-2.5 shadow-2xl border-2 border-gray-700">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-2xl z-20" />
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[1.5rem] aspect-[9/19] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 px-5 pt-3 flex justify-between text-white text-[10px] z-10">
                    <span className="font-semibold">16:42</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-2.5 border border-white rounded-sm" />
                    </div>
                  </div>
                  <div className="absolute inset-0 p-5 pt-10">
                    <div className="text-white">
                      <h3 className="text-base font-bold mb-0.5">Good afternoon,</h3>
                      <p className="text-lg font-bold text-yellow-400 mb-5">Tarek Monowar</p>

                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mb-4">
                        <div className="flex items-center gap-2 text-xs text-white/70">
                          <Navigation className="h-3.5 w-3.5" />
                          <span>Where shall we drive you?</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {[
                          { icon: MapPin, label: "Airport" },
                          { icon: Zap, label: "By-hour" },
                          { icon: Users, label: "City" },
                          { icon: Navigation, label: "Intercity" },
                        ].map((item, i) => (
                          <div key={i} className="text-center">
                            <div className="bg-white/10 rounded-lg p-2 mb-1">
                              <item.icon className="h-4 w-4 mx-auto" />
                            </div>
                            <div className="text-[8px] text-white/60">{item.label}</div>
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-xs font-semibold">Upcoming rides</h4>
                          <span className="text-[10px] text-cyan-400">See all</span>
                        </div>
                        <div className="bg-gradient-to-r from-teal-600/15 to-cyan-600/15 backdrop-blur-sm rounded-xl p-3 border border-teal-500/20">
                          <div className="flex items-start gap-2">
                            <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">🚗</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[10px] font-semibold">Economy</span>
                                <span className="text-[8px] bg-emerald-500/25 text-emerald-300 px-1.5 py-0.5 rounded-full">
                                  Confirmed
                                </span>
                              </div>
                              <div className="text-[8px] text-white/50">
                                <div>23 Sep 2025 • 09:40</div>
                                <div className="flex items-center gap-1 mt-0.5">
                                  <MapPin className="h-2.5 w-2.5" />
                                  <span>JFK Airport</span>
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
