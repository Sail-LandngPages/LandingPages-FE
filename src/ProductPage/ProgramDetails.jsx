import React from 'react'
import {  Clock, } from "lucide-react"
import Calendar from '../assets/images/Calenda.png'
import money from '../assets/images/money.png'
import location from '../assets/images/location.png'
import duration from '../assets/images/duration.png'
import { motion } from "framer-motion";

const ProgramDetails = () => {
  return (
    <div>
  <div className="max-w-4xl mx-auto px-4 py-8">
    <motion.h2 
      className="text-3xl font-bold text-center mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      Program details
    </motion.h2>

    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Start Date Card */}
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-gray-100 p-3 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <img src={Calendar} alt="Calendar icon" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-1">Start date</h3>
        <p className="text-sm text-gray-600">Will be communicated</p>
      </motion.div>

      {/* Duration Card */}
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.div 
          className="bg-gray-100 p-3 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <img src={duration} alt="Duration icon" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-1">Duration</h3>
        <p className="text-sm text-gray-600">2 months</p>
      </motion.div>

      {/* Location Card */}
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div 
          className="bg-gray-100 p-3 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <img src={location} alt="Location icon" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-1">Location</h3>
        <p className="text-sm text-gray-600">Online</p>
      </motion.div>

      {/* Cost Card */}
      <motion.div 
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.div 
          className="bg-gray-100 p-3 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <img src={money} alt="Money icon" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-1">Cost</h3>
        <p className="text-sm text-gray-600">Fully funded (limited scholarships)</p>
      </motion.div>
    </motion.div>
  </div>
</div>
  )
}

export default ProgramDetails