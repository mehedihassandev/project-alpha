import { motion } from "framer-motion";
export const Header = () => {
  return (
    <div className="pb-6">
      <p className="text-sm text-secondary pb-1 ">Hi, my name is</p>
      <h1 className="text-4xl pb-2">Md. Mehedi Hassan</h1>
      <p className="text-lg">Junior Frontend Engineer</p>
      <motion.p
        whileHover={{
          color: "#fff",
          scale: 1.05,
        }}
        className="text-[0.9rem] leading-6 pt-4 text-[#94A3B8]"
      >
        I am <span className="text-secondary">React developer</span> with
        experience who specializes in creating responsive, dynamic websites.
        adept in <span className="text-secondary">JavaScript</span>,{" "}
        <span className="text-secondary">Typescript</span>,{" "}
        <span className="text-secondary">Material UI</span>,{" "}
        <span className="text-secondary">Tawilwind CSS</span>, and{" "}
        <span className="text-secondary">Redux</span>. Devoted to maximizing
        maintainability of <span className="text-secondary">code</span> and user
        experience.
      </motion.p>
    </div>
  );
};

export default Header;