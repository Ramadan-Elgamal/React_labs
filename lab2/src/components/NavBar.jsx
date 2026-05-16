"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {  NavLink } from 'react-router'
import { cn } from "@/lib/utils";


const Navbar = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <section className={cn("py-4", className)}>
      <div className="container">
        <nav className="flex items-center justify-between gap-4">
          <a href={logo.url} className="flex items-center gap-2">
            <img
              src={logo.src}
              className="max-h-8 dark:invert"
              alt={logo.alt}
            />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-4">
            <NavLink to="/" className="text-sm font-medium hover:underline">Home</NavLink>
            <NavLink to="/products" className="text-sm font-medium hover:underline">Products</NavLink>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => setIsDarkMode((current) => !current)}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };

