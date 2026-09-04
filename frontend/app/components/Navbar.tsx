"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "History", href: "/history" },
  ];

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 pt-5">

      <div
        className="
          flex items-center justify-between
          px-4 md:px-5 py-3
          rounded-2xl
          bg-white/[0.03]
          backdrop-blur-xl
          border border-white/10
          shadow-lg shadow-black/10
        "
      >

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
        >
          <div
            className="
              w-9 h-9
              rounded-xl
              bg-gradient-to-br
              from-blue-500
              to-purple-600
              flex items-center justify-center
              shadow-lg shadow-blue-500/20
              group-hover:scale-105
              transition-transform
            "
          >
            ✦
          </div>

          <div className="hidden sm:block">
            <p className="text-white font-bold text-sm">
              AI Project Mentor
            </p>

            <p className="text-gray-500 text-[10px]">
              Build smarter. Build better.
            </p>
          </div>
        </Link>


        {/* Navigation */}
        <div className="flex items-center gap-1 md:gap-2">

          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative
                  px-3 md:px-4
                  py-2
                  rounded-xl
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {item.name}

                {isActive && (
                  <span
                    className="
                      absolute
                      bottom-0.5
                      left-1/2
                      -translate-x-1/2
                      w-1
                      h-1
                      rounded-full
                      bg-blue-400
                    "
                  />
                )}
              </Link>
            );
          })}

        </div>


        {/* Generate Button */}
        <Link
          href="/"
          className="
            hidden md:inline-flex
            items-center
            gap-2
            px-4 py-2.5
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            text-white
            text-sm
            font-semibold
            shadow-lg
            shadow-blue-600/20
            hover:from-blue-500
            hover:to-purple-500
            hover:-translate-y-0.5
            transition-all
          "
        >
          Generate
          <span>→</span>
        </Link>

      </div>

    </nav>
  );
}