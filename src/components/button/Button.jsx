import React from 'react';

const Button = ({ text, className, onClick, href }) => {
    return (
        <button onClick={onClick} className={className} href={href}>
            {text}
        </button>
    );
};

export default Button;
