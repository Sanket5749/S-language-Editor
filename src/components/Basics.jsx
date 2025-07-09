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
ye x = 10;
ye name = "Sanket";

// 🖨️ Print output
bol x;
bol "Hi!";
bol name;

// ➕ Concatenation
bol "Hi, " + name;
bol name + " is learning S Lang";

// 💬 Comments
// This line explains what the code does

// ❓ Conditionals
agar x > 5 {
  bol "x is greater than 5";
} warna {
  bol "x is 5 or less";
}

// 🔁 Loops
ye i;
chakkar i = 0; i < 5; i++ {
  bol "Iteration " + i;
}

// 🧮 Arrays
ye fruits = ["apple", "banana", "cherry"];
bol fruits[0];

// 🧪 Functions
kaam greet(person) {
  bol "Hi, " + person;
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
          <h2 className="text-3xl font-bold mb-6 text-blue-400">S Lang Basics</h2>

          <p className="mb-4">
            Ready to use S{" "}
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