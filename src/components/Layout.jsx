import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Layout = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(true);
  // const toggle = () => setIsOpen(!isOpen);
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

        {/* <div className="flex items-center py-[20px] px-[15px]">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="text-[30px]">Logo</h1>
          <div style={{ marginLeft: isOpen ? "450px" : "0px" }} className="flex text-[25px] ml-[50px]">
            <FaBars onClick={toggle} />
          </div>
        </div> */}
        <div>
          <div className="pb-4">
            <h1 className="text-4xl pb-2">Md Mehedi Hassan</h1>
            <p className="text-lg">Junior Front End Developer</p>
            <p className="text-sm pt-4 text-[#94A3B8]">React developer with experience who specializes in creating responsive, dynamic websites. adept in Material UI, Tawilwind CSS, JavaScript, Typescript, and Redux. devoted to maximizing maintainability of code and user experience.</p>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="flex items-center text-[#94A3B8] py-[10px] px-[15px] gap-[15px] transition-all duration-500 hover:text-[#fff]"
            >
              <div className="text=[20px]">{item.icon}</div>
              <div className="text-[20px]">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <div className="flex gap-5 ">
          <a href="https://github.com/mehedihassandev" target="_blank" rel="noreferrer" className="text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mdmehedihassandev/" target="_blank" rel="noreferrer" className="text-2xl">
            <FaLinkedinIn />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="text-2xl">
            <FaXTwitter />
          </a>

        </div>
      </div>
      <main className="w-full p-[20px] bg-[#0F172A]">{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
