import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
      path: "/expericence",
      name: "Expericence",
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
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, #0f172a42 10%, #0f172a10 20%, #0f172a17 30%)`,
          pointerEvents: 'none',
        }}
      ></div>
      <div className="bg-[#0F172A] text-white h-screen w-[600px] pl-10 flex flex-col justify-around">
        <div>
          <Header />
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center text-[#fff] hover:text-[#94A3B8] py-[10px] px-[15px] gap-[15px] transition-all duration-500 "
            >
              <div>{item.icon}</div>
              <div className="text-[1rem]">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <Footer />
      </div>
      <main className="w-full p-[20px] bg-[#0F172A]">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
