import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sociallogin from './Sociallogin/Sociallogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';




const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);

    const refName = useRef('');
    const refEmail = useRef('');
    const refPassword = useRef('');
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)
    let errorText;

    const handleRegisterSubmit = async (event) => {
        event.preventDefault()

        const name = refName.current.value
        const email = refEmail.current.value
        const password = refPassword.current.value

        await createUserWithEmailAndPassword(email, password)
        await updateProfile(name)

        console.log(name, email, password);
    }

    if (user) {
        navigate('/home')
    }

    if (loading | updating) {

        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    if (error | errorProfile) {

        errorText = <p className='text-danger'>Error: {error.message}</p>

    }

    const navigateToLogin = () => {

        navigate('/login')
    }


    return (
        <div className=' shadow-lg p-3 mb-5 bg-body rounded mx-4'>
            <div className='d-md-flex flex-sm-row justify-content-center align-items-center' >
                <div>
                    <Form onSubmit={handleRegisterSubmit} className='p-3 '>
                        <Form.Group className="mb-3 d-flex flex-row justify-content-center align-items-center" controlId="formBasicEmail">
                            <Form.Label className='px-4 fw-bold'>Name:</Form.Label>
                            <Form.Control ref={refName} type="name" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex flex-row justify-content-center align-items-center" controlId="formBasicEmail">
                            <Form.Label className='px-4 fw-bold'>Email:</Form.Label>
                            <Form.Control ref={refEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex flex-row justify-content-center align-items-center" controlId="formBasicPassword">
                            <Form.Label className='px-3 fw-bold'>Password:</Form.Label>
                            <Form.Control ref={refPassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onClick={() => { setAgree(!agree) }} type="checkbox" label="Agree Terms & Conditions" />
                        </Form.Group>
                        <Button disabled={!agree} variant="primary" type="submit">

                            Register
                        </Button>
                    </Form>
                    <Sociallogin></Sociallogin>
                    <p className='mt-3'>Already Registered? <span className='text-primary' role="button" onClick={navigateToLogin}>Log In</span> </p>

                </div>

                <div>
                    <img className='w-50' src="https://i.ibb.co/sgRqGmS/login.png" alt="" />
                </div>
            </div>



        </div>
    );
};

export default Register;