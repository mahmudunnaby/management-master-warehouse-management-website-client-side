import React from 'react';
import { Spinner } from 'react-bootstrap';
import styles from './Loading.css'

const Loading = () => {
    return (
        <div className=' loading-space d-flex justify-content-center align-items-center'>
            <Spinner animation="grow" variant="secondary" />
        </div>
    );
};

export default Loading;