import React from 'react';
import styles from "../RegisterInput/RegisterInput.module.css";

const LoginInput = ({name, children, role, event, label, required, type, placeholder, validationSchema, errors, register }) => {
    return (
        <>
            <div className={styles.inlogForminput}>
                <label htmlFor={name}>
                    {label}
                    {required}
                </label>
                <input className={styles.inlogFormInputTekst}
                       id={name}
                       name={name}
                       type={type}
                       role={role}
                       onChange={event}
                       placeholder={placeholder}
                       {...register(name, validationSchema)}
                />
                {errors && errors[name]?.type === "required" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message}</span>
                )}
                {errors && errors[name]?.type === "pattern" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message}</span>
                )}
                {errors && errors[name]?.type === "minLength" && (
                    <span className={styles.errorsTekst}>{errors[name]?.message}</span>
                )}
            </div>
        </>
    );
};

export default LoginInput;