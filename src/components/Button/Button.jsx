import React from 'react';

const Button = ({children,type, className}) => {
    return (
        <div>
            <button type={type} className={className}>
                {children}
            </button>
        </div>
    );
};

export default Button;