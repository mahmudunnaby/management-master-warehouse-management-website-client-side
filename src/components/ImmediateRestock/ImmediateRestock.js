import React, { useEffect, useRef, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import styles from './ImmediateRestock.css'

const ImmediateRestock = () => {
    const [quantity, setquantity] = useState([])
    const [products, setProducts] = useState([])
    const refQuantity = useRef('')


    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    // useEffect(() => {
    //     let s = 0;
    //     for (const product of products) {
    //         const restock = product.f
    //     }
    //     setSum(s)
    // }, [products])

    // const handleRestock = () => {
    //     const quantity = refQuantity.current.value
    //     setquantity(quantity)

    // }
    console.log(products);
    // console.log(quantity)

    return (
        <div>
            <div className='mt-5 '>
                <div className='container  space-inventory'>
                    <h1 className='my-5 product-title fw-bold text-primary'> IMMEDIATE RESTOCK</h1>
                    <img className='img-fluid restock-img ' src="https://i.ibb.co/7pvtmdq/book15.gif" alt="" />
                    <h5>Find Low Stock Products by quantity</h5>

                    <br />
                    {/* <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg">QUANTITY</InputGroup.Text>
                        <FormControl ref={refQuantity} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <input onClick={handleRestock} className='btn btn-primary mt-5' type="submit" /> */}




                </div>


            </div >
        </div >
    );
};

export default ImmediateRestock;