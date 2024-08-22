import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { menus } from "../navigator/menu";
import { motion } from "framer-motion";
import { iconHash } from "../../utils/icon/icons";

export const Menu = ({ setShowSidebar }) => {
    const location = useLocation();

    return (
        <div>
            {menus.map((item, index) => (
                <NavLink
                    to={item.path}
                    key={index}
                    className={`flex items-center hover:text-secondary text-[#94A3B8] py-[10px] px-[10px] gap-[15px] transition-all duration-500`}
                    onClick={() => setShowSidebar(false)}
                >
                    <motion.div>{iconHash[item.icon]}</motion.div>
                    <motion.div
                        className="text-[1rem] font-poppins"
                        whileHover={{
                            scale: location.pathname !== item.path ? 1.2 : 1,
                            transform:
                                location.pathname !== item.path
                                    ? "translateX(10px)"
                                    : "translateX(0px)",
                            transition: { duration: 0.2 },
                            color: "text-secondary",
                        }}
                    >
                        {item.name}
                    </motion.div>
                </NavLink>
            ))}
        </div>
    );
};

export default Menu;
