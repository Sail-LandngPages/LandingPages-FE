import IconProps from "../Reuseables/IconProps";
import { MdStarOutline } from "react-icons/md";
import Feature from "./Feature";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Engine = () => {
  return (
    <section className="w-full py-4 font-inter flex flex-col items-center justify-center my-8 gap-4 bg-[linear-gradient(to_right,_#00FF4100_0%,_#00FF4108_50%,_#00FF4100_100%)]">
      <IconProps
        icon={<MdStarOutline />}
        text="What is Generative AI?"
        className="text-indigo-600 bg-[linear-gradient(to_right,_#6366F11A_0%,_#22C55E1A_25%,_#06B6D41A_50%,_#A855F71A_75%,_#6366F11A_100%)] w-[247.33px] h-[41.33px] mt-8"
      />

      <div className="flex flex-col items-center text-center gap-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold max-w-[80%] leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span custom={0} variants={textVariant} className="block">
            The Engine Behind Tomorrow's
          </motion.span>
          <motion.span
            custom={1}
            variants={textVariant}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]"
          >
            Innovation
          </motion.span>
        </motion.h2>

        <motion.p
          className="max-w-[90%] text-[20px]"
          custom={2}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Generative AI refers to systems that can create text, images, music,
          code, and more — based on data and prompts. It's the engine behind
          tools like ChatGPT, DALL·E, and countless innovations transforming
          industries.
        </motion.p>

        <motion.p
          className="max-w-[90%] text-[18px]"
          custom={3}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Whether you're a developer, designer, creative, or strategist —
          generative AI is reshaping the way we think, build, and create.
        </motion.p>
      </div>

      <Feature />
    </section>
  );
};

export default Engine;
