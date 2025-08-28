// src/pages/public/ErrorPage.tsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Go Back Home
      </Button>
    </div>
  );
}
