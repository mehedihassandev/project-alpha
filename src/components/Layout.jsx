import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa"; // For the toggle button
import { NavLink, useLocation } from "react-router-dom";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  const theme = resolveConfig(tailwindConfig);
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <MdOutlineHorizontalRule />,
    },
    {
      path: "/about",
      name: "About",
      icon: <MdOutlineHorizontalRule />,
    },
    {
      path: "/experience",
      name: "Education & Experience",
      icon: <MdOutlineHorizontalRule />,
    },
    {
      path: "/project",
      name: "Project",
      icon: <MdOutlineHorizontalRule />,
    },
  ];
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

      <motion.div
        className={`bg-primary text-white h-screen w-[600px] px-10 flex flex-col justify-around
         lg:block lg:flex z-50 transition-all duration-500 ${
           isSidebarOpen ? "w-screen h-screen block" : "hidden"
         }`}
      >
        <div>
          <Header />
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center hover:text-[#fff] text-[#94A3B8] py-[10px] px-[10px] gap-[15px] transition-all duration-500 "
              onClick={() => setIsSidebarOpen(false)}
            >
              <motion.div
                animate={{
                  color:
                    location.pathname === item.path
                      ? theme.theme.colors.secendary
                      : "#94A3B8",
                  fontSize: location.pathname === item.path ? "2rem" : "1.5rem",
                }}
              >
                {item.icon}
              </motion.div>
              <motion.div
                className="text-[1rem]"
                animate={{
                  color:
                    location.pathname === item.path
                      ? theme.theme.colors.secendary
                      : "#94A3B8",
                  transform:
                    location.pathname === item.path
                      ? "translateX(5px)"
                      : "translateX(0px)",
                  scale: location.pathname === item.path ? 1.2 : 1,
                }}
                whileHover={{
                  color: "#fff",
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
      </motion.div>

      <motion.button
        className="lg:hidden fixed top-4 left-4 z-50 text-white bg-primary p-3 rounded-full"
        onClick={toggleSidebar}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isSidebarOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.div>
      </motion.button>

      {!isSidebarOpen ? (
        <main className="w-full h-screen bg-primary overflow-auto ">
          {children}
        </main>
      ) : null}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
