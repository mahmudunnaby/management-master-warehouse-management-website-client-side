import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../photos/google.png'
import styles from './SocialLogin.css'


const Sociallogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement


    if (user) {
        navigate('/home')
    }

    if (error) {
        errorElement = <div><p className='text-danger mt-3'>Error: {error.message}</p></div>

    }

    if (loading) {
        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mb-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>


            <div>
                <button onClick={() => { signInWithGoogle() }} className='btn btn-light w-75'>
                    <img className='w-50 p-3 img-reseze' src={google} alt="" />
                    Google Sign In</button>
            </div>
            {errorElement}
        </div>
    );
};

export default Sociallogin;