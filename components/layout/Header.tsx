// components/layout/Header.tsx (updated)
"use client";

import { motion } from "framer-motion";
import { Menu, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className='fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='flex items-center gap-3 cursor-pointer'
            onClick={() => scrollToSection("#home")}>
            <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
              <Code2 className='w-6 h-6 text-white' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs text-blue-600 dark:text-blue-400 font-medium leading-none'>
                CodeMat
              </span>
              <span className='text-2xl font-bold text-gray-900 dark:text-white leading-none'>
                Soft-lutions
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className='text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200'>
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className='hidden lg:flex items-center gap-4'>
            {/* Theme Toggler */}
            <AnimatedThemeToggler />

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("#contact")}
              className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300'>
              Start Project
            </Button>
          </div>

          {/* Mobile Menu - Sheet */}
          <div className='flex lg:hidden items-center gap-4'>
            {/* Theme Toggler - Mobile */}
            <AnimatedThemeToggler />

            <Sheet>
              <SheetTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className='p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'>
                  <Menu className='w-6 h-6' />
                </motion.button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='w-[300px] sm:w-[400px] overflow-y-auto bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700'>
                <div className='flex flex-col h-full'>
                  {/* Logo in Sheet */}
                  <div className='flex items-center gap-3 mb-8 pt-4'>
                    <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
                      <Code2 className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-xl font-bold text-gray-900 dark:text-white leading-none'>
                        Soft-lutions
                      </span>
                      <span className='text-xs text-blue-600 dark:text-blue-400 font-medium leading-none'>
                        Digital Solutions
                      </span>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  <nav className='flex-1 space-y-4'>
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.label}>
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className='block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-all duration-200 text-lg'>
                          {item.label}
                        </button>
                      </SheetClose>
                    ))}
                  </nav>

                  {/* CTA Button in Sheet */}
                  <div className='pt-8 pb-4'>
                    <SheetClose asChild>
                      <Button
                        onClick={() => scrollToSection("#contact")}
                        className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 text-lg'>
                        Start Project
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
