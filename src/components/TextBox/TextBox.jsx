import React from 'react';

const TextBox = ({className, src, alt, title, text, children}) => {
    return (
        <>
            <section>
                <img
                    className={className}
                    src={src}
                    alt={alt}
                />
                <h4>{title}</h4>
                <p>{text}</p>
                {children}
            </section>
        </>
    );
};

export default TextBox;