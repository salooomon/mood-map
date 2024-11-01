import React from "react";

interface IProps {
    className?: string;
    onClick?: () => void;
    textBtn?: string;
    type: "button" | "reset" | "submit";
}

const Button:React.FC<IProps> = (props) => {
    const {className, textBtn, type, onClick} = props;
    return <button className={`btn ${className}`} type={type} onClick={onClick}>{textBtn}</button>
}

export default Button;