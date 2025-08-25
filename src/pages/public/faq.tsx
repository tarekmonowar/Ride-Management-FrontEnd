import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const faqData = {
    riders: [
      {
        id: "r1",
        question: "How do I book a ride?",
        answer:
          "Simply open the RideManager app, enter your pickup location and destination, choose your preferred ride type, and confirm your booking. You'll be matched with a nearby driver within minutes.",
      },
      {
        id: "r2",
        question: "What payment methods are accepted?",
        answer:
          "We accept cash, credit/debit cards, and digital wallets. You can add and manage your payment methods in the app settings.",
      },
      {
        id: "r3",
        question: "How is the fare calculated?",
        answer:
          "Fares are calculated based on distance, time, demand, and local market rates. You'll see an estimated fare before booking, and the final amount will be charged after your ride.",
      },
      {
        id: "r4",
        question: "Can I cancel my ride?",
        answer:
          "Yes, you can cancel your ride through the app. However, cancellation fees may apply if you cancel after the driver has accepted and is en route to your location.",
      },
      {
        id: "r5",
        question: "What safety features are available?",
        answer:
          "We offer real-time trip sharing, driver verification, in-app emergency button, 24/7 support, and insurance coverage for all rides.",
      },
      {
        id: "r6",
        question: "How do I rate my driver?",
        answer:
          "After each ride, you'll be prompted to rate your driver on a 5-star scale and can leave optional feedback to help improve service quality.",
      },
    ],
    drivers: [
      {
        id: "d1",
        question: "How do I become a driver?",
        answer:
          "Sign up through our app or website, submit required documents (license, insurance, vehicle registration), pass our background check, and complete the onboarding process.",
      },
      {
        id: "d2",
        question: "What are the vehicle requirements?",
        answer:
          "Your vehicle must be 2010 or newer, pass our vehicle inspection, have valid registration and insurance, and seat at least 4 passengers including the driver.",
      },
      {
        id: "d3",
        question: "How do I get paid?",
        answer:
          "Earnings are automatically deposited to your bank account weekly. You can also cash out instantly for a small fee using our instant pay feature.",
      },
      {
        id: "d4",
        question: "Can I choose my working hours?",
        answer:
          "Absolutely! You have complete flexibility to work whenever you want. Simply go online in the app when you're ready to accept ride requests.",
      },
      {
        id: "d5",
        question: "What happens if there's an accident?",
        answer:
          "All rides are covered by our comprehensive insurance policy. Contact our 24/7 support immediately if an incident occurs during a ride.",
      },
      {
        id: "d6",
        question: "How do I handle difficult passengers?",
        answer:
          "Use your best judgment for safety. You can end a ride early if necessary and report any issues through the app. Our support team is available 24/7 to assist.",
      },
    ],
    business: [
      {
        id: "b1",
        question: "Do you offer business accounts?",
        answer:
          "Yes, we offer RideManager for Business with features like centralized billing, ride management, expense reporting, and dedicated support for companies.",
      },
      {
        id: "b2",
        question: "What are your API capabilities?",
        answer:
          "Our API allows businesses to integrate ride booking directly into their applications, manage rides programmatically, and access real-time data and analytics.",
      },
      {
        id: "b3",
        question: "How does bulk pricing work?",
        answer:
          "We offer competitive rates for businesses with high ride volumes. Contact our business development team for custom pricing based on your needs.",
      },
      {
        id: "b4",
        question: "Can we get branded rides?",
        answer:
          "Yes, we offer co-branding opportunities for enterprise clients, including custom app interfaces and branded vehicle options.",
      },
      {
        id: "b5",
        question: "What reporting features are available?",
        answer:
          "Business accounts include detailed reporting on ride usage, expenses, carbon footprint, and employee travel patterns with exportable data.",
      },
    ],
  };

  const filterFAQs = (faqs: typeof faqData.riders) => {
    if (!searchTerm) return faqs;
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  const FAQItem = ({ faq }: { faq: (typeof faqData.riders)[0] }) => {
    const isExpanded = expandedItems.includes(faq.id);

    return (
      <Card className="card-dashboard">
        <CardContent className="p-0">
          <button
            onClick={() => toggleExpanded(faq.id)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <h3 className="font-semibold">{faq.question}</h3>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </button>
          {isExpanded && (
            <div className="px-6 pb-6">
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%),_hsl(39_100%_60%))]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Find answers to common questions about using RideManager as a rider,
            driver, or business partner.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="riders" id="rider">
                For Riders
              </TabsTrigger>
              <TabsTrigger value="drivers" id="driver">
                For Drivers
              </TabsTrigger>
              <TabsTrigger value="business" id="business">
                For Business
              </TabsTrigger>
            </TabsList>

            <TabsContent value="riders">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Rider FAQ
                </h2>
                <div className="space-y-4">
                  {filterFAQs(faqData.riders).map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="drivers">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Driver FAQ
                </h2>
                <div className="space-y-4">
                  {filterFAQs(faqData.drivers).map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">
                  Business FAQ
                </h2>
                <div className="space-y-4">
                  {filterFAQs(faqData.business).map((faq) => (
                    <FAQItem key={faq.id} faq={faq} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here
            to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-hero">
                Contact Support
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
