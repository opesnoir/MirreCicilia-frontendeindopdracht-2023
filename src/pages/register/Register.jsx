import React, {useRef} from 'react';
import styles from './Register.module.css';
import RegisterInput from '../../components/RegisterInput/RegisterInput';
import {useForm} from 'react-hook-form';
import registerImgSheep from '../../assets/register-sheep-pexels-trinity-kubassek-288621.jpg';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Button from "../../components/Button/Button";
// add noValidate to form, to remove default error messages

const Register = () => {
    const {register, watch, formState: {errors}} = useForm();
    const userPassword = useRef({}); // it returns an object called current
    userPassword.current = watch("password", " ");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

    // save the data with axios library, using a JSON file. Using the POST method of axios
    const [name, setName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');


    // call function when form is submitted
    function handleSubmit(event) {
        event.preventDefault();

        // send Post request
        axios.post('api/save', {
            name: name,
            email: email,
            password: password,
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }

    return (
        <>
            <div className={styles.registerOuterContainer}>
                <div className={styles.registerInnerContainer}>
                    <div>
                        <p className={styles.registerNaarInlog}>Heb je al een account? Klik dan <Link
                            className={styles.registerLink} to="/login"> hier </Link> om in te loggen.</p>
                    </div>
                    <div>
                        <h1 className={styles.registerTitel}>Registreren</h1></div>
                    <div>
                        <p className={styles.registerTekst}>Wil je favorieten verzen opslaan? Registreer dan je
                            persoonlijke Jubilee account</p></div>
                    <div className={styles.registerformOuterContainer}>
                        <div className={styles.registerformInnerContainer}>
                            <form onSubmit={handleSubmit}>
                                <RegisterInput
                                    id="name"
                                    name="name"
                                    type="text"
                                    role="user"
                                    onChange={event => setName(event.target.value)}
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
                                    role="user"
                                    onChange={event => setEmail(event.target.value)}
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
                                <RegisterInput
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    role="user"
                                    onChange={event => setPassword(event.target.value)}
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
                                <label>
                                    <input
                                        className={styles.registerCheckbox}
                                        type="checkbox"
                                        checked={showPassword}
                                        onChange={() => setShowPassword(!showPassword)}
                                    /> Wachtwoord tonen
                                </label>
                                <RegisterInput
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    type={showConfirmedPassword ? "text" : "password"}
                                    placeholder="Bevestig het wachtwoord:"
                                    errors={errors}
                                    register={register}
                                    validationSchema={{
                                        required: {
                                            value: true,
                                            message: "Bevestiging is vereist."
                                        },
                                        validate: value =>
                                            value === password.current,
                                    }}
                                    required
                                />
                                <label>
                                    <input
                                        className={styles.registerCheckbox}
                                        type="checkbox"
                                        checked={showConfirmedPassword}
                                        onChange={() => setShowConfirmedPassword(!showConfirmedPassword)}
                                    /> Bevestiging tonen
                                </label>
                                <div className={styles.registerButtonContainer}>
                                    <Button type="submit" className={styles.registerButton}>Registreren</Button>
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
