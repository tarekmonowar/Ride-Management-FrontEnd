import { useState } from "react";

function AnimatedDoneButton() {
  const [done, setDone] = useState(false);

  return (
    <button
      onClick={() => setDone(true)}
      className={`
        relative flex items-center justify-center
        px-4 py-2 text-sm font-semibold rounded
        transition-all duration-300 overflow-hidden cursor-pointer
        ${
          !done
            ? "bg-primary text-white cursor-default"
            : "bg-gray-200 text-black hover:bg-white"
        }
      `}
    >
      {/* Text */}
      <span
        className={`transition-all duration-300 ${
          !done ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      >
        Done
      </span>

      {/* Check Icon */}
      <span
        className={`
          absolute flex items-center justify-center
          h-6 w-6 rounded-full bg-white text-primary font-extrabold
          transition-all duration-500
          ${
            !done
              ? "opacity-100 scale-110 rotate-0"
              : "opacity-0 scale-0 rotate-45"
          }
        `}
      >
        ✓
      </span>
    </button>
  );
}

export default AnimatedDoneButton;
