import Link from "next/link";
import React from "react";
import { ModeToggle } from "./toggle/mode-toggle";

export default function Navbar() {
  return (
    <div className="border absolute w-full  bg-white font-bold text-amber-500  p-4  dark:bg-gray-900 dark:text-gray-300">
      <div className="w-full  px-10 mx-auto flex items-center justify-between gap-20">
        <h1>TSK.Dev</h1>
        <ul className="flex-col items-center md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium ">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/products/create-product"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              href="/users"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/login"
              className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
            >
              Login
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </div>
  );
}
