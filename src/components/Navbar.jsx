import React, { useState } from "react";
import { motion, useScroll } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 50,
        }}
      />

      <nav className="bg-dark shadow-md text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <p className="text-white">
        <Link to="/" className="text-decoration-none text-blue-500 underline hover:text-blue-300">
          IDE
        </Link>
      </p>
          <p className="text-white">
        <Link to="/basics" className="text-decoration-none text-blue-500 underline hover:text-blue-300">
          Basics
        </Link>
      </p>
          <p className="text-white">
        <Link to="/challenges" className="text-decoration-none text-blue-500 underline hover:text-blue-300">
          Challenges
        </Link>
      </p>
          <p className="text-white">
        <Link to="/course" className="text-decoration-none text-blue-500 underline hover:text-blue-300">
          Course
        </Link>
      </p>
        </div>
      </nav>
    </div>
  );
}
