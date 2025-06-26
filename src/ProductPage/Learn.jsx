import React from 'react'
import { useRef, useState, useEffect } from "react"
import frame from "../assets/images/frame.png"
import frame2 from "../assets/images/frame2.png"
import frame3 from "../assets/images/framer3.png"
import frame4 from "../assets/images/frame4.png"
import frame5 from "../assets/images/frame5.png"
import frame6 from "../assets/images/frame6.png"
import { motion } from "framer-motion";

const Learn = () => {
    const contentRef = useRef(null)
    const scrollbarRef = useRef(null)
    const thumbRef = useRef(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startY, setStartY] = useState(0)
    const [startScrollTop, setStartScrollTop] = useState(0)

    // Calculate the thumb height based on content
    useEffect(() => {
        const calculateThumbHeight = () => {
            if (!contentRef.current || !scrollbarRef.current || !thumbRef.current) return

            const contentHeight = contentRef.current.scrollHeight
            const visibleHeight = contentRef.current.clientHeight
            const scrollbarHeight = scrollbarRef.current.clientHeight

            // Calculate thumb height proportionally
            const thumbHeight = Math.max(
                (visibleHeight / contentHeight) * scrollbarHeight,
                40, // Minimum thumb height
            )

            thumbRef.current.style.height = `${thumbHeight}px`
        }

        calculateThumbHeight()
        window.addEventListener("resize", calculateThumbHeight)

        return () => {
            window.removeEventListener("resize", calculateThumbHeight)
        }
    }, [])

    // Update thumb position when scrolling
    const handleScroll = () => {
        if (!contentRef.current || !scrollbarRef.current || !thumbRef.current) return

        const contentHeight = contentRef.current.scrollHeight
        const visibleHeight = contentRef.current.clientHeight
        const scrollbarHeight = scrollbarRef.current.clientHeight
        const scrollTop = contentRef.current.scrollTop

        const thumbTop = (scrollTop / (contentHeight - visibleHeight)) * (scrollbarHeight - thumbRef.current.clientHeight)

        thumbRef.current.style.transform = `translateY(${thumbTop}px)`
    }

    // Handle mouse down on thumb
    const handleThumbMouseDown = (e) => {
        setIsDragging(true)
        setStartY(e.clientY)
        setStartScrollTop(contentRef.current?.scrollTop || 0)
        document.body.style.userSelect = "none" // Prevent text selection while dragging
    }

    // Handle mouse move for dragging
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging || !contentRef.current || !scrollbarRef.current || !thumbRef.current) return

            const deltaY = e.clientY - startY
            const contentHeight = contentRef.current.scrollHeight
            const visibleHeight = contentRef.current.clientHeight
            const scrollbarHeight = scrollbarRef.current.clientHeight
            const thumbHeight = thumbRef.current.clientHeight

            // Calculate the scroll ratio
            const scrollRatio = (contentHeight - visibleHeight) / (scrollbarHeight - thumbHeight)

            // Update scroll position
            contentRef.current.scrollTop = startScrollTop + deltaY * scrollRatio
        }

        const handleMouseUp = () => {
            setIsDragging(false)
            document.body.style.userSelect = ""
        }

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove)
            window.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isDragging, startY, startScrollTop])

    // Scroll down function
    const scrollDown = () => {
        if (!contentRef.current) return
        contentRef.current.scrollBy({
            top: 300,
            behavior: "smooth",
        })
    };

  return (
  
    <div className="bg-white">
    {/* Header Section with animation */}
    <motion.section 
      className="py-12 px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
        What You Will Learn?
      </h2>
      <p className="text-sm md:text-base text-gray-500 max-w-xl">
        Practical skills and key concepts essential for success, equipping you to confidently apply your knowledge in real-world situations.
      </p>
    </motion.section>
  
    {/* Scrollable Content */}
    <div className="flex flex-col md:flex-row h-[80vh] bg-white mx-4 md:mx-15">
      {/* Custom scrollbar - hidden on mobile, shown on md and larger */}
      <div 
        ref={scrollbarRef} 
        className="hidden md:block w-4 h-full bg-gray-200 relative flex-shrink-0 rounded-full"
      >
        <motion.div
          ref={thumbRef}
          className="w-3 bg-[#133C8A] rounded-full absolute left-0.5 cursor-pointer hover:bg-blue-700 transition-colors"
          onMouseDown={handleThumbMouseDown}
          whileHover={{ scale: 1.05 }}
        />
      </div>
  
      {/* Content area */}
      <div 
        ref={contentRef} 
        className="flex-1 overflow-y-auto p-4 md:p-6 -mt-8"
        onScroll={handleScroll}
      >
        {/* Section 1 */}
        <motion.section 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-white rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="md:flex-1 order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Fundamentals of UI/UX Design
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Learn the core principles of UI/UX design to create simple, smooth, and accessible user experiences. We'll cover visual hierarchy, typography, colors, clarity in interaction elements, design systems, and key timeless layouts for all screen sizes.
            </p>
          </motion.div>
          <motion.div 
            className="md:flex-1 order-2 md:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={frame} alt="UI/UX Fundamentals" className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain" />
          </motion.div>
        </motion.section>
  
        {/* Section 2 */}
        <motion.section 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-white rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="md:flex-1 order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              User Research & Usability Testing
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Discover user needs, behaviors, and pain points through research and feedback. Learn to validate ideas, test design solutions, and make informed decisions with surveys, interviews, and usability tests to create accessible and user-friendly products.
            </p>
          </motion.div>
          <motion.div 
            className="md:flex-1 order-2 md:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={frame2} alt="User Research" className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain" />
          </motion.div>
        </motion.section>
  
        {/* Section 3 */}
        <motion.section 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-white rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="md:flex-1 order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Wireframing & Prototyping (Figma, Adobe XD, e.t.c)
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Learn to plan and visualize ideas with wireframes, then bring them to life with interactive prototypes. Map out user flows, structure layouts, and test functionality early to refine designs, gather feedback, and ensure a smooth user experience before development.
            </p>
          </motion.div>
          <motion.div 
            className="md:flex-1 order-2 md:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={frame3} alt="Wireframing" className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain" />
          </motion.div>
        </motion.section>
  
        {/* Section 4 */}
        <motion.section 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-white rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="md:flex-1 order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Designing for Web & Mobile Applications
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Design user-friendly and responsive interfaces for web and mobile applications, with layouts, navigation, and interactions that adapt to all screen sizes. Focus on usability and create designs that deliver a consistent and engaging experience on every device.
            </p>
          </motion.div>
          <motion.div 
            className="md:flex-1 order-2 md:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={frame4} alt="Web & Mobile Design" className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain" />
          </motion.div>
        </motion.section>
  
        {/* Section 5 */}
        <motion.section 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-white rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="md:flex-1 order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Design Thinking & Problem-Solving
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Design thinking helps you understand user needs, define clear problems, and create practical solutions. Through research, brainstorming, and testing, you'll develop better ways to solve real challenges. This approach ensures your designs are useful, user-friendly, and effective in meeting business and user goals.
            </p>
          </motion.div>
          <motion.div 
            className="md:flex-1 order-2 md:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={frame5} alt="Design Thinking" className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain" />
          </motion.div>
        </motion.section>
  
        {/* Section 6 */}
        <motion.section 
          className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 md:mb-16 p-4 md:p-6 bg-white rounded-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="md:flex-1 order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">
              Portfolio Development & Career Growth Strategies
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              How to build a strong design portfolio that highlights your creativity, skills, and problem-solving abilities. Get guidance on how to present your work, tell your design story, and stand out to employers and clients. You will also get tips on job applications, interviews, and grow your career in the design industry.
            </p>
          </motion.div>
          <motion.div 
            className="md:flex-1 order-2 md:order-2 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={frame6} alt="Portfolio Development" className="w-full h-auto max-h-[300px] md:max-h-[400px] object-contain" />
          </motion.div>
        </motion.section>
      </div>
    </div>
  </div>
  )
}

export default Learn