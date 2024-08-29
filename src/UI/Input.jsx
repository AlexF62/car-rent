import React from 'react';

const Input = ({
    value,
    type,
    onChange,
    label,
    required = false,
    className,
}) => {
    return (
        <label>
            {label}
            <input
                className={className}
                value={value}
                type={type}
                onChange={onChange}
                required={required}
            />
        </label>
    );
};

export default Input;
