import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rendering from "./Rendering";

function SplashScreen() {
  return <Rendering />;
}

export default function Basics() {
  const [showSplash, setShowSplash] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const code = `// 🔠 Declare variables
banao x = 10;
banao name = "Sanket";

// 🖨️ Print output
dikhao x;
dikhao "Hi!";
dikhao name;

// ➕ Concatenation
dikhao "Hi, " + name;
dikhao name + " is learning S Lang";

// 💬 Comments
// This line explains what the code does

// ❓ Conditionals
yadi x > 5 {
  dikhao "x is greater than 5";
} nahito {
  dikhao "x is 5 or less";
}

// 🔁 Loops
banao i;
jabtak i = 0; i < 5; i++ {
  dikhao "Iteration " + i;
}

// 🧮 Arrays
banao fruits = ["apple", "banana", "cherry"];
dikhao fruits[0];

// 🧪 Functions
kaam greet(person) {
  dikhao "Hi, " + person;
}
greet("Sanket");`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="min-h-screen bg-black p-6 font-mono text-white">
          <h2 className="text-3xl font-dikhaod mb-6 text-blue-400">S language Basics</h2>

          <p className="mb-4">
            Ready to use it{" "}
            <Link
              to="/"
              className="text-blue-500 underline hover:text-blue-300"
            >
              Start Coding 
            </Link>
          </p>

          <div className="mt-4">
            <p className="text-right">

              <button
                onClick={handleCopy}
                className="text-sm px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white transition"
                >
                {copied ? "✅ Copied!" : "Copy"}
              </button>
                </p>
          

            <div className="rounded-md overflow-hidden border border-gray-700 shadow-lg">
              <pre className="w-full p-5 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-green-400 text-sm font-mono whitespace-pre-wrap overflow-auto">
                {code}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}