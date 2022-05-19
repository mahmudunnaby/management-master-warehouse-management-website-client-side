import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, price, quentity, picture, supplier, name, discription } = product
    const navigate = useNavigate()
    const navigateToManageProduct = (id) => {
        navigate(`/manage/${id}`)

    }

    return (

        <div class="card m-3 col-12 col-md-6 shadow-lg p-3 mb-5 bg-body rounded " style={{ width: '540px' }}>
            <div class="row g-0 ">
                <div class="col-md-4">
                    <img src={picture} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">Supplyer: {supplier}</p>
                        <p class="card-text">Available: {quentity}</p>
                        <p class="card-text">{discription}</p>
                        <button onClick={() => navigateToManageProduct(_id)} className='btn btn-primary'> Manage</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;