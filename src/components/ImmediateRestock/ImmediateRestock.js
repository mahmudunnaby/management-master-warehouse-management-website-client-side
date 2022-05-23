import React, { useEffect, useRef, useState } from 'react';
import { FormControl, InputGroup, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './ImmediateRestock.css'

const ImmediateRestock = () => {

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const remainings = products.filter(product => product.quentity < 50)
    console.log(remainings);

    const navigateToManageProduct = (id) => {
        navigate(`/manage/${id}`)

    }
    const handleDelete = (id) => {

        const proceed = window.confirm('Are you sure you want to delete this item ?')
        if (proceed) {
            console.log(id, 'delete')
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }

    }


    // const handleRestock = () => {
    //     const quantity = refQuantity.current.value
    //     setquantity(quantity)

    // }
    console.log(products);
    // console.log(quantity)

    return (
        <div >
            <div className='mt-5 '>
                <div className='container  space-inventory'>
                    <h1 className='mt-5 product-title fw-bold text-primary'> IMMEDIATE RESTOCK  </h1>
                    <p className='text-danger'> QUANTITY LESS THAN 50 NOS</p>
                    <img className='img-fluid restock-img ' src="https://i.ibb.co/7pvtmdq/book15.gif" alt="" />
                    <h5 className='text-danger mt-3'>Immedeate Restock Required </h5>


                    <div className='container table-responsive-sm  mt-5 '>

                        <table class="table table-Light">
                            <thead>
                                <tr>
                                    <th scope="col">Picture</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">In A Glance</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Remove Product</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    remainings?.map(remaining => {

                                        return (<tr key={remaining._id}>

                                            <th scope="row"><img className='product-img' src={remaining.picture} alt="" /></th>
                                            <td>{remaining.name}</td>
                                            <td><ProgressBar animated now={remaining.quentity} /></td>
                                            <td className='text-danger fw-bold'>{remaining.quentity}</td>
                                            <td><button onClick={() => navigateToManageProduct(remaining._id)} className='btn btn-primary'> Manage</button></td>
                                            <td><button onClick={() => handleDelete(remaining._id)} className='btn btn-danger'> Delete</button></td>
                                        </tr>)

                                    })
                                }

                            </tbody>
                        </table>

                    </div>




                </div>


            </div >
        </div >
    );
};

export default ImmediateRestock;