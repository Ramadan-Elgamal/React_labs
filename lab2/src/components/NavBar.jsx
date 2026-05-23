"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {  NavLink } from 'react-router'
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/zustand/useThemeStore";
import { useSelector } from 'react-redux';
import { useLanguage } from '../store/context/LanguageContext.jsx';

const Navbar = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  className,
}) => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const { language, setLanguage } = useLanguage();

  const cartItems = useSelector((state) => state.cart?.cartItems ?? []);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
  }, [theme]);

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
            <NavLink to="/products/cart" className="text-sm font-medium hover:underline">
              Cart {cartItemCount > 0 && (<span className="ml-1 inline-flex items-center justify-center rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">{cartItemCount}</span>)}
            </NavLink>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant={language === "en" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("en")}
            >
              EN
            </Button>
            <Button
              type="button"
              variant={language === "ar" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("ar")}
            >
              AR
            </Button>
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          
          <NavLink to="/register" className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
              Register
            </NavLink>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };

