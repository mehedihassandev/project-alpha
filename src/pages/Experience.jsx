import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

import data from "../../data.json";

export const Experience = () => {
  const theme = resolveConfig(tailwindConfig);
  const { experiencesData } = data;

  return (
    <div className="w-full h-full grid grid-cols items-center pl-10 lg:pl-14 xl:pl-14 overflow-auto p-5 lg:p-10 xl:p-20">
      <div className="max-w-screen-2xl py-6 lg:py-10">
        <h1 className="text-3xl font-semibold text-white font-saira pb-5 pl-5 lg:pl-0">
          <span className="text-secondary">02.1.</span> Experience
        </h1>

        <div className="w-full pt-5">
          <div className="px-0 lg:px-5">
            <div className="grid gap-4 mx-0 lg:mx-4 grid-cols-1">
              <div className="relative px-0 lg:px-4 space-y-6">
                <div className="space-y-12 relative px-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                  {experiencesData.map((exp) => (
                    <div
                      key={exp.id}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white hover:before:bg-secondary"
                    >
                      <time className="text-xs font-syne uppercase text-white">
                        {exp.date}
                      </time>
                      <h3 className="text-xl text-white font-syne">
                        <span className="font-semibold">
                          {exp.title}
                        </span>
                        | {exp.position}
                      </h3>
                      {exp.description.map(
                        (desc, index) => (
                          <motion.p
                            key={index}
                            className="mt-2 text-textColor text-lg leading-6 font-syne"
                          >
                            {desc}
                          </motion.p>
                        )
                      )}
                      {exp.highlights.map(
                        (highlight, index) => (
                          <motion.li
                            key={index}
                            className="pt-5 text-textColor text-lg leading-6 font-syne"
                          >
                            <span className="text-secondary">
                              {highlight.title}
                            </span>
                            {highlight.detail}
                          </motion.li>
                        )
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 items-center gap-3 pt-5">
                        {exp.skills.map(
                          (skill, index) => (
                            <motion.div
                              key={index}
                              className="w-32 h-8 text-sm text-primary bg-secondary rounded-full items-center justify-center flex cursor-pointer font-saira font-medium"
                              whileHover={{
                                scale: 1.05,
                                boxShadow: `0px 0px 10px ${theme.theme.colors.buttonColor}`,
                              }}
                            >
                              {skill}
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="pt-5">
        <h1 className="text-2xl font-semibold text-white font-mono pb-5">
          <span className="text-secondary">02.2.</span> Education
        </h1>

        <div className="w-full pt-5">
          <div className="max-w-screen-2xl px-11">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white hover:before:bg-secondary"
                    >
                      <time className="text-[.65rem] font-mono uppercase text-white">
                        {item.timePeriod}
                      </time>
                      <h3 className="text-[1rem] text-white">
                        <span className="font-semibold">
                          {item.institution}
                        </span>{" "}
                        | {item.qualification}
                      </h3>
                      <p className="mt-2 text-textColor text-[.75rem]">
                        {item.result}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Experience;
