import { Car, Mail, Phone } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">RideManager</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The most trusted ride management platform connecting riders and
              drivers.
            </p>
            <div className="flex space-x-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <Mail className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-primary"
              >
                About
              </Link>
              <Link
                to="/features"
                className="block text-muted-foreground hover:text-primary"
              >
                Features
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link
                to="/faq"
                className="block text-muted-foreground hover:text-primary"
              >
                FAQ
              </Link>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary"
              >
                Safety
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary"
              >
                Driver Terms
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 RideManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
