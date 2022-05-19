import React from 'react';
import styles from './Banner.css'

const Banner = () => {
    return (

        <div >
            <div className='d-sm-flex flex-sm-column  d-md-flex flex-md-row justify-content-center align-items-center m-2'>
                <img className=' img-resize-logo' src='https://i.ibb.co/C0b9Cc8/Management-Master.jpg' alt="" />
                <h1 className='fw-bold text-primary text-md-start text-sm-center'>Management <br /> Master</h1>
            </div>
            <div className='d-sm-flex flex-sm-column mt-5  d-md-flex flex-md-row justify-content-center align-items-center'>

                <img className=' img-fluid px-5 img-resize' src="https://i.ibb.co/nz0HbXf/undraw-logistics-x4dc.png" alt="" />
                <div className='px-5 '>
                    <h1 className='banner-text text-center '>B<span className=' banner-text-3  '>OO</span>K STORE </h1>
                    <p className='banner-text-2 shadow-lg p-3 mb-5 bg-body rounded'>Inventory Management</p>
                </div>
            </div>

        </div>



    );
};

export default Banner;