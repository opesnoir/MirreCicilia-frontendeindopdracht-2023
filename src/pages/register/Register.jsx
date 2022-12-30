import React, {useRef} from 'react';
import styles from './Register.module.css';
import RegisterInput from '../../components/RegisterInput/RegisterInput';
import {useForm} from 'react-hook-form';
import registerImgSheep from '../../assets/register-sheep-pexels-trinity-kubassek-288621.jpg';
import {useState} from "react";
import {FiEyeOff} from 'react-icons/fi';
import {FiEye} from "react-icons/fi";
// add noValidate to form, to remove default error messages

const Register = () => {
    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
    const password = useRef({}); // it returns an object called current
    password.current = watch("password", " ");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false)

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <>
            <div className={styles.registerOuterContainer}>
                <div className={styles.registerInnerContainer}>
                    <div>
                        <h1 className={styles.registerTitel}>Registreren</h1></div>
                    <div>
                        <p className={styles.registerTekst}>Wil je favorieten verzen opslaan? Registreer dan je
                            persoonlijke Jubilee account</p></div>
                    <div  className={styles.registerformOuterContainer}>
                    <div className={styles.registerformInnerContainer}>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <RegisterInput
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Naam:"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "Naam is vereist"
                                }}
                                required
                            />
                            <RegisterInput
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email:"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "Email is vereist",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Een geldig emailadres is vereist"
                                    }
                                }}
                                required
                            />
                            <RegisterInput
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Wachtwoord:"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required:{
                                        value: true,
                                        message:"Wachtwoord is vereist"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                        message: "Het wachtwoord bevat minimaal 8 tekens, waarvan 1 hoofdletter, 1 getal en 1 leesteken"
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "Voer minimaal 8 tekens in"
                                    }
                                }}
                                required
                            />
                            <label>
                                <input type="checkbox"
                                checked={showPassword}
                                       onChange={()=> setShowPassword(!showPassword)}
                                /> Wachtwoord tonen
                            </label>
                            <RegisterInput
                                id="confirmpassword"
                                name="confirmpassword"
                                type={showConfirmedPassword ? "text" : "password"}
                                placeholder="Bevestig wachtwoord:"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: {
                                        value: true,
                                    },
                                    validate: value =>
                                        value === password.current,
                                    message: "De wachtwoorden komen niet overeen",
                                }}
                                required
                            />
                            <label>
                                <input type="checkbox"
                                       checked={showConfirmedPassword}
                                       onChange={()=> setShowConfirmedPassword(!showConfirmedPassword)}
                                /> Bevestigde wachtwoord tonen
                            </label>
                            <div className={styles.registerButtonContainer}>
                                <button type="submit" className={styles.registerButton}>Registreren</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <img className={styles.registerImg} src={registerImgSheep} alt="Afbeelding van een Schaap"/>
            </div>
        </>
    );
};

export default Register;
