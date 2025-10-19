// components/sections/SolutionsSection.tsx (updated - price tags removed)
"use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface SolutionProps {
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  delay: number;
}

const solutions: Omit<SolutionProps, "delay">[] = [
  {
    title: "Business Website",
    description: "Professional website to establish your online presence",
    features: [
      "5-10 Modern Pages",
      "Mobile Responsive Design",
      "Contact Form & SEO",
      "Basic Analytics",
      "1 Month Support",
    ],
  },
  {
    title: "E-Commerce Store",
    description: "Complete online store to sell your products",
    features: [
      "Product Catalog",
      "Secure Payment Gateway",
      "Inventory Management",
      "Order Tracking",
      "3 Months Support",
    ],
    popular: true,
  },
  {
    title: "Custom Web App",
    description: "Tailored web application for your specific needs",
    features: [
      "Custom Features",
      "User Authentication",
      "Database Integration",
      "Admin Dashboard",
      "6 Months Support",
    ],
  },
];

function SolutionCard({
  title,
  description,
  features,
  popular,
  delay,
}: SolutionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
        popular
          ? "border-blue-500 dark:border-blue-400 scale-105"
          : "border-gray-100 dark:border-gray-700"
      }`}>
      {popular && (
        <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
          <span className='bg-blue-500 dark:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
            Most Popular
          </span>
        </div>
      )}

      <div className='text-center mb-8'>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-3'>
          {title}
        </h3>
        <p className='text-gray-600 dark:text-gray-300 text-lg'>
          {description}
        </p>
      </div>

      <ul className='space-y-4 mb-8'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center gap-3'>
            <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0' />
            <span className='text-gray-700 dark:text-gray-300'>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
          popular
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
        }`}>
        Get Started
      </button>
    </motion.div>
  );
}

export default function SolutionsSection() {

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Our{" "}
            <span className='text-blue-600 dark:text-blue-400'>Solutions</span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Customized web development services tailored to meet your specific
            business needs and goals
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              {...solution}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12'>
          <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg'>
            Ready to discuss your project and get a personalized quote?
          </p>
          <button onClick={() => scrollToSection("#contact")} className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
            Get Your Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
