import { motion } from "framer-motion";
import { Fragment } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import data from '../../data.json';

export const Projects = () => {
  const theme = resolveConfig(tailwindConfig);
  const { portfolioItems } = data;

  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll p-20">
      <div className="pb-5">
        <h1 className="text-2xl font-semibold text-white font-mono pb-5">
          <span className="text-secondary">03.</span> Some Things I’ve Built
        </h1>
      </div>

      <div className="grid grid-cols-2 max-w-screen-2xl gap-16">
        {portfolioItems.map((item, index) => (
          <Fragment key={item.id}>
            {index % 2 === 0 && (
              <div>
                <motion.img
                  src={item.imgSrc}
                  alt="about"
                  className="w-full h-auto"
                  style={{ filter: "grayscale(100%)" }}
                  animate={{ filter: "grayscale(100%)" }}
                  whileHover={{
                    filter: "contrast(130%)",
                    boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secondary}`,
                  }}
                  onError={(e) => {
                    (e.target.onerror = null),
                      (e.target.src = item.errorImgSrc);
                  }}
                />
              </div>
            )}
            <div>
              <motion.h2 className="text-secondary text-xl font-sans pb-3">
                {item.title}
              </motion.h2>
              <motion.p
                className="text-textColor text-[.9rem] leading-6"
                whileHover={{
                  color: "#fff",
                  scale: 1.05,
                }}
              >
                {item.description}
              </motion.p>
              <div className="flex items-center gap-3 pt-5">
                {item.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    className="w-24 h-8 text-[.75rem] bg-buttonColor rounded-full items-center justify-center flex cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0px 0px 10px ${theme.theme.colors.buttonColor}`,
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
            {index % 2 !== 0 && (
              <div>
                <motion.img
                  src={item.imgSrc}
                  alt="about"
                  className="w-full h-auto"
                  style={{ filter: "grayscale(100%)" }}
                  animate={{ filter: "grayscale(100%)" }}
                  whileHover={{
                    filter: "contrast(130%)",
                    boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secondary}`,
                    transform: "translateY(-10px) translateX(-10px)",
                  }}
                  onError={(e) => {
                    (e.target.onerror = null),
                      (e.target.src = item.errorImgSrc);
                  }}
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
