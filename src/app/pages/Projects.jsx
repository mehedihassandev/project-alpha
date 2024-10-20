import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import { IoMdArrowDropright } from "react-icons/io";
import tailwindConfig from "../../../tailwind.config";
import { projects } from "../constant/projects";

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  const theme = resolveConfig(tailwindConfig);

  return (
    <div className="flex flex-col w-full h-full overflow-hidden px-5 py-10 lg:px-14">
      <div className="pb-5">
        <h1 className="text-3xl font-semibold text-textColor font-saira pl-9 lg:pl-0 pb-5">
          <span className="text-secondary">03.</span> Some Things I’ve Built
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl gap-16 px-9 lg:px-0">
        {projects.map((item, index) => (
          <Fragment key={item.id}>
            {index % 2 === 0 && (
              <div>
                <motion.img
                  src={item.imgSrc}
                  alt="about"
                  className="w-full h-full lg:h-80 box"
                  style={{ filter: isLoading ? "blur(20px)" : "grayscale(50%)" }}
                  animate={{ filter: isLoading ? "blur(20px)" : "grayscale(50%)" }}
                  whileHover={{
                    filter: "contrast(130%)",
                    boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secondary}`,
                  }}
                  onError={(e) => {
                    (e.target.onerror = null),
                      (e.target.src = item.errorImgSrc);
                  }}
                  onLoad={() => {
                    setIsLoading(false)
                  }}
                />
              </div>
            )}
            <div>
              <h2 className="text-secondary text-xl font-saira font-semibold pb-3">
                {item.title}
              </h2>
              <p className="text-textColor text-lg leading-6 font-syne pb-3">
                {item.description}
              </p>
              <h3 className="mt-3 text-lg text-textColor font-saira font-medium">
                Using Technology
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-1 pt-3">
                {item.technologies.map((tech, techIndex) => (
                  <h2
                    key={techIndex}
                    className="text-md text-textColor items-center flex cursor-pointer font-saira font-semibold gap-1"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    {tech}
                  </h2>
                ))}
              </div>

              <div className="mt-5">
                <h3 className="text-textColor text-lg font-saira font-medium pb-1">
                  Links
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 pt-3">
                  {item.links.map((link, linkIndex) => (
                    <motion.button
                      key={linkIndex}
                      className={`w-24 h-8 text-sm text-primary bg-secondary rounded-full items-center justify-center flex cursor-pointer font-saira font-medium disabled:bg-gray-400`}
                      whileHover={
                        link.url
                          ? {
                            scale: 1.05,
                            boxShadow: `0px 0px 10px ${theme.theme.colors.buttonColor}`,
                          }
                          : {}
                      }
                      onClick={() => {
                        if (link.url) {
                          window.open(link.url, "_blank", "noreferrer");
                        }
                      }}
                      disabled={!link.url}
                    >
                      {link.title}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            {index % 2 !== 0 && (
              <div>
                <motion.img
                  src={item.imgSrc}
                  alt="about"
                  className={`w-full h-full lg:h-80 box ${isLoading ? 'blur-2xl opacity-30' : 'opacity-100'}`}
                  style={{ filter: isLoading ? "blur(20px)" : "grayscale(50%)" }}
                  animate={{ filter: isLoading ? "blur(20px)" : "grayscale(50%)" }}
                  whileHover={{
                    filter: "contrast(130%)",
                    boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secondary}`,
                    transform: "translateY(-10px) translateX(-10px)",
                  }}
                  onError={(e) => {
                    (e.target.onerror = null),
                      (e.target.src = item.errorImgSrc);
                  }}
                  onLoad={() => {
                    setIsLoading(false)
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
