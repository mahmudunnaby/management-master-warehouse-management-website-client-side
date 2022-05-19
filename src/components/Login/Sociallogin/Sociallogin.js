import React from 'react';
import google from '../../../photos/google.png'
import styles from './SocialLogin.css'

const Sociallogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mb-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>

            <div>
                <button className='btn btn-light w-75'>
                    <img className='w-50 p-3 img-reseze' src={google} alt="" />
                    Google Sign In</button>
            </div>
        </div>
    );
};

export default Sociallogin;