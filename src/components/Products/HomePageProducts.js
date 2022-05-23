import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from './Product';
import styles from './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)))
    }, [])

    const navigateToManagePage = () => {
        navigate('/manage')
    }

    return (
        <div className='container space-inventory margine-product'>
            <h1 className='my-5 product-title fw-bold text-primary'>INVENTORY ITEMS</h1>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>

            </div>
            <link rel="stylesheet" href="#manage" />
            <p onClick={navigateToManagePage} role="button" className='text-primary'>Manage Inventories</p>

        </div>
    );
};

export default Products;