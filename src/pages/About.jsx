import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import data from "../../data.json";

export const About = () => {
  const theme = resolveConfig(tailwindConfig);
  const { skills } = data;

  return (
    <div className="max-w-screen-xl h-full grid items-center justify-between px-14 py-10">
      <div className="pt-10">
        <h1 className="text-3xl font-semibold text-white font-saira pb-5">
          <span className="text-secondary">01.</span> About Me
        </h1>
        <div className="text-textColor font-syne pb-4">
          <motion.p className="pb-4 text-lg text-textColor font-syne">
            Hello there! My name is
            <span className="text-secondary"> Md. Mehedi Hassan</span>, and I have a deep passion for coding. My journey into web development began in 2019 when I took on the challenge of building a theme for Themeforest. My hard work paid off when my theme was accepted into their marketplace. Since then, I&apos;ve developed numerous themes for various businesses within the local economy, utilizing my skills in HTML, CSS, and JavaScript. This experience laid a solid foundation for my deep dive into JavaScript.
          </motion.p>

          <motion.p className="pb-4 text-lg font-syne text-textColor">
            Time travel to the present, where I am employed by a startup company
            as a <span className="text-secondary">React Developer</span>. I make
            numerous contributions here, such as creating the
            <span className="text-secondary"> POS</span>,
            <span className="text-secondary"> PCM</span>, and
            <span className="text-secondary"> E-Bill</span> system. These days,
            creating inclusive and accessible digital experiences and goods for
            a wide range of customers is my primary emphasis.
          </motion.p>

          <motion.p className="text-lg font-syne text-textColor pb-4">
            I am <span className="text-secondary">committed</span>, to lifelong<span className="text-secondary"> learning</span> and actively immerse myself in the <span className="text-secondary">rapidly evolving field of technology</span>, eagerly picking up new
            techniques and frameworks. Accepting challenges, <span className="text-secondary">I enjoy learning
              new skills and developing</span> my repertoire since I have an unquenchable
            curiosity to become proficient with cutting-edge tools and remain on
            the <span className="text-secondary">cutting edge of web development innovation</span>.
          </motion.p>

          <motion.p className="pb-4 text-lg font-syne text-textColor">
            In addition to my work in React, I have also ventured into <span className="text-secondary">mobile development</span> with <span className="text-secondary">React Native</span>. I played a key role in developing a <span className="text-secondary">MyCare app</span>, which enables users to perform essential tasks such as<span className="text-secondary"> top-up</span>,<span className="text-secondary"> bill payments</span> and <span className="text-secondary"> more</span>. This experience allowed me to extend my expertise beyond web development, embracing the unique challenges and opportunities presented by<span className="text-secondary"> mobile app development</span>.
          </motion.p>

          <motion.p className="pb-4 text-lg font-syne text-textColor">
            Beyond my technical skills, I bring a strong sense of adaptability and a proactive mindset, allowing me to excel in various roles and industries. Whether working independently or as part of a team, I am always eager to push the boundaries of what&apos;s possible in the world of web and mobile development.
          </motion.p>
        </div>
        <motion.h2 className="text-textColor font-syne py-4 text-xl">
          I&apos;ve recently been working with the following technologies:
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-col-3 pb-16 lg:pb-2">
          {skills.map((skill, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex items-center gap-2 text-secondary">
                <IoMdArrowDropright className="text-lg" />
                <motion.h2
                  whileHover={{
                    color: theme.theme.colors.secondary,
                    transform: "translateX(10px)",
                    cursor: "pointer",
                  }}
                  className="font-syne text-lg text-textColor"
                >
                  {skill.name}
                </motion.h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
