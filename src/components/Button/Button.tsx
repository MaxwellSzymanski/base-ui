import React from "react"
import Icon, { IconType } from "../Icon/Icon"

export interface ButtonProps {
    label: string,
    variant?: "primary" | "secondary",
    color?: "blue" | "red" | "gray" | "green",
    icon?: IconType,
    solidIcon?: boolean,
    disabled?: boolean,
    size?: "sm" | "md" | "lg" | "xl",
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    // Define defaults
    const color = props.color ? props.color : "blue";
    const size = props.size ? props.size : "md";
    // Basic styles
    const basicStyle = `select-none transition-all px-${size === "sm" ? 2 : 4} py-${size === "sm" ? 1 : 2} shadow-md text-gray-100 rounded-md flex flex-row items-center gap-2 text-${size} hover:scale-125`;
    const primaryStyle = `${basicStyle} hover:shadow-lg border-2 border-${color}-600 hover:border-${color}-800 bg-${color}-600 hover:bg-${color}-800 hover:scale-75`;
    const secondaryStyle = `${basicStyle} hover:shadow-lg border-2 border-${color}-600 text-${color}-600 hover:bg-${color}-600 hover:text-gray-100 hover:scale-75`;
    // Disabled styles
    const disabledPrimaryStyle = `${basicStyle} border-2 border-gray-300 bg-gray-300 text-gray-100 cursor-default`;
    const disabledSecondaryStyle = `${basicStyle} border-2 border-gray-300 bg-white text-gray-300 cursor-default`;

    function style() {
        if (props.disabled) return ( props.variant === "secondary" ? disabledSecondaryStyle : disabledPrimaryStyle )
        return ( props.variant === "secondary" ? secondaryStyle : primaryStyle ) ;
    }

    return (<button className={style()} onClick={() => {if (!props.disabled) props.onClick()}}>
        {props.icon && <Icon icon={props.icon} size={size} solid={props.solidIcon ? props.solidIcon : false}/>}
        {props.label}
    </button>)
};

export default Button;