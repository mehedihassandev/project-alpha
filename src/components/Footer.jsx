import { motion } from "framer-motion";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
import data from '../../data.json'

export const Footer = () => {
  const theme = resolveConfig(tailwindConfig);

  const { socialLinks } = data;

  return (
    <div>
      <div className="pb-10">
        <h3 className="text-[#94A3B8] text-[16px] pt-4 font-syne">
          Based in:
        </h3>
        <p className="text-secondary text-[20px] font-semibold font-poppins"> Dhaka, Bangladesh</p>
      </div>
      <div className="flex gap-5 text-textColor pb-5">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            whileHover={{
              color: theme.theme.colors.secondary,
              scale: 1.2,
              transform: "translateY(-10px)",
            }}
          >
            <img src={link.imgSrc} alt={link.icon} className="w-9 h-9" />
          </motion.a>
        ))}
      </div>

      <div className="pt-2">
        <h3 className="text-sm font-saira">© 2024 Md. Mehedi Hassan. All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
