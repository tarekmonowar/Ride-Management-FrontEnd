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

export default function Navbar() {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { data } = useUserInfoQuery(undefined);
  const user = data?.data;
  // console.log(data);
  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-[32px]">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/panda.jpg" alt="panda" className="h-10 w-10" />
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))]">
              RidePanda
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }: { isActive: boolean }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }: { isActive: boolean }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/features"
              className={({ isActive }: { isActive: boolean }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Features
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }: { isActive: boolean }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }: { isActive: boolean }) =>
                `text-lg transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-1"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              FAQ
            </NavLink>

            <ModeToggle />
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                {" "}
                <Link to="/login">
                  <Button variant="outline" className="rounded">
                    Dashboard
                  </Button>
                </Link>
                <Button
                  onClick={handleLogout}
                  className="rounded bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                {" "}
                <Link to="/login">
                  <Button variant="outline" className="rounded">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="rounded bg-[linear-gradient(135deg,_hsl(195_100%_39%),_hsl(195_100%_25%))] text-white px-6 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
