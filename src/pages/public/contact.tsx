import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Hero ─── */}
      <section
        className="relative py-28 hero-gradient overflow-hidden"
        id="contact-hero"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-6 inline-flex !bg-white/10 !border-white/15 !text-white/80">
            <MessageSquare className="h-3.5 w-3.5" />
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            We'd love to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
              hear from you
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Questions, feedback, or partnership inquiries — our team typically
            responds within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── Contact Content ─── */}
      <section className="py-24" id="contact-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-3">Contact Information</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Reach out through any of these channels or fill out the form and
                we'll get back to you promptly.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    detail: "ceo@ridepanda.app",
                    sub: "We reply within 24 hours",
                    color: "text-cyan-500",
                    bg: "from-cyan-500/10 to-blue-500/10",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    detail: "+8801710930665",
                    sub: "Mon–Fri, 9am–6pm EST",
                    color: "text-violet-500",
                    bg: "from-violet-500/10 to-purple-500/10",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    detail: "123 Tech Street",
                    sub: "Dhaka, Bangladesh 1205",
                    color: "text-emerald-500",
                    bg: "from-emerald-500/10 to-green-500/10",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    detail: "Monday – Friday",
                    sub: "9:00 AM – 6:00 PM EST",
                    color: "text-amber-500",
                    bg: "from-amber-500/10 to-orange-500/10",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="premium-card rounded-xl p-4 bg-card border border-border flex items-start gap-4 group"
                    id={`contact-info-${i}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm text-foreground">{item.detail}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="lg:col-span-3 xl:mt-30">
              <div
                className="premium-card rounded-2xl p-5 bg-card border border-border"
                id="contact-form-card"
              >
                <h3 className="text-lg font-semibold mb-1">
                  Send us a message
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Fill out the form below and we'll be in touch shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label
                        htmlFor="contact-name"
                        className="text-sm font-medium"
                      >
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="rounded-lg h-10"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label
                        htmlFor="contact-email"
                        className="text-sm font-medium"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="rounded-lg h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-subject"
                      className="text-sm font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="rounded-lg h-10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 h-10"
                    id="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Quick Links ─── */}
      <section className="py-24 bg-muted/30 dot-pattern" id="contact-faq-links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-startup mb-4 inline-flex">
              <Sparkles className="h-3.5 w-3.5" />
              Quick Help
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Need <span className="gradient-text">quick answers</span>?
            </h2>
            <p className="text-muted-foreground">
              Check our FAQ sections for instant help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rider Support",
                desc: "Questions about booking, payments, or ride safety",
                link: "/faq#rider",
                label: "View Rider FAQ",
                gradient: "from-cyan-500/10 to-blue-500/10",
              },
              {
                title: "Driver Support",
                desc: "Help with earnings, vehicle requirements, or app usage",
                link: "/faq#driver",
                label: "View Driver FAQ",
                gradient: "from-violet-500/10 to-purple-500/10",
              },
              {
                title: "Business Inquiries",
                desc: "Partnerships, API access, and enterprise solutions",
                link: "/faq#business",
                label: "View Business FAQ",
                gradient: "from-amber-500/10 to-orange-500/10",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="premium-card rounded-2xl p-7 bg-card border border-border text-center"
                id={`faq-link-card-${i}`}
              >
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  {item.desc}
                </p>
                <Link to={item.link}>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    {item.label}
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
