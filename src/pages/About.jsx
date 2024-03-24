import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const About = () => {
  const theme = resolveConfig(tailwindConfig);
  const skills = [
    { name: "JavaScript (ES6+)" },
    { name: "React" },
    { name: "Redux" },
    { name: "Typescript" },
    { name: "Material UI" },
    { name: "Tailwind CSS" },
  ];
  return (
    <div className="max-w-screen-2xl h-full grid grid-cols-2 items-center justify-between pl-16">
      <div>
        <h1 className="text-2xl font-semibold text-white font-mono pb-5">
          <span className="text-secendary">01.</span> About Me
        </h1>
        <div className="text-tsecendary font-serif pb-4">
          <motion.p
            className="pb-4"
            whileHover={{
              color: "#fff",
              scale: 1.05,
            }}
          >
            Hello there! My name is{" "}
            <span className="text-secendary">Md. Mehedi Hassan</span>, and I
            enjoy coding. I first became interested in web development in 2019
            when I attempted to build a temple for Themeforest. I succeeded in
            my endeavor, and my theme was eventually accepted on
            Themeforest&apos;s marketplace. Then, I developed numerous themes
            for numerous businesses while working in the local economy. I
            created those themes with HTML, CSS, and JavaScript. I then begin
            studying JavaScript in depth.
          </motion.p>

          <motion.p
            className="pb-4"
            whileHover={{
              color: "#fff",
              scale: 1.05,
            }}
          >
            Time travel to the present, where I am employed by a startup company
            as a <span className="text-secendary">React Developer</span>. I make
            numerous contributions here, such as creating the{" "}
            <span className="text-secendary">POS</span>,{" "}
            <span className="text-secendary">PCM</span>, and{" "}
            <span className="text-secendary">E-Bill</span> system. These days,
            creating inclusive and accessible digital experiences and goods for
            a wide range of customers is my primary emphasis.
          </motion.p>

          <motion.p
            whileHover={{
              color: "#fff",
              scale: 1.05,
            }}
          >
            I am committed to lifelong learning and actively immerse myself in
            the rapidly evolving field of technology, eagerly picking up new
            techniques and frameworks. Accepting challenges, I enjoy learning
            new skills and developing my repertoire since I have an unquenchable
            curiosity to become proficient with cutting-edge tools and remain on
            the cutting edge of web development innovation.
          </motion.p>
        </div>
        <motion.h2
          className="text-tsecendary font-serif py-4"
          whileHover={{
            color: "#fff",
          }}
        >
          I&apos;ve recently been working with the following technologies:
        </motion.h2>
        <div className="grid grid-cols-2">
          {skills.map((skill, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex items-center gap-2">
                <IoMdArrowDropright className="text-secendary text-sm" />
                <motion.h2
                  whileHover={{
                    color: "#fff",
                    transform: "translateX(10px)",
                  }}
                  className="text-tsecendary font-serif"
                >
                  {skill.name}
                </motion.h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pl-24">
        <motion.img
          src="../../src/assets/me.jpg"
          alt="about"
          className="w-96 h-auto"
          style={{ filter: "grayscale(100%)" }}
          animate={{ filter: "grayscale(100%)" }}
          whileHover={{
            filter: "contrast(130%)",
            transform: "translateY(-10px) translateX(-10px)",
            boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secendary}`,
          }}
        />
      </div>
    </div>
  );
};

export default About;
