import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menus } from "../navigator/menu";
import { motion } from "framer-motion";
import { iconHash } from "../../utils/icon/icons";

export const Menu = ({ setShowSidebar }) => {
  const location = useLocation();

  return (
    <nav className="mt-10">
      {menus.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={({ isActive }) =>
            `flex items-center py-[10px] px-[10px] gap-[15px] transition-all duration-500 ${
              isActive ? "text-secondary font-semibold" : "text-textColor"
            }`
          }
          onClick={() => setShowSidebar(false)}
        >
          {({ isActive }) => (
            <div className="flex items-center gap-[15px]">
              {iconHash[item.icon]}
              <motion.span
                className="text-[1rem] font-saira"
                whileHover={{
                  scale: 1.05,
                  transform: "translateX(10px)",
                  transition: { duration: 0.2 },
                }}
                animate={
                  isActive
                    ? {
                        transform: "translateX(10px)",
                      }
                    : {}
                }
              >
                {item.name}
              </motion.span>
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
