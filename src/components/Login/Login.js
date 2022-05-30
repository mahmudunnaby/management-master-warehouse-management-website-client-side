import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sociallogin from './Sociallogin/Sociallogin';

const Login = () => {

    const refEmail = useRef('')
    const refPassword = useRef('')
    const navigate = useNavigate()
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    let errorText;

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const email = refEmail.current.value;
        const password = refPassword.current.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)

    }

    const navigateToRegister = () => {

        navigate('/register')
    }

    const resetPassword = async () => {
        const email = refEmail.current.value;
        await sendPasswordResetEmail(email)
        toast('Email sent')

    }
    if (user) {
        navigate(from, { replace: true })
    }
    if (error) {
        errorText = <p className='text-danger'>Error: {error.message}</p>
    }
    if (loading | sending) {
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    return (

        <div className=' shadow-lg  my-5 bg-body rounded py-5 mx-4'>

            <div className='d-md-flex flex-sm-row justify-content-center align-items-center' >
                <div>

                    <Form onSubmit={handleLoginSubmit} className='p-3  '>
                        <Form.Group className="mb-2 d-flex flex-md-row flex-sm-column justify-content-center align-items-center" controlId="formBasicEmail">
                            <Form.Label className='px-4 fw-bold'>Email:</Form.Label>
                            <Form.Control ref={refEmail} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-2 d-flex flex-md-row justify-content-center align-items-center" controlId="formBasicPassword">
                            <Form.Label className='px-3 fw-bold'>Password:</Form.Label>
                            <Form.Control ref={refPassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {errorText}
                    <Sociallogin></Sociallogin>
                    <p className='mt-3'>Don't have an account. <span className='text-primary' role="button" onClick={navigateToRegister}>Please register</span> </p>
                    <p className='mt-3'>Forgot password? <span className='text-primary' role="button" onClick={resetPassword}>Reset password</span>  </p>

                </div>

                <div className='mb-5'>
                    <img className='w-50' src="https://i.ibb.co/sgRqGmS/login.png" alt="" />
                </div>
                <ToastContainer />
            </div>



        </div >
    );
};

export default Login;