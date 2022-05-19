import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Sociallogin from './Sociallogin/Sociallogin';

const Login = () => {

    const refEmail = useRef('')
    const refPassword = useRef('')
    const navigate = useNavigate()
    const handleLoginSubmit = (event) => {
        event.preventDefault();

        const email = refEmail.current.value;
        const password = refPassword.current.value;
        console.log(email, password);

    }

    const navigateToRegister = () => {

        navigate('/register')
    }

    const resetPassword = () => {

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
                        <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <Sociallogin></Sociallogin>
                    <p className='mt-3'>Don't have an account. <span className='text-primary' role="button" onClick={navigateToRegister}>Please register</span> </p>
                    <p className='mt-3'>Forgot password? <span className='text-primary' role="button" onClick={resetPassword}>Reset password</span>  </p>

                </div>

                <div className='mb-5'>
                    <img className='w-50' src="https://i.ibb.co/sgRqGmS/login.png" alt="" />
                </div>

            </div>



        </div >
    );
};

export default Login;