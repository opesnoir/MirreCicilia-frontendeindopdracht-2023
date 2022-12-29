import React, {useRef} from 'react';
import styles from './Register.module.css';
import RegisterInput from "../../components/RegisterInput/RegisterInput";
import {useForm} from "react-hook-form";


const Register = (props) => {
    const {register, handleSubmit, reset, watch, formState: {errors}} = useForm();
  /*  const password = useRef({});
    password.current = watch("password", " ");*/

    const onSubmit = (data) =>{
        console.log(data);
        reset();
    };

    return (
        <>
            <h1>Registreren</h1>
            <p>Wil je favorieten verzen opslaan? Registreer dan je persoonlijke Jubilee account</p>
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




                />



            </form>
        </>
    );
};

export default Register;