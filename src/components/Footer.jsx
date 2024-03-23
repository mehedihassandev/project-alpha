import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
    return (
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
    )
}

export default Footer