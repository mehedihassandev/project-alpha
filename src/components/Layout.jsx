import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const Layout = ({ children }) => {
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
    <div className="flex bg-primary text-white">
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
        className={`bg-primary h-screen w-screen lg:w-[550px] xl:w-[550px] pl-10 flex flex-col justify-around transition-all duration-300 fixed lg:static ${showSidebar ? "left-0 z-40 pr-10" : "-left-full"
          } lg:left-0 border-r-2 border-secondary rounded-2xl`}
      >
        <div>
          <Header />
          <Menu setShowSidebar={setShowSidebar} />
        </div>

        <Footer />
      </div>
      <main className="w-full h-screen bg-primary overflow-auto relative">
        <img
          src="https://i.ibb.co/R7nJpLv/HI.png"
          alt="Background"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/1 -translate-y-1/2 z-10 opacity-100"
          style={{ zIndex: 1 }}
        />
        <div style={{ position: 'relative', zIndex: 2 }}>
          {children}
        </div>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
