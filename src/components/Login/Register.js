import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Sociallogin from './Sociallogin/Sociallogin';

const Register = () => {


    const refName = useRef('');
    const refEmail = useRef('');
    const refPassword = useRef('');
    const navigate = useNavigate()

    const handleRegisterSubmit = (event) => {
        event.preventDefault()

        const name = refName.current.value
        const email = refEmail.current.value
        const password = refPassword.current.value

        console.log(name, email, password);
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
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
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