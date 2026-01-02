"use client";

import Link from "next/link";
import { ThemeToggle } from "../utils/theme-toggle";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold">
          RO Profit Calculator
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </div>
      </div>

      <ThemeToggle />
    </nav>
  );
}
