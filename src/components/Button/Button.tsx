import React from "react"
import Icon, { IconType } from "../Icon/Icon"

export interface ButtonProps {
    label: string,
    variant?: "primary" | "secondary",
    color?: "blue" | "red" | "gray" | "green",
    icon?: IconType,
    disabled?: boolean,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const color = props.color ? props.color : "blue";

    console.log(color)

    const basicStyle = "select-none transition-all px-4 py-2 shadow-md hover:shadow-lg text-gray-100 rounded-md flex flex-row items-center gap-2"
    const primaryStyle = `${basicStyle} border-2 border-rec-600 hover:border-blue-800 bg-blue-600 hover:bg-blue-800`;
    const secondaryStyle = `${basicStyle} border-2 border-red-600 text-blue-600 hover:bg-blue-600 hover:text-gray-100`;

    function style() {
        let styleString = props.variant === "secondary" ? secondaryStyle : primaryStyle ;
        //if (props.disabled) styleString += " bg-gray-400 border-gray-400 text-gray-100"
        return styleString;
    }

    return (<button className={style()}>{props.icon && <Icon icon={props.icon}/>}{props.label}</button>)
};

export default Button;