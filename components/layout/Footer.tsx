// components/layout/Footer.tsx (updated)
"use client";
import { motion } from "framer-motion";
import { Code2, Mail, ArrowUp } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const services: FooterLink[] = [
  { label: "Web Development", href: "#solutions" },
  { label: "E-Commerce Solutions", href: "#solutions" },
  { label: "AI Integration", href: "#solutions" },
];

const company: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  {
    icon: (
      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
      </svg>
    ),
    href: "",
    label: "Twitter",
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
        <path
          fillRule='evenodd'
          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
          clipRule='evenodd'
        />
      </svg>
    ),
    href: "",
    label: "Facebook",
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
        <path
          fillRule='evenodd'
          d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 12.017 0z'
          clipRule='evenodd'
        />
      </svg>
    ),
    href: "",
    label: "Instagram",
  },
  {
    icon: (
      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
    href: "",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className='bg-gray-900 dark:bg-black text-white relative'>
      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className='absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300'>
        <ArrowUp className='w-6 h-6' />
      </motion.button>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='lg:col-span-1'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center'>
                <Code2 className='w-6 h-6 text-white' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs text-blue-400 font-medium leading-none'>
                  CodeMat
                </span>
                <span className='text-2xl font-bold text-white leading-none'>
                  Soft-lutions
                </span>
              </div>
            </div>
            <p className='text-gray-300 mb-6 leading-relaxed'>
              Transforming businesses with cutting-edge web development and AI
              solutions. We build digital experiences that drive growth and
              success.
            </p>

            {/* Contact Info - Only Email */}
            <div className='space-y-3'>
              <div className='flex items-center gap-3 text-gray-300'>
                <Mail className='w-5 h-5 text-blue-400' />
                <span>ask@soft-lutions.com.ng</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-semibold text-white mb-6'>Services</h3>
            <ul className='space-y-3'>
              {services.map((service) => (
                <li key={service.label}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left hover:underline'>
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-semibold text-white mb-6'>Company</h3>
            <ul className='space-y-3'>
              {company.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className='text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left hover:underline'>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}>
            <h3 className='text-lg font-semibold text-white mb-6'>
              Connect With Us
            </h3>
            <p className='text-gray-300 mb-6'>
              Follow us on social media to stay updated with our latest projects
              and insights.
            </p>

            {/* Social Links */}
            <div>
              <div className='flex gap-3'>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className='w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200'
                    aria-label={social.label}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Soft-lutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
