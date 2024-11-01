import React from "react";

interface IProps {
    className?: string;
    children: React.ReactNode;
    onSubmit: () => void;
}

const Form: React.FC<IProps> = (props) => {
    const {children, className, onSubmit} = props;
    return (
        <form className={`form-${className}`} onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form;