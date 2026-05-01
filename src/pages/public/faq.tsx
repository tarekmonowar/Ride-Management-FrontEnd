import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, ChevronUp, HelpCircle, MessageSquare, Search, Sparkles } from "lucide-react";
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
          "Simply open the RidePanda app, enter your pickup location and destination, choose your preferred ride type, and confirm your booking. You'll be matched with a nearby driver within minutes.",
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
          "Yes, we offer RidePanda for Business with features like centralized billing, ride management, expense reporting, and dedicated support for companies.",
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
      <div
        className={`premium-card rounded-xl bg-card border transition-all duration-300 ${
          isExpanded ? "border-primary/20 shadow-md" : "border-border"
        }`}
        id={`faq-item-${faq.id}`}
      >
        <button
          onClick={() => toggleExpanded(faq.id)}
          className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors rounded-xl"
        >
          <h3 className="font-medium text-sm">{faq.question}</h3>
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${isExpanded ? "bg-primary/10" : "bg-muted"}`}>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-primary" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-5 pb-5">
            <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ─── Hero ─── */}
      <section className="relative py-28 hero-gradient overflow-hidden" id="faq-hero">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-6 inline-flex !bg-white/10 !border-white/15 !text-white/80">
            <HelpCircle className="h-3.5 w-3.5" />
            Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-secondary bg-clip-text text-transparent">
              questions
            </span>
          </h1>
          <p className="text-lg text-white/50 max-w-2xl mx-auto mb-8">
            Find answers to common questions about using RidePanda as a rider,
            driver, or business partner.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 bg-white/95 border-0 h-12 rounded-xl shadow-lg text-sm"
              id="faq-search"
            />
          </div>
        </div>
      </section>

      {/* ─── FAQ Content ─── */}
      <section className="py-24" id="faq-content">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="riders" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-14 h-12 bg-muted/50 rounded-xl p-1">
              <TabsTrigger
                value="riders"
                id="rider"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium"
              >
                For Riders
              </TabsTrigger>
              <TabsTrigger
                value="drivers"
                id="driver"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium"
              >
                For Drivers
              </TabsTrigger>
              <TabsTrigger
                value="business"
                id="business"
                className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm text-sm font-medium"
              >
                For Business
              </TabsTrigger>
            </TabsList>

            <TabsContent value="riders">
              <div className="space-y-3">
                {filterFAQs(faqData.riders).map((faq) => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="drivers">
              <div className="space-y-3">
                {filterFAQs(faqData.drivers).map((faq) => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="business">
              <div className="space-y-3">
                {filterFAQs(faqData.business).map((faq) => (
                  <FAQItem key={faq.id} faq={faq} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ─── Still Have Questions ─── */}
      <section className="py-24 bg-muted/30 dot-pattern" id="faq-contact-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge-startup mb-4 inline-flex">
            <Sparkles className="h-3.5 w-3.5" />
            Need more help?
          </span>
          <h2 className="text-3xl font-bold mb-4">
            Still have <span className="gradient-text">questions</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is
            available 24/7 to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 px-8 h-12"
                id="faq-contact-btn"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl font-medium px-8 h-12"
              id="faq-chat-btn"
            >
              Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
