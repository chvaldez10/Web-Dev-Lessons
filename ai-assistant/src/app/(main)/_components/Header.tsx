"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/logo.svg"
              alt="AI Assistant Logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              AI Assistant
            </span>
          </Link>
          {/* User Menu */}
          <div className="flex items-center">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
