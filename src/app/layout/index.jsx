import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { MdMenu, MdClose } from "react-icons/md";
import { CursorEffect } from "../components/CursorEffect";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorTransition, setCursorTransition] = useState("");
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let mouseTimeout;

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseOver = (e) => {
      const tags = [
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "P",
        "A",
        "BUTTON",
        "SPAN",
        "SVG",
        "TIME",
        "LI",
        "LABEL",
      ];
      if (tags.includes(e.target.tagName)) {
        setIsHovering(true);
        setCursorTransition(
          "transform 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out",
        );
      }
    };

    const handleMouseOut = (e) => {
      const tags = [
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "P",
        "A",
        "BUTTON",
        "SPAN",
        "SVG",
        "TIME",
        "LI",
        "LABEL",
      ];
      if (tags.includes(e.target.tagName)) {
        setIsHovering(false);
        setCursorTransition(
          "transform 0.4s ease-in-out, width 0.4s ease-in-out, height 0.4s ease-in-out",
        );
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
        className="absolute top-4 right-4 z-50 text-white md:hidden"
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
        className={`bg-primary h-screen w-screen md:w-[450px] xl:w-[550px] pl-10 flex flex-col justify-around transition-all duration-300 fixed md:static ${showSidebar ? "left-0 z-40 pr-10" : "-left-full"
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
        <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
      </main>

      {/* Custom Cursor */}
      <CursorEffect
        cursorPosition={cursorPosition}
        width="10px"
        height="10px"
        backgroundColor="#fff"
        transition={cursorTransition}
        transform={`translate(-50%, -50%) ${isHovering ? "scale(9)" : "scale(1)"}`}
        opacity={1}
        zIndex={9999}
      />

      {/* Larger Ring for Movement */}
      {isMoving && !isHovering && (
        <CursorEffect
          cursorPosition={cursorPosition}
          width="50px"
          height="50px"
          backgroundColor="rgba(255, 255, 255, 0.1)"
          transform="translate(-50%, -50%)"
          transition="transform 0.3s ease-out, opacity 0.3s ease-out"
          opacity={isMoving && !isHovering ? 1 : 0}
          zIndex={9998}
        />
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
