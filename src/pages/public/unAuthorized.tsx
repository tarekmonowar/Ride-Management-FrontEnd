import { Link } from "react-router";

export default function UnAuthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          403 - Unauthorized
        </h1>
        <p className="text-gray-700 mb-6">
          You do not have permission to view this page.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Home
          </Link>
          <Link
            to="/login"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Login Again
          </Link>
        </div>
      </div>
    </div>
  );
}
