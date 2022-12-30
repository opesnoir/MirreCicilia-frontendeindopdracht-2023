import React, {useRef} from 'react';
import styles from './Register.module.css';
import RegisterInput from '../../components/RegisterInput/RegisterInput';
import {useForm} from 'react-hook-form';
import registerImgSheep from '../../assets/register-sheep-pexels-trinity-kubassek-288621.jpg'


const Register = (props) => {
    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
    const password = useRef({}); // it returns an object called current
    password.current = watch("password", " ");

    const onSubmit = (data) =>{
        console.log(data);
        reset();
    };

    return (
        <>
            <div>
                <div>
                    <div>
            <h1>Registreren</h1></div>
                    <div>
            <p>Wil je favorieten verzen opslaan? Registreer dan je persoonlijke Jubilee account</p></div>
                    <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        pattern:{
                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message:"Een geldig emailadres is vereist"
                        }
                    }}
                    required
                />
                <RegisterInput
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Wachtwoord:"
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required: "Wachtwoord is vereist",
                        pattern:{
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message:"Het wachtwoord bevat minimaal 8 tekens, waarvan 1 hoofdletter, 1 getal en 1 leesteken"
                        },
                        minLength: {
                            value: 8,
                            message: "Voer minimaal 8 tekens in"
                        }
                    }}
                    required
                />
                <RegisterInput
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    placeholder="Bevestig wachtwoord:"
                    errors={errors}
                    register={register}
                    validationSchema={{
                        required:{
                          value: true,
                        },
                        validate: value =>
                            value === password.current,
                            message: "De wachtwoorden komen niet overeen",
                    }}
                    required
                />
                <div>
                    <button type="submit" className={styles.registerButton}>Registreren</button>
                </div>
            </form>
                    </div>
                </div>
            </div>
            <div>
                <img className={styles.registerImg} src={registerImgSheep} alt="Afbeelding van een Schaap" />
            </div>
        </>
    );
};

export default Register;