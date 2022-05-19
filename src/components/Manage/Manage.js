import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Manage.css'

const Manage = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigate = useNavigate()
    const navigateToManageProduct = (id) => {
        navigate(`/manage/${id}`)


    }

    const navigateToAddNew = () => {
        navigate('/additem')
    }

    return (
        <div className='container table-responsive-sm space-inventory mt-5 '>
            <h1 className='my-5 product-title fw-bold text-primary'>INVENTORY DASHBOARD</h1>
            <table class="table table-Light">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Supplier</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Remove Product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            return (<tr>
                                <th scope="row"><img className='product-img' src={product.picture} alt="" /></th>
                                <td>{product.name}</td>
                                <td>{product.supplier}</td>
                                <td>{product.quentity}</td>
                                <td>{product.price}</td>
                                <td><button onClick={() => navigateToManageProduct(product._id)} className='btn btn-primary'> Manage</button></td>
                                <td><button className='btn btn-danger'> Delete</button></td>
                            </tr>)

                        })
                    }

                </tbody>
            </table>


            <h5 onClick={navigateToAddNew} className='btn btn-primary' role='button' > Add New Item </h5>

        </div>

    );
};

export default Manage;