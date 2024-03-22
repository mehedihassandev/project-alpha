import { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/expericence",
      name: "Expericence",
      icon: <FaRegChartBar />
    },
    {
      path: "/project",
      name: "Project",
      icon: <FaCommentAlt />
    }
  ]
  return (
    <div className="container">
      <div style={{ width: isOpen ? "600px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "450px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;