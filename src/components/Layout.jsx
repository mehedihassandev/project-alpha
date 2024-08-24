import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { MdMenu, MdClose } from "react-icons/md";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Menu } from "./Menu";

export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const tags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'BUTTON', 'SPAN', 'SVG'];
      if (tags.includes(e.target.tagName)) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const tags = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'BUTTON', 'SPAN', 'SVG'];
      if (tags.includes(e.target.tagName)) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div className="relative flex bg-primary text-white">
      <motion.button
        className="absolute top-4 right-4 z-50 text-white lg:hidden"
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
          className="fixed w-[200px] h-[125px] lg:w-[350px] lg:h-[300px] top-1/2 left-1/3 lg:left-1/2 transform -translate-x-1/1 -translate-y-1/2 z-10 opacity-100"
          style={{ zIndex: 1 }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          {children}
        </div>
      </main>

      {/* Custom Cursor */}
      <div
        className={`cursor-dot ${isHovering ? "hover-enhanced" : ""}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          position: "fixed",
          width: "25px",
          height: "25px",
          backgroundColor: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "transform 0.2s ease-in-out",
          transform: isHovering ? "scale(3.5)" : "scale(1)",
          mixBlendMode: "difference",
        }}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
