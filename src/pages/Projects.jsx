import { motion } from "framer-motion";
import { Fragment } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const Projects = () => {
  const theme = resolveConfig(tailwindConfig);

  const portfolioItems = [
    {
      id: 1,
      title: "T-Shirt Customization",
      description:
        "This is the t-shirt coustomization project. Useing this site you can design your t-shir as you want. You can change the color, logo, structure and many more things. This is a very interesting project. I hope you will enjoy it.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Frame Motion",
        "Three JS",
        "Valtio",
        "Maath",
      ],
      imgSrc: "../../src/assets/t_shirt.gif",
    },
    {
      id: 2,
      title: "Portfolio Project",
      description:
        "This is the portfolio project. When i build this app i was a beginner in Frame Motion, Three JS and Maath. I learn a lot of things from this project. I hope you will enjoy it. I will be happy if you give me some feedback about this project. I will try to improve it. Thank you.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Frame Motion",
        "Three JS",
        "Maath",
      ],
      imgSrc: "../../src/assets/portfolio.gif",
    },
    {
      id: 3,
      title: "Movie Site",
      description:
        "This is the movie site project. Useing this site you can see the latest movies. You can see the movie details, rating, review and many more things. There i use free API to get movie list. I hope you will enjoy it.",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Material UI",
        "Free API",
      ],
      imgSrc: "../../src/assets/movie.gif",
    },
    {
      id: 4,
      title: "CRUD Operation",
      description:
        "This is the CRUD operation project. Useing this site you can create, read, update and delete the data. There i use free API to get data and update the data. Also use JSON server to store the data. I hope you will enjoy it.",
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "Material UI",
        "Free API",
        "JSON Server",
      ],
      imgSrc: "../../src/assets/crud.gif",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll p-20">
      <div className="pb-5">
        <h1 className="text-2xl font-semibold text-white font-mono pb-5">
          <span className="text-secendary">03.</span> Some Things I’ve Built
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
                    boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secendary}`,
                  }}
                />
              </div>
            )}
            <div>
              <motion.h2 className="text-secendary text-xl font-sans pb-3">
                {item.title}
              </motion.h2>
              <motion.p
                className="text-tsecendary text-[.9rem] leading-6"
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
                    boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secendary}`,
                    transform: "translateY(-10px) translateX(-10px)",
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
