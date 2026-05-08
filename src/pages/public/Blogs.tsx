export default function Blogs() {
  const posts = [
    {
      title: "Introducing RidePanda AI Routes: Smarter Trips, Faster Arrivals",
      category: "Product Update",
      date: "May 1, 2026",
      excerpt:
        "Our new AI routing engine analyzes traffic patterns in real-time, reducing average trip times by up to 15%.",
      image: "bg-blue-500/20",
    },
    {
      title: "Expanding to 10 New European Cities This Summer",
      category: "Company News",
      date: "April 24, 2026",
      excerpt:
        "From Paris to Prague, RidePanda is making urban transportation more accessible across Europe. See where we're launching next.",
      image: "bg-purple-500/20",
    },
    {
      title: "How We Scaled Our Node.js Backend to Handle 1M Requests/Sec",
      category: "Engineering",
      date: "April 12, 2026",
      excerpt:
        "A deep dive into our architecture evolution, transitioning to microservices, and how we optimized our real-time tracking sockets.",
      image: "bg-emerald-500/20",
    },
    {
      title: "Sustainability Report: 10,000 Tons of CO2 Offset",
      category: "Impact",
      date: "March 30, 2026",
      excerpt:
        "Our commitment to the environment continues. Read about our progress towards a completely carbon-neutral fleet by 2030.",
      image: "bg-amber-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              RidePanda <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Latest news, engineering insights, and stories from the RidePanda
              team.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search articles..."
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Featured Post */}
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden mb-12 flex flex-col lg:flex-row group cursor-pointer hover:border-primary/50 transition-colors">
          <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-primary/10 relative overflow-hidden flex items-center justify-center p-10 text-primary">
            <span className="text-6xl text-primary/20 absolute -right-4 -bottom-4 font-black tracking-tighter">
              AI
            </span>
            <div className="w-full h-full rounded-xl border-2 border-primary/20 border-dashed relative z-10 flex items-center justify-center backdrop-blur-sm bg-background/30">
              <span className="font-bold tracking-widest uppercase">
                Featured Article
              </span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <span className="text-primary text-sm font-bold uppercase tracking-wider mb-4">
              Engineering & AI
            </span>
            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
              The Matrix of Mobility: Reinforcement Learning in Ride Dispatch
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              How we train ML models to predict supply and demand imbalances
              before they happen, dynamically positioning drivers to where they
              are needed most.
            </p>
            <div className="flex items-center gap-4 text-sm mt-auto">
              <div className="w-10 h-10 rounded-full bg-muted"></div>
              <div>
                <p className="font-medium text-foreground">Dr. Sarah Chen</p>
                <p className="text-muted-foreground">
                  Head of Machine Learning • May 2, 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden group cursor-pointer hover:border-primary/30 hover:shadow-md transition-all hover:-translate-y-1 flex flex-col"
            >
              <div
                className={`h-48 ${post.image} flex items-center justify-center p-4`}
              >
                <div className="w-full h-full bg-background/20 backdrop-blur-sm rounded-lg border border-background/10"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3 text-sm">
                  <span className="text-primary font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-border flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  Read Article <span className="text-lg leading-none">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg transition-colors inline-block">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
