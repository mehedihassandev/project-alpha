import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
export const Experience = () => {
  const theme = resolveConfig(tailwindConfig);
  const educationData = [
    {
      timePeriod: "Jan 2020 - Prasent",
      institution: "Bangladesh University, Dhaka",
      qualification: "Bachelor of Computer Science (BSC)",
    },
    {
      timePeriod: "Jan 2015 - Dec 2019",
      institution: "Sirajganj Institute Of Technology, Sirajganj",
      qualification: "Computer Science (Diploma)",
    },
    {
      timePeriod: "Jan 2011 - Dec 2015",
      institution: "Sabuj Kannan School And College, Sirajganj",
      qualification: "Secendary School Certificate (SSC)",
    },
    {
      timePeriod: "Jan 2010 - Dec 2011",
      institution: "Govt Sara Marwari Model School And College, Ishwardi",
      qualification: "6th Class",
    },
    {
      timePeriod: "Jan 2006 - Dec 2010",
      institution: "Vatpiyari Primary School, Sirajganj",
      qualification: "Primary School Certificate (PSC)",
    },
  ];

  const experiencesData = [
    {
      id: 1,
      date: "June 2023 - Present",
      title: "Hubar Tech Ltd.",
      position: "Junior Frontend Developer",
      description: [
        "Hubar Tech is a software development company that specializes in Telecoms Software. It is a sister company of UK-based Exos Systems Ltd.",
        "Create and maintain essential components inside the Redux and React Typescript frontend framework, which are essential to the functionality of the overall project. Working collaboratively with developers, designers, and product managers, we can ensure that user-centric design principles and diversity are prioritized in our development efforts by advocating for and implementing best practices in web accessibility.",
      ],
      highlights: [
        {
          title: "Point of Sale (POS) System:",
          detail:
            "With cutting-edge technology, our Point of Sale (POS) System redefines transactions. By seamlessly incorporating state-of-the-art technologies, it improves customer experiences, expedites processes, and boosts productivity, completely changing the retail environment for both customers and enterprises.",
        },
        {
          title: "Process Control Management (PCM) System:",
          detail:
            "The PCM system streamlines procedures, reduces errors, and increases production for companies in a variety of industries, improving operational efficiency.",
        },
        {
          title: "Electronic Bill (E-Bill) System:",
          detail:
            "The E-Bill System simplifies billing processes, enabling electronic invoicing, payments, and record-keeping, fostering efficiency and convenience for businesses and customers.",
        },
      ],
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Material UI",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      date: "June 2019 - Jan 2020",
      title: "Creative IT Institute",
      position: "Junior Frontend Developer",
      description: [
        "Creative IT is an institution where empowering the community with an excellent standard of learning is what we desire. We endeavour for the continuous improvement of our leaders who will work to construct a better future. We will continue to share our knowledge for contributing to the success of individuals and to serve society in the best interest.",
      ],
      highlights: [],
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
    },
  ];

  return (
    <div className="w-full h-screen grid grid-cols items-center pl-16 overflow-y-scroll p-20">
      <div className="pb-10">
        <h1 className="text-2xl font-semibold text-white font-mono pb-5">
          <span className="text-secendary">02.1.</span> Experience
        </h1>

        <div className="w-full pt-5">
          <div className="max-w-screen-2xl px-11">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                  {experiencesData.map((exp) => (
                    <div
                      key={exp.id}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white hover:before:bg-secendary"
                    >
                      <time className="text-[.65rem] font-mono uppercase text-white">
                        {exp.date}
                      </time>
                      <h3 className="text-[1rem] text-white">
                        <span className="font-semibold">{exp.title}</span> |{" "}
                        {exp.position}
                      </h3>
                      {exp.description.map((desc, index) => (
                        <motion.p
                          key={index}
                          className="mt-2 text-tsecendary text-[.85rem]"
                          whileHover={{
                            color: "#fff",
                            scale: 1.03,
                          }}
                        >
                          {desc}
                        </motion.p>
                      ))}
                      {exp.highlights.map((highlight, index) => (
                        <motion.li
                          key={index}
                          className="pt-5 text-tsecendary text-[.85rem]"
                          whileHover={{
                            color: "#fff",
                            scale: 1.03,
                          }}
                        >
                          <span className="text-secendary">
                            {highlight.title}
                          </span>{" "}
                          {highlight.detail}
                        </motion.li>
                      ))}
                      <div className="flex items-center gap-3 pt-5">
                        {exp.skills.map((skill, index) => (
                          <motion.div
                            key={index}
                            className="w-28 h-10 bg-buttonColor rounded-full items-center justify-center flex cursor-pointer"
                            whileHover={{
                              scale: 1.05,
                              boxShadow: `0px 0px 10px ${theme.theme.colors.buttonColor}`,
                            }}
                          >
                            {skill}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <h1 className="text-2xl font-semibold text-white font-mono pb-5">
          <span className="text-secendary">02.2.</span> Education
        </h1>

        <div className="w-full pt-5">
          <div className="max-w-screen-2xl px-11">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-white hover:before:bg-secendary"
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
