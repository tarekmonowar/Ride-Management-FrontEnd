export default function Career() {
  const jobs = [
    {
      title: "Senior React Developer",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-time",
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "New York, USA",
      type: "Full-time",
    },
    {
      title: "Product Manager, Growth",
      department: "Product",
      location: "San Francisco, USA",
      type: "Full-time",
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Remote (Europe)",
      type: "Full-time",
    },
    {
      title: "Cities Operations Manager",
      department: "Operations",
      location: "London, UK",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Join the <span className="gradient-text">RidePanda</span> Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're building the future of urban mobility. Help us make cities
            more accessible, connected, and sustainable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why RidePanda?</h2>
            <p className="text-muted-foreground leading-relaxed">
              At RidePanda, we operate at the intersection of bits and atoms.
              Our software moves actual vehicles in the real world, affecting
              millions of people daily. It's a massive technical challenge
              matched only by its impact.
            </p>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <p>
                  <span className="font-semibold text-foreground">
                    Ownership from day one:
                  </span>{" "}
                  You build it, you own it, you ship it.
                </p>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <p>
                  <span className="font-semibold text-foreground">
                    Remote-first flexibility:
                  </span>{" "}
                  Work from anywhere, with occasional vibrant off-sites.
                </p>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                <p>
                  <span className="font-semibold text-foreground">
                    Competitive equity:
                  </span>{" "}
                  We're a fast-growing startup and we want our team to share in
                  the upside.
                </p>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-2xl h-40 border border-border"></div>
            <div className="bg-primary/10 rounded-2xl h-40 border border-primary/20 translate-y-6"></div>
            <div className="col-span-2 bg-card rounded-2xl h-48 border border-border flex items-center justify-center text-muted-foreground italic font-medium p-6 text-center">
              "The most impactful work I've done in my career."
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
          <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="divide-y divide-border">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="p-6 hover:bg-muted/30 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <button className="self-start md:self-auto px-4 py-2 border border-border hover:border-primary text-foreground hover:text-primary font-medium rounded-lg transition-colors text-sm">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-muted-foreground text-sm">
            Don't see a perfect fit? Send your resume to{" "}
            <a
              href="mailto:careers@ridepanda.app"
              className="text-primary hover:underline"
            >
              careers@ridepanda.app
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
