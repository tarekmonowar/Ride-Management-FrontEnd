import { Button } from "@/components/ui/button";
import { ShieldX, Home, LogIn } from "lucide-react";
import { Link } from "react-router";

export default function UnAuthorized() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4" id="unauthorized-page">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-500/10 to-red-500/10 flex items-center justify-center mx-auto mb-6">
          <ShieldX className="h-10 w-10 text-rose-500" />
        </div>

        <h1 className="text-2xl font-bold mb-3">Access Denied</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          You don't have permission to view this page.
          Please log in with the correct credentials or return home.
        </p>

        <div className="flex items-center gap-3 justify-center">
          <Link to="/">
            <Button
              variant="outline"
              className="rounded-xl h-11 px-5"
              id="unauth-home-btn"
            >
              <Home className="mr-2 h-4 w-4" />
              Go to Home
            </Button>
          </Link>
          <Link to="/login">
            <Button
              className="rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white h-11 px-5"
              id="unauth-login-btn"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login Again
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
