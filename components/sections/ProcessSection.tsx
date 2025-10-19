// components/sections/ProcessSection.tsx (updated with dark mode)
"use client";
import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  delay: number;
}

const processSteps: Omit<ProcessStepProps, "delay">[] = [
  {
    icon: <Search className='w-6 h-6' />,
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your needs, target audience, and business goals to create the perfect strategy.",
  },
  {
    icon: <Palette className='w-6 h-6' />,
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our designers create stunning, user-friendly interfaces that reflect your brand identity.",
  },
  {
    icon: <Code className='w-6 h-6' />,
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution with modern technologies and thoroughly test every feature.",
  },
  {
    icon: <Rocket className='w-6 h-6' />,
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project and provide ongoing support to ensure long-term success.",
  },
];

function ProcessStep({
  icon,
  step,
  title,
  description,
  delay,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className='flex flex-col items-center text-center'>
      <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 relative'>
        {icon}
        <div className='absolute -top-2 -right-2 w-6 h-6 bg-blue-800 rounded-full text-xs flex items-center justify-center text-white font-bold'>
          {step}
        </div>
      </div>
      <h3 className='text-xl font-semibold text-white mb-3'>{title}</h3>
      <p className='text-gray-300 leading-relaxed'>{description}</p>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section className='py-20 bg-gray-900 dark:bg-black'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            Our <span className='text-blue-400'>Process</span>
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
            A streamlined approach to delivering exceptional results on time and
            within budget
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto'>
          {processSteps.map((step, index) => (
            <ProcessStep key={step.step} {...step} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
