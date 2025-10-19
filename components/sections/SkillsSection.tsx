// components/sections/SkillsSection.tsx (updated with dark mode)
"use client";
import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Database, Brain, Zap } from "lucide-react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const skills: Omit<SkillCardProps, "delay">[] = [
  {
    icon: <Code className='w-8 h-8' />,
    title: "Modern Web Development",
    description:
      "Next.js, React, TypeScript, and cutting-edge frameworks for blazing-fast, SEO-optimized websites.",
  },
  {
    icon: <Palette className='w-8 h-8' />,
    title: "Beautiful UI/UX Design",
    description:
      "Tailwind CSS, shadcn/ui, and Framer Motion for stunning, responsive interfaces that convert visitors.",
  },
  {
    icon: <Smartphone className='w-8 h-8' />,
    title: "Mobile-First Development",
    description:
      "Fully responsive designs that work perfectly on all devices, from smartphones to desktops.",
  },
  {
    icon: <Database className='w-8 h-8' />,
    title: "Backend & Database Solutions",
    description:
      "Robust server-side applications with secure databases and scalable architecture.",
  },
  {
    icon: <Brain className='w-8 h-8' />,
    title: "AI Integration",
    description:
      "Smart chatbots, predictive analytics, and machine learning solutions to automate and optimize.",
  },
  {
    icon: <Zap className='w-8 h-8' />,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times and optimized user experiences that boost engagement and conversions.",
  },
];

function SkillCard({ icon, title, description, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600 group'>
      <div className='w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300'>
        {icon}
      </div>
      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
        {title}
      </h3>
      <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
        {description}
      </p>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Our{" "}
            <span className='text-blue-600 dark:text-blue-400'>Expertise</span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Combining modern technology with creative design to deliver
            exceptional digital experiences
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} {...skill} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
