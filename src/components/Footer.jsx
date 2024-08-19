import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

export const Footer = () => {
  const theme = resolveConfig(tailwindConfig);
  const socialLinks = [
    {
      href: "https://github.com/mehedihassandev",
      target: "_blank",
      rel: "noreferrer",
      className: "text-2xl",
      Icon: FaGithub,
    },
    {
      href: "https://www.linkedin.com/in/mdmehedihassandev/",
      target: "_blank",
      rel: "noreferrer",
      className: "text-2xl",
      Icon: FaLinkedinIn,
    },
    {
      href: "#",
      target: "_blank",
      rel: "noreferrer",
      className: "text-2xl",
      Icon: FaInstagram,
    },
    {
      href: "#",
      target: "_blank",
      rel: "noreferrer",
      className: "text-2xl",
      Icon: FaXTwitter,
    },
  ];
  return (
    <div className="flex gap-5 text-textColor">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          target={link.target}
          rel={link.rel}
          className={link.className}
          whileHover={{
            color: theme.theme.colors.secondary,
            scale: 1.2,
            transform: "translateY(-10px)",
          }}
        >
          <link.Icon />
        </motion.a>
      ))}
    </div>
  );
};

export default Footer;
