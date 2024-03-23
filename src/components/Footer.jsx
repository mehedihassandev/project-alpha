import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const Footer = () => {
  const theme = resolveConfig(tailwindConfig);
  return (
    <div className="flex gap-5 text-[#94A3B8]">
      <motion.a
        href="https://github.com/mehedihassandev"
        target="_blank"
        rel="noreferrer"
        className="text-2xl"
        whileHover={{
          color: theme.theme.colors.secendary,
          scale: 1.2,
          transform: "translateY(-10px)",
        }}
      >
        <FaGithub />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/mdmehedihassandev/"
        target="_blank"
        rel="noreferrer"
        className="text-2xl"
        whileHover={{
          color: theme.theme.colors.secendary,
          scale: 1.2,
          transform: "translateY(-10px)",
        }}
      >
        <FaLinkedinIn />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-2xl"
        whileHover={{
          color: theme.theme.colors.secendary,
          scale: 1.2,
          transform: "translateY(-10px)",
        }}
      >
        <FaInstagram />
      </motion.a>
      <motion.a
        href="#"
        target="_blank"
        rel="noreferrer"
        className="text-2xl"
        whileHover={{
          color: theme.theme.colors.secendary,
          scale: 1.2,
          transform: "translateY(-10px)",
        }}
      >
        <FaXTwitter />
      </motion.a>
    </div>
  );
};

export default Footer;
