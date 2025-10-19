// components/sections/TestimonialsSection.tsx (optimized layout)
"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Slimtouch Inc.",
    role: "Marketing Director",
    content:
      "Soft-lutions transformed our online presence completely. Our website load time improved by 60% and conversions increased by 45% within the first month. Their attention to detail is exceptional.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sammy",
    company: "Threescore Tours",
    role: "Operations Manager",
    content:
      "From concept to launch, the process was smooth and transparent. They delivered ahead of schedule and within budget. Highly recommended for any business looking for quality web development.",
    rating: 5,
  },
  {
    id: 3,
    name: "Grace Williams",
    company: "Care HealthPlus",
    role: "Practice Manager",
    content:
      "Our patient booking system was outdated and inefficient. Soft-lutions created a modern, user-friendly platform that our patients love. Support has been excellent throughout.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Arabi",
    company: "HRAA Cooperative",
    role: "CTO",
    content:
      "The security features and performance optimization they implemented for our financial platform exceeded our expectations. Truly experts in modern web technologies.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group h-full flex flex-col'>
      {/* Quote Icon */}
      <div className='mb-4'>
        <Quote className='w-8 h-8 text-blue-600 dark:text-blue-400 opacity-60' />
      </div>

      {/* Rating */}
      <div className='mb-4'>
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Content */}
      <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1'>
        &quot;{testimonial.content}&quot;
      </p>

      {/* Client Info */}
      <div className='flex items-center gap-4'>
        <div className='flex-1 min-w-0'>
          <h4 className='font-semibold text-gray-900 dark:text-white truncate'>
            {testimonial.name}
          </h4>
          <p className='text-sm text-gray-600 dark:text-gray-400 truncate'>
            {testimonial.role}
          </p>
          <p className='text-sm text-blue-600 dark:text-blue-400 font-medium truncate'>
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 rounded-full px-6 py-3 mb-6'>
            <Quote className='w-5 h-5 text-blue-600 dark:text-blue-400' />
            <span className='text-blue-600 dark:text-blue-400 font-semibold text-sm'>
              Client Testimonials
            </span>
          </motion.div>

          <div className='flex flex-col items-center lg:flex-row gap-8 lg:gap-20 justify-center'>
            <div>
              <h2 className='lg:text-start text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                What Our{" "}
                <span className='text-blue-600 dark:text-blue-400'>
                  Clients Say
                </span>
              </h2>
              <p className='lg:text-start text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto'>
                Don&apos;t just take our word for it. Here&apos;s what our
                satisfied clients have to say about their experience working
                with us.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='flex-shrink-0'>
              <Image
                alt='Happy clients illustration'
                width={150}
                height={150}
                src='/testimonials.svg'
                className='object-contain'
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Illustration - Takes full width on mobile, fixed width on desktop */}

        {/* Testimonials Grid - Takes full width on mobile, 2/3 on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex-1 w-full mb-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 dark:border-gray-700'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center'>
            <div>
              <div className='text-2xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                50+
              </div>
              <div className='text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium'>
                Projects Completed
              </div>
            </div>
            <div>
              <div className='text-2xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                98%
              </div>
              <div className='text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium'>
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className='text-2xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                24/7
              </div>
              <div className='text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium'>
                Support Available
              </div>
            </div>
            <div>
              <div className='text-2xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2'>
                15+
              </div>
              <div className='text-sm lg:text-base text-gray-600 dark:text-gray-300 font-medium'>
                Industries Served
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className='text-center mt-12'>
          <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg'>
            Ready to become our next success story?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'>
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
