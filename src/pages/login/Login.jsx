import React, {useState} from 'react';
import styles from './Login.module.css'
import LoginInput from "../../components/LoginInput/LoginInput";
/*import RegisterInput from "../../components/RegisterInput/RegisterInput";*/
import {useForm} from "react-hook-form";
import Button from "../../components/Button/Button";
import {Link} from 'react-router-dom';
import loginImgSheep from '../../assets/login-sheep-pexels-david-selbert-6467929-2.jpg';

const Login = () => {
    const {register, watch, formState: {errors}} = useForm();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        <div className={styles.loginOuterContainer}>
            <div className={styles.loginInnerContainer}>
                <div>
                    <p className={styles.loginNaarInlog}>Heb je nog geen account? Klik dan <Link className={styles.inlogLink} to="/register"> hier </Link>  om je te registreren.</p>
                </div>
                <div>
                    <h1 className={styles.loginTitel}>Inloggen</h1>
                </div>
                <div>
                    <div>
                        <form>
                            <LoginInput
                                id="email"
                                name="email"
                                type="email"
                                role="user"
                                onChange=" "
                                placeholder="Email:"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: "Email is vereist",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Geldig emailadres is vereist"
                                    }
                                }}
                                required
                            />
                            <LoginInput
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                role="user"
                                onChange=" "
                                placeholder="Wachtwoord:"
                                errors={errors}
                                register={register}
                                validationSchema={{
                                    required: {
                                        value: true,
                                        message: "Wachtwoord is vereist"
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
                            <div className={styles.loginButtonContainer}>
                                <Button type="submit" className={styles.loginButton}>Inloggen</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            <div>
                <img className={styles.loginImg} src={loginImgSheep} alt="Afbeelding van een Schaap"/>
            </div>
</>
    );
};

export default Login;