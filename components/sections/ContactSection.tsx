// components/sections/ContactSection.tsx (updated)
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Minus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

   // Client-side validation
   if (!name.trim() || name.trim().length < 2) {
     toast.error("Please enter your full name (at least 2 characters)");
     return;
   }

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email.trim() || !emailRegex.test(email)) {
     toast.error("Please enter a valid email address");
     return;
   }

   if (!subject.trim() || subject.trim().length < 3) {
     toast.error("Please enter a subject (at least 3 characters)");
     return;
   }

   if (!message.trim() || message.trim().length < 10) {
     toast.error("Please enter a message (at least 10 characters)");
     return;
   }

   setIsSubmitting(true);

   try {
     console.log("Sending contact form data...");
     const response = await fetch("/api/contact", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         name: name.trim(),
         email: email.trim(),
         subject: subject.trim(),
         message: message.trim(),
       }),
     });

     const data = await response.json();
     console.log("API response:", { status: response.status, data });

     if (!response.ok) {
       throw new Error(data.error || `HTTP error! status: ${response.status}`);
     }

     toast.success("Message sent successfully! 🎉", {
       description: "We'll get back to you within 24 hours.",
     });

     // Reset form
     setName("");
     setEmail("");
     setSubject("");
     setMessage("");
   } catch (error) {
     console.error("Error sending message:", error);

     // Provide more specific error messages
     let errorMessage = "Failed to send message";
     let description =
       "Please try again or contact us directly at ask@soft-lutions.com.ng";

     if (error instanceof Error) {
       if (error.message.includes("Email service is not configured")) {
         errorMessage = "Email Service Temporarily Unavailable";
         description = "Please contact us directly at ask@soft-lutions.com.ng";
       } else if (error.message.includes("Email service error")) {
         errorMessage = "Email Delivery Failed";
         description =
           "Our email service is experiencing issues. Please contact us directly.";
       } else {
         errorMessage = error.message;
       }
     }

     toast.error(errorMessage, { description });
   } finally {
     setIsSubmitting(false);
   }
 };

  return (
    <section id='contact' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
            Ready to{" "}
            <span className='text-blue-600 dark:text-blue-400'>
              Get Started?
            </span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Let&apos;s discuss your project and bring your ideas to life with
            our expert development team.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='space-y-8'>
            <div>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Get in Touch
              </h3>
              <p className='text-gray-600 dark:text-gray-300 mb-8'>
                Have a project in mind? We&apos;d love to hear about it. Send us
                a message and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center'>
                  <Mail className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                </div>
                <div>
                  <h4 className='font-semibold text-gray-900 dark:text-white'>
                    Email
                  </h4>
                  <p className='text-gray-600 dark:text-gray-300'>
                    ask@soft-lutions.com.ng
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-gray-50 dark:bg-gray-800 rounded-2xl p-6'>
              <h4 className='font-semibold text-gray-900 dark:text-white mb-3'>
                Why Choose Us?
              </h4>
              <ul className='text-gray-600 dark:text-gray-300 space-y-2'>
                <li>✓ 24-48 hour response time</li>
                <li>✓ Free project consultation</li>
                <li>✓ Competitive pricing</li>
                <li>✓ Ongoing support & maintenance</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className='bg-gray-50 dark:bg-gray-800 rounded-2xl px-4 py-8 sm:px-8 space-y-6'>
            {/* Name and Email in one row */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Full Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 outline-none'
                  placeholder='Your full name'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                  Email Address *
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 outline-none'
                  placeholder='your@email.com'
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 outline-none'
                placeholder='Project inquiry or subject'
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
                Project Details *
              </label>
              <textarea
                id='message'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className='w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200 outline-none resize-none'
                placeholder='Tell us about your project requirements, goals, and timeline...'
              />
            </div>

            <Button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'>
              {isSubmitting ? (
                <>
                  Sending...
                  <Minus className='ml-2 w-5 h-5 animate-spin' />
                </>
              ) : (
                <>
                  Send Message
                  <Send className='ml-2 w-5 h-5' />
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
