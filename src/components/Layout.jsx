import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { menus } from "../navigator/menu";
import { iconHash } from "../../utils/icon/icons";

export const Layout = ({ children }) => {
  const theme = resolveConfig(tailwindConfig);
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className="flex">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, #0f172a22 10%, #0f172a08 20%, #0f172a0b 30%)`,
          pointerEvents: "none",
        }}
      ></div>

      <motion.button
        className="absolute top-6 left-6 z-50 text-white lg:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
        whileHover={{ scale: 1.2, color: "#FFD700" }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: showSidebar ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {showSidebar ? <MdClose size={28} /> : <MdMenu size={28} />}
        </motion.div>
      </motion.button>

      <div
        className={`bg-primary text-white h-screen w-screen lg:w-[600px] xl:w-[600px] pl-10 flex flex-col justify-around transition-all duration-300 fixed lg:static ${showSidebar ? "left-0 z-40 pr-10" : "-left-full"
          } lg:left-0`}
      >
        <div>
          <Header />
          {menus.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center hover:text-secondary text-[#94A3B8] py-[10px] px-[10px] gap-[15px] transition-all duration-500"
              onClick={() => setShowSidebar(false)}
            >
              <motion.div
                animate={{
                  color:
                    location.pathname === item.path
                      ? theme.theme.colors.secondary
                      : "#94A3B8",
                  fontSize: location.pathname === item.path ? "2rem" : "1.5rem",
                }}
              >
                {iconHash[item.icon]}
              </motion.div>
              <motion.div
                className="text-[1rem]"
                animate={{
                  color:
                    location.pathname === item.path
                      ? theme.theme.colors.secondary
                      : "#94A3B8",
                  transform:
                    location.pathname === item.path
                      ? "translateX(5px)"
                      : "translateX(0px)",
                  scale: location.pathname === item.path ? 1.2 : 1,
                }}
                whileHover={{
                  color: theme.theme.colors.secondary,
                  scale: location.pathname !== item.path && 1.2,
                  transform:
                    location.pathname !== item.path && "translateX(10px)",
                  transition: { duration: 0.2 },
                }}
              >
                {item.name}
              </motion.div>
            </NavLink>
          ))}
        </div>
        <Footer />
      </div>
      <main className="w-full h-screen bg-primary overflow-auto">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
