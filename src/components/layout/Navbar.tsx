import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { NavLink } from "react-router-dom";
import { ModeToggle } from "./ModeToggler";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[0.9rem] font-medium transition-all duration-300 link-underline ${
      isActive
        ? "text-primary"
        : "text-foreground/70 hover:text-foreground"
    }`;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/features", label: "Features" },
    { to: "/contact", label: "Contact" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <>
      <nav
        id="main-navbar"
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group" id="brand-logo">
              <div className="relative">
                <img
                  src="/panda.jpg"
                  alt="RidePanda"
                  className="h-9 w-9 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="gradient-text">Ride</span>
                <span className="text-foreground">Panda</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={navLinkClass}
                  end={link.to === "/"}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <ModeToggle />
              </div>

              {user ? (
                <div className="hidden md:flex items-center gap-2">
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-lg text-sm font-medium"
                      id="dashboard-btn"
                    >
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    size="sm"
                    className="rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    id="logout-btn"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-2">
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-lg text-sm font-medium"
                      id="login-btn"
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      size="sm"
                      className="rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] px-5"
                      id="get-started-btn"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                id="mobile-menu-toggle"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-border px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }: { isActive: boolean }) =>
                  `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-border flex items-center justify-between px-4">
              <ModeToggle />
              {user ? (
                <div className="flex gap-2">
                  <Link to="/login">
                    <Button variant="outline" size="sm" className="rounded-lg text-sm">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    size="sm"
                    className="rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm"
                  >
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link to="/login">
                    <Button variant="outline" size="sm" className="rounded-lg text-sm">
                      Log in
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button
                      size="sm"
                      className="rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
