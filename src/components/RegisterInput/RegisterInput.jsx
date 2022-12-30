import React from 'react';

const RegisterInput = ({name, label, required, type, placeholder, validationSchema, styles, errors, register }) => {
    return (
        <>
            <div className="form-control-input">
            <label htmlFor={name}>
                {label}
                {required && "*"}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                {...register(name, validationSchema)}
            />
                {errors && errors[name]?.type === "required" && (
                    <span className="error">{errors[name]?.message}</span>
                )}
                {errors && errors[name]?.type === "pattern" && (
                    <span className="error">{errors[name]?.message}</span>
                )}
                {errors && errors[name]?.type === "minLength" && (
                    <span className="error">{errors[name]?.message}</span>
                )}
            </div>
        </>
    );
};

export default RegisterInput;