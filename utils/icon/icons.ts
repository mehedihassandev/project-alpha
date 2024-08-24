import { MdOutlineHorizontalRule } from "react-icons/md";
import { createElement } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const iconHash = {
    dash: createElement(MdOutlineHorizontalRule),
    location: createElement(FaLocationDot),
    phone: createElement(FaPhoneAlt),
    mail: createElement(IoMdMail),
};

export type IconHashType = keyof typeof iconHash;
