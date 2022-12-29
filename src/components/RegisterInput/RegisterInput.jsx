import React from 'react';

const RegisterInput = ({name, label, required, type, placeholder, validationSchema, errors, ...register}) => {
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
                {...register(name,
                    validationSchema)}
            />
            {errors && errors.name.type === "required" && (<p className="error" >{errors.name.message}</p>)}
            {errors && errors.name.type === "minLength" && (<p className="error">{errors.name.message}</p>)}
            </div>
        </>
    );
};

export default RegisterInput;