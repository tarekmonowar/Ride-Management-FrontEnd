import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4" id="error-page">
      <div className="text-center max-w-md">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <span className="text-[10rem] font-black leading-none gradient-text select-none opacity-20">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🐼</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex items-center gap-3 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="rounded-xl h-11 px-5"
            id="go-back-btn"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="rounded-xl bg-gradient-to-r from-primary to-cyan-500 text-white h-11 px-5"
            id="go-home-btn"
          >
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
