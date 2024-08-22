import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const Home = () => {
  const theme = resolveConfig(tailwindConfig);

  return (
    <div className="w-full h-full items-center px-14 overflow-hidden grid grid-cols-3 gap-16 align-middle">
      <div className="col-span-6 xl:col-span-2 py-24 mt-[12.5rem] lg:mt-32 xl:mt-0">
        <h1 className="text-xl lg:text-3xl xl:text-[48px] text-white leading-7 lg:leading-[45px] xl:leading-[75px] font-saira">
          Maximize Your Business <span className="text-secondary font-bold underline">Potential</span> <br /> with Custom Web Development <br /> <span className="text-secondary font-bold underline">Solutions!</span>
        </h1>

        <p className="text-md lg:text-lg xl:text-xl leading-6 xl:leading-8 mt-8 text-textColor font-syne">
          I am <span className="text-secondary">React developer</span> with
          experience who specializes in creating responsive, dynamic websites.
          adept in <span className="text-secondary">JavaScript, </span>
          <span className="text-secondary">Typescript, </span>
          <span className="text-secondary">Material UI, </span>
          <span className="text-secondary">Tawilwind CSS, </span>
          <span className="text-secondary"> Redux, </span> and <span className="text-secondary">React Native. </span> Devoted to maximizing
          maintainability of <span className="text-secondary">code</span> and user
          experience.
        </p>

        <div className="flex justify-between gap-7 items-center mt-5 lg:mt-16 xl:mt-48">
          <h2 className="text-lg lg:text-3xl xl:text-5xl text-secondary font-poppins leading-3 xl:leading-9 font-semibold">2 + <br /> <span className="text-xs lg:text-lg text-white font-normal">Years of Experience</span></h2>
          <h2 className="text-lg lg:text-3xl xl:text-5xl text-secondary font-poppins leading-3 xl:leading-9 font-semibold">150+ <br /> <span className="text-xs lg:text-lg text-white font-normal">Projects completed</span></h2>
          <h2 className="text-lg lg:text-3xl xl:text-5xl text-secondary font-poppins leading-3 xl:leading-9 font-semibold">100% <br /> <span className="text-xs lg:text-lg text-white font-normal">Client Satisfactions</span></h2>
        </div>
      </div>


      <div className="hidden xl:block">
        <motion.img
          src="../assets/me.jpg"
          alt="about"
          className="w-[450px] h-auto"
          style={{ filter: "grayscale(100%)" }}
          animate={{ filter: "grayscale(100%)" }}
          whileHover={{
            filter: "contrast(130%)",
            transform: "translateY(-10px) translateX(-10px)",
            boxShadow: `10px 10px 0px 0px ${theme.theme.colors.secondary}`,
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://i.ibb.co/dKxMcmd/me.jpg";
          }}
        />
      </div>
    </div>
  );
};

export default Home;
