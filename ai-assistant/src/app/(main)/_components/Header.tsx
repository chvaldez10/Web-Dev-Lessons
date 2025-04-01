"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

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
            <div className="flex items-center space-x-3">
              {user ? (
                <Image
                  src={user.picture || "/avatars/default-avatar.png"}
                  alt="User profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <FaUserCircle className="w-8 h-8 text-gray-400" />
              )}
              <span className="text-sm font-medium text-gray-700">
                {user?.name || "Guest"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
