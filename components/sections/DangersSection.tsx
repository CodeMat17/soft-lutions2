// components/sections/DangersSection.tsx (updated with dark mode)
"use client";
import { motion } from "framer-motion";
import { AlertTriangle, Users, TrendingDown, ShoppingCart } from "lucide-react";
import Image from "next/image";

interface DangerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  delay: number;
}

const dangers: Omit<DangerCardProps, "delay">[] = [
  {
    icon: <Users className='w-8 h-8' />,
    title: "Losing Potential Customers",
    description:
      "85% of consumers research online before making a purchase. Without a website, you're invisible to them.",
    stat: "85%",
  },
  {
    icon: <TrendingDown className='w-8 h-8' />,
    title: "Reduced Credibility",
    description:
      "Businesses without websites are perceived as less trustworthy and professional by modern consumers.",
    stat: "75%",
  },
  {
    icon: <ShoppingCart className='w-8 h-8' />,
    title: "Missed Revenue Opportunities",
    description:
      "E-commerce is growing rapidly. Without online presence, you're missing out on 24/7 sales potential.",
    stat: "24/7",
  },
];

function DangerCard({
  icon,
  title,
  description,
  stat,
  delay,
}: DangerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className='bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300 group'>
      <div className='flex items-start justify-between mb-4'>
        <div className='w-12 h-12 bg-red-100 dark:bg-red-800 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400 group-hover:bg-red-600 dark:group-hover:bg-red-600 group-hover:text-white transition-colors duration-300'>
          {icon}
        </div>
        <div className='text-3xl font-bold text-red-600 dark:text-red-400'>
          {stat}
        </div>
      </div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
        {title}
      </h3>
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
        {description}
      </p>
    </motion.div>
  );
}

export default function DangersSection() {

const scrollToSection = (href: string): void => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section className='py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-red-950/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <div className='inline-flex items-center gap-3 bg-red-100 dark:bg-red-800 rounded-full px-6 py-3 mb-6'>
            <AlertTriangle className='w-6 h-6 text-red-600 dark:text-red-400' />
            <span className='text-red-800 dark:text-red-200 font-semibold'>
              Business Alert
            </span>
          </div>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            The Cost of{" "}
            <span className='text-red-600 dark:text-red-400'>
              No Online Presence
            </span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Don&apos;t let your business become invisible in the digital age.
            Here&apos;s what you&apos;re missing without a website:
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto items-center md:items-start">
          <div className='flex justify-center items-center shrink-0 '>
            <Image alt='' width={300} height={300} src='/no-connection.svg' />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 max-w-6xl mx-auto'>
            {dangers.map((danger, index) => (
              <DangerCard key={danger.title} {...danger} delay={index * 0.2} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='text-center mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-red-200 dark:border-red-800 max-w-4xl mx-auto'>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
            Ready to Secure Your Digital Future?
          </h3>
          <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg'>
            Let&apos;s build your online presence today and start capturing the
            85% of customers you&apos;re currently missing.
          </p>
          <button onClick={() => scrollToSection("#contact")} className='bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
            Get Your Website Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
