import React from "react"
import Icon, { IconType } from "../Icon/Icon"

export interface ButtonProps {
    label: string,
    variant?: "primary" | "secondary",
    color?: "${color}" | "red" | "gray" | "green",
    icon?: IconType,
    disabled?: boolean,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const color = props.color ? props.color : "blue";

    const basicStyle = "select-none transition-all px-4 py-2 shadow-md text-gray-100 rounded-md flex flex-row items-center gap-2"
    const primaryStyle = `${basicStyle} hover:shadow-lg border-2 border-${color}-600 hover:border-${color}-800 bg-${color}-600 hover:bg-${color}-800`;
    const secondaryStyle = `${basicStyle} hover:shadow-lg border-2 border-${color}-600 text-${color}-600 hover:bg-${color}-600 hover:text-gray-100`;

    const disabledPrimaryStyle = `${basicStyle} border-2 border-gray-light-600 bg-gray-600 text-gray-light-100`;
    const disabledSecondaryStyle = `${basicStyle} border-2 border-gray-light-600 bg-gray-light-600 text-gray-light-100`;

    function style() {
        if (props.disabled) return ( props.variant === "secondary" ? disabledSecondaryStyle : disabledPrimaryStyle )
        return ( props.variant === "secondary" ? secondaryStyle : primaryStyle ) ;
    }

    return (<button className={style()} onClick={() => {if (!props.disabled) props.onClick()}}>{props.icon && <Icon icon={props.icon}/>}{props.label}</button>)
};

export default Button;