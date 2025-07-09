import React from "react";
import { useState, useEffect } from "react";
import Rendering from "./Rendering";

function SplashScreen() {
  return <Rendering />;
}

const modules = [
  {
    title: "Module: Variable Declaration",
    color: "text-yellow-300",
    topics: [
      {
        name: "Using `ye`",
        definition:
          "Declare variables for storing numbers, strings, or arrays.",
        syntax: "`ye x = 10;`",
        example: '`ye name = "Sanket";`',
      },
    ],
  },
  {
    title: "Module: Output Statements",
    color: "text-blue-300",
    topics: [
      {
        name: "Using `bol`",
        definition: "Display messages or variable values in the console.",
        syntax: "`bol x;`",
        example: '`bol "Hi!";`',
      },
    ],
  },
  {
    title: "Module: Concatenation",
    color: "text-green-300",
    topics: [
      {
        name: "String Joining",
        definition:
          "Join multiple strings or variables using the `+` operator.",
        syntax: '`bol "Hello, " + name;`',
        example: '`bol name + " is learning S Lang";`',
      },
    ],
  },
  {
    title: "Module: Comments",
    color: "text-gray-300",
    topics: [
      {
        name: "Using `//`",
        definition:
          "Write remarks or explanations that are ignored during execution.",
        syntax: "`// This is a comment`",
        example: "`// Define user details below`",
      },
    ],
  },
  {
    title: "Module: Conditionals",
    color: "text-red-300",
    topics: [
      {
        name: "Decision Making",
        definition:
          "Use `agar` and `warna` to perform logic based on conditions.",
        syntax: "`agar x > 5 { ... } warna { ... }`",
        example:
          '`agar x > 5 { bol "x is greater than 5"; } warna { bol "x is 5 or less"; }`',
      },
    ],
  },
  {
    title: "Module: Loops",
    color: "text-indigo-300",
    topics: [
      {
        name: "Using `chakkar`",
        definition: "Repeat a block of code using a counter variable.",
        syntax: "`chakkar i = 0; i < 5; i++ { ... }`",
        example: '`bol "Iteration " + i;`',
      },
    ],
  },
  {
    title: "Module: Arrays",
    color: "text-purple-300",
    topics: [
      {
        name: "Array Declaration & Access",
        definition:
          "Store multiple values using `[ ]`, and access them by index.",
        syntax: '`ye fruits = ["apple", "banana", "cherry"];`',
        example: "`bol fruits[0];`",
      },
    ],
  },
  {
    title: "Module: Functions",
    color: "text-pink-300",
    topics: [
      {
        name: "Function Creation",
        definition:
          "Define reusable logic blocks using `kaam` and call them with parameters.",
        syntax: '`kaam greet(person) { bol "Hi, " + person; }`',
        example: '`greet("Sanket");`',
      },
    ],
  },
];

export default function Course() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <div className="min-h-screen bg-black p-6 text-white font-mono">
          <h1 className="text-4xl font-bold text-blue-400 mb-6">
            S language Full Course
          </h1>
          <div className="space-y-6 text-sm">
            {modules.map((mod, index) => (
              <section key={index} className="bg-gray-900 p-4 rounded shadow">
                <h2 className={`text-xl font-semibold ${mod.color}`}>
                  {mod.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {mod.topics.map((topic, idx) => (
                    <div key={idx} className="border-l-4 border-gray-700 pl-4">
                      <h3 className="text-lg font-bold">{topic.name}</h3>
                      <p className="text-gray-300 mb-1">
                        <strong>Definition:</strong> {topic.definition}
                      </p>
                      <p>
                        <strong>Syntax:</strong>{" "}
                        <code>{topic.syntax.replace(/`/g, "")}</code>
                      </p>
                      <p>
                        <strong>Example:</strong>{" "}
                        <code>{topic.example.replace(/`/g, "")}</code>
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
