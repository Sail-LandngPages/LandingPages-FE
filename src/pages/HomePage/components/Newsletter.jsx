import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 text-left cursor-pointer hover:opacity-80 transition-opacity"
      >
        <span className="font-['Sora'] font-semibold text-lg leading-[160%] text-black">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-[#133C8A]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-['Sora'] text-sm text-[#3A3A3A] pb-3">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full h-[1px] bg-[#D1D1D1] my-3"></div>
    </div>
  );
};

const Newsletter = () => {
  const faqs = [
    {
      question: "How do I register for a course?",
      answer:
        "Registration is easy! Simply visit our website, browse the available courses, and sign up for the one that fits your interest and level.",
    },
    {
      question: "Are the instructors experienced?",
      answer:
        "Absolutely! Our instructors are industry professionals with real-world experience and a passion for teaching and mentoring.",
    },
    {
      question: "Will these Courses guarantee me a tech job?",
      answer:
        "Absolutely! Our instructors are industry professionals with real-world experience and a passion for teaching and mentoring.",
    },
    {
      question: "Will I receive a certificate after completing a course?",
      answer:
        "Yes! Upon successful completion, you'll receive a certificate that validates your skills and can boost your portfolio or résumé.",
    },
    {
      question: "Can these classes help me build real projects or a portfolio?",
      answer:
        "Yes! You'll work on real-life projects throughout the program — perfect for showcasing your skills to future employers or launching your own ideas.",
    },
  ];

  return (
    <section className="w-full bg-white py-20 pt-[103px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Newsletter Card */}
          <div className="max-w-[632px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Raleway'] font-bold text-2xl md:text-[40px] lg:text-[54px] leading-[120%] text-black mb-4"
            >
              Don't miss any information <br className="hidden md:block" /> from us!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-['Sora'] font-semibold text-base md:text-lg leading-6 text-[#3A3A3A] mb-8"
            >
              Sign up to our regular newsletter for news, insights, new product
              releases & more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-[90%] flex flex-row gap-4 mb-4"
            >
              <div className="flex-1 relative">
                <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-[#627A95]" />
                <input
                  type="email"
                  placeholder="Input email address"
                  className="w-full h-[56px] pl-12 pr-4 py-4 border border-[#D1D1D1] rounded-[8px] font-['Sora'] text-sm md:text-base text-[#627A95] placeholder:text-[#627A95] focus:outline-none focus:border-[#133C8A]"
                />
              </div>
              <button className="whitespace-nowrap h-[56px] px-4 md:px-8 bg-[#133C8A] rounded-[40px] font-['Sora'] font-semibold text-sm md:text-base text-white hover:bg-[#0f2e68] transition-colors cursor-pointer">
                Subscribe
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-['Sora'] text-xs leading-[160%] text-[#3A3A3A]"
            >
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </motion.p>
          </div>

          {/* FAQ Card */}
          <div className="max-w-[632px] mx-auto lg:mx-0 order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Raleway'] font-bold text-2xl md:text-[28px] lg:text-[32px] leading-[120%] text-black mb-4"
            >
              About Learning Tech with Us at SAIL Innovation Lab
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-['Sora'] font-semibold text-base md:text-lg leading-6 text-[#3A3A3A] mb-8"
            >
              Got questions about joining our tech programs? We've got answers!
              Here are some frequently asked questions to help you get started:
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
