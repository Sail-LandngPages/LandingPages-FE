import React from 'react'
import { useState } from "react";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";

const Faq = () => {
    const [email, setEmail] = useState("");
  return (
    <div>
         <div className="flex flex-col md:flex-row justify-between gap-12 p-8 md:p-16 max-w-7xl mx-auto">
      {/* Left Section - Newsletter Signup */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">Don't miss any information from us!</h2>
        <p className="mb-4">
        Sign up to our regular newsletter for news, insights, new product releases & more.
        </p>
        <form className="flex gap-2 mb-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="px-4 py-2 border rounded-md w-full md:w-auto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#133C8A] text-white px-6 py-2 rounded-md hover:bg-gray-800"
          >
            Subscribe
          </button>
        </form>
        <p className="text-sm text-gray-500">
          By signing up, you agree to our{' '}
          <a href="#" className="underline">
            Privacy Policy
          </a>{' '}
          and consent to receive updates from our company.
        </p>
      </div>

      {/* Right Section - FAQ */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">
        About Learning Tech with Us at SAIL Innovation Lab
        </h2>
        <p className="mb-6 text-gray-700">
          Got questions about joining our tech programs? We've got answers! Here are some frequently asked questions to help you get started.
        </p>
        <Accordion type="multiple" className="space-y-2 list-none">
          <AccordionItem value="faq1">
            <div className=" p-4 border-b">
              <summary className="font-medium ">How do I register for a course?</summary>
              <p className="text-sm mt-2 text-gray-700">Visit our website, browse available courses, and follow the registration instructions.</p>
            </div>
          </AccordionItem>
          <AccordionItem value="faq2">
            <div className=" p-4 border-b">
              <summary className="font-medium ">Are the instructors experienced?</summary>
              <p className="text-sm mt-2 text-gray-700">Yes, our instructors are industry professionals with real-world experience.</p>
            </div>
          </AccordionItem>
          <AccordionItem value="faq3">
            <div className=" p-4 border-b">
              <summary className="font-medium ">Will these Courses guarantee me a tech job?</summary>
              <p className="text-sm mt-2 text-gray-700">While we provide strong career support, job placement isn't guaranteed.</p>
            </div>
          </AccordionItem>
          <AccordionItem value="faq4">
            <div className=" p-4  border-b">
              <summary className="font-medium ">Will I receive a certificate after completing a course?</summary>
              <p className="text-sm mt-2 text-gray-700">Yes, you'll receive a certificate upon successfully completing the course.</p>
            </div>
          </AccordionItem>
          <AccordionItem value="faq5">
            <div className="border-b p-4 ">
              <summary className="font-medium ">Can these classes help me build real projects or a portfolio?</summary>
              <p className="text-sm mt-2 text-gray-700">Absolutely! Our classes include project-based learning to help you build a portfolio.</p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    </div>
  )
}

export default Faq