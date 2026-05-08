export default function ApiDocs() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            v2.0 Beta
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Developer <span className="gradient-text">API Docs</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Integrate the RidePanda network into your own applications with our
            powerful REST API.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-8">
          <div className="border-b border-border bg-muted/50 px-6 py-4 flex gap-4 overflow-x-auto">
            <button className="text-primary font-medium whitespace-nowrap border-b-2 border-primary px-1">
              Introduction
            </button>
            <button className="text-muted-foreground font-medium hover:text-foreground whitespace-nowrap px-1">
              Authentication
            </button>
            <button className="text-muted-foreground font-medium hover:text-foreground whitespace-nowrap px-1">
              Endpoints
            </button>
            <button className="text-muted-foreground font-medium hover:text-foreground whitespace-nowrap px-1">
              Webhooks
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Getting Started
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The RidePanda API is organized around REST. Our API has
                predictable resource-oriented URLs, accepts form-encoded request
                bodies, returns JSON-encoded responses, and uses standard HTTP
                response codes, authentication, and verbs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Base URL
              </h2>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm border border-border">
                https://api.ridepanda.app/v2
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Authentication
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Authenticate your API requests using Bearer tokens in the
                Authorization header. You can generate API keys from your
                developer portal dashboard.
              </p>
              <div className="bg-[#1E1E1E] text-gray-300 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>
                  <code>
                    <span className="text-purple-400">curl</span>{" "}
                    <span className="text-green-400">-X</span> GET
                    https://api.ridepanda.app/v2/rides \
                    <span className="text-green-400">-H</span>{" "}
                    <span className="text-yellow-300">
                      "Authorization: Bearer rp_prop_xxxxxxxxxxxxxx"
                    </span>
                  </code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Quick Endpoints
              </h2>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-500/10 text-blue-500 font-mono text-xs px-2 py-1 rounded font-bold uppercase w-16 text-center">
                      GET
                    </span>
                    <span className="font-mono text-sm font-medium">
                      /v2/rides/estimate
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground hidden md:block">
                    Get price and time estimate
                  </span>
                </div>
                <div className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-green-500/10 text-green-500 font-mono text-xs px-2 py-1 rounded font-bold uppercase w-16 text-center">
                      POST
                    </span>
                    <span className="font-mono text-sm font-medium">
                      /v2/rides
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground hidden md:block">
                    Request a new ride
                  </span>
                </div>
                <div className="border border-border rounded-lg p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-500/10 text-blue-500 font-mono text-xs px-2 py-1 rounded font-bold uppercase w-16 text-center">
                      GET
                    </span>
                    <span className="font-mono text-sm font-medium">
                      /v2/rides/:id
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground hidden md:block">
                    Get ride details & location
                  </span>
                </div>
              </div>
            </section>

            <div className="pt-6 mt-6 border-t border-border flex justify-between items-center">
              <button className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors">
                Generate API Key
              </button>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                View Full Documentation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
