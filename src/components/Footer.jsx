import { motion } from "framer-motion";
import data from "../../data.json";
import { iconHash } from "../../utils/icon/icons";

export const Footer = () => {
  const { socialLinks } = data;

  return (
    <div>
      <div className="pb-5">
        <h3 className="text-[#94A3B8] text-[16px] pt-4 font-syne">
          Based in:
        </h3>
        <p className="text-secondary text-[20px] font-semibold font-saira">
          Dhaka, Bangladesh
        </p>
      </div>
      <div className="flex gap-6 text-textColor">
        {socialLinks.map((link, index) => (
          <motion.h3
            key={index}
            onClick={() => window.open(link.href, "_blank")}
            className="text-2xl text-secondary cursor-pointer"
            whileHover={{
              scale: 1.2,
              transform: "translateY(-10px)",
            }}
          >
            {iconHash[link.icon]}
          </motion.h3>
        ))}
      </div>

      {/* <div className="pt-2">
        <h3 className="text-sm font-saira">
          © 2024 Md. Mehedi Hassan. All Rights Reserved
        </h3>
      </div> */}
    </div>
  );
};

export default Footer;
