"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Industries We Serve", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <nav className="mx-auto max-w-[1400px] rounded-2xl bg-white px-5 py-4 shadow-sm sm:px-7">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" aria-label="Homepage" className="shrink-0">
            <Image
              src="/frame 4.svg"
              alt="Proverb Technologies"
              width={120}
              height={44}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex xl:gap-10">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-body-text transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover lg:inline-flex"
          >
            Book Instant Call
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 border-t border-border pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-body-text hover:bg-surface-muted hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-3 rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Book Instant Call
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}