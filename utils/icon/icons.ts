import { MdOutlineHorizontalRule } from "react-icons/md";
import { createElement } from "react";

export const iconHash = {
    dash: createElement(MdOutlineHorizontalRule),
};

export type IconHashType = keyof typeof iconHash;
