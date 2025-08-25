import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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

    // Simulate form submission
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
      {/* Hero Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Get in touch
            with our team and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a rider with questions, a driver needing support,
                or a business interested in our services, we're here to help.
              </p>

              <div className="space-y-2">
                <Card className="card-dashboard">
                  <CardContent className="p-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          support@ridemanager.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardContent className="p-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-dashboard">
                  <CardContent className="p-2">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Address</h3>
                        <p className="text-muted-foreground">
                          123 Tech Street
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="mt-40">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-hero"
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Need Quick Answers?</h2>
            <p className="text-xl text-muted-foreground">
              Check out our frequently asked questions for instant help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-4">Rider Support</h3>
                <p className="text-muted-foreground mb-6">
                  Questions about booking, payments, or ride safety
                </p>
                <Link to="/faq#rider">
                  <Button variant="outline">View Rider FAQ</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-4">Driver Support</h3>
                <p className="text-muted-foreground mb-6">
                  Help with earnings, vehicle requirements, or app usage
                </p>
                <Link to="/faq#driver">
                  <Button variant="outline">View Driver FAQ</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="card-dashboard text-center">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-4">
                  Business Inquiries
                </h3>
                <p className="text-muted-foreground mb-6">
                  Information about partnerships and business solutions
                </p>
                <Link to="/faq#business">
                  <Button variant="outline">View Business FAQ</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
