import React from "react";

interface IProps {
    className?: string;
    placeholder?: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = (props) => {
    const {className, placeholder, type, value, onChange} = props;
    return <input className={`btn ${className}`}
                  type={type}
                  value={value}
                  onChange={onChange}
                  placeholder={placeholder}
    />
}

export default Input;