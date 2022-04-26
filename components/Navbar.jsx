import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-pink-500 py-5">
      <nav className="flex justify-between items-center px-10">
        <h3 className="text-3xl tex-white">Logo</h3>
        <ul className="flex items-center space-x-3 text-xl text-white">
          <li>
            <Link href="/" cla>
              {" "}
              Home{" "}
            </Link>
          </li>
          <li>
            <Link href="/posts"> Posts </Link>
          </li>
          <li>
            <Link href="/about"> About </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
