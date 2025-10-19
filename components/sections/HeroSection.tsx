// components/sections/HeroSection.tsx (updated)
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 dark:from-gray-900 dark:via-purple-950 dark:to-indigo-950 relative overflow-hidden pt-24 pb-12'>
      <div className='absolute inset-0 bg-black/40 dark:bg-black/60 z-0' />
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        <div className='text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-center lg:justify-between md:gap-5 lg:gap-12'>
              <div className='md:text-start'>
                <h1 className='text-4xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight'>
                  Digital Excellence
                  <span className='block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                    Made Affordable
                  </span>
                </h1>

                <p className='text-xl sm:text-xl text-gray-300 dark:text-gray-200 max-w-2xl mx-auto leading-7'>
                  We build stunning, high-performance websites and AI-powered
                  solutions that drive growth and transform your digital
                  presence at prices that make sense.
                </p>
              </div>

              <div className='w-full flex justify-center items-center max-w-sm mx-auto'>
                <div className='relative w-full max-w-sm aspect-square'>
                  <Image
                    alt='Web Development Illustration'
                    fill
                    src='/web-devices.svg'
                  />
                </div>
              </div>
            </div>

            <div className='md:mt-5 lg:-mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center md:justify-start'>
              <Button
                onClick={() => scrollToSection("#contact")}
                size='lg'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 transform hover:scale-105'>
                Start Your Project
                <ArrowRight className='ml-2 w-5 h-5' />
              </Button>
              {/* <Button
                variant='outline'
                size='lg'
                className='text-blue-600 px-8 py-3 text-lg rounded-full backdrop-blur-sm'>
                View Our Work
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse' />
      <div className='absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75' />
      <div className='absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-150' />
    </section>
  );
}
