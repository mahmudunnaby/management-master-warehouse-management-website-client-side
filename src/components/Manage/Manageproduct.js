import React, { useEffect, useRef, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Manageproduct = () => {
    const { manageproduct } = useParams()
    const [products, setProducts] = useState({})
    const refRestockQuentity = useRef('')

    useEffect(() => {
        const url = `http://localhost:5000/products/${manageproduct}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    // console.log(products);

    const handleUpdateQuantity = (event) => {
        event.preventDefault()
        const RestockQuentity = refRestockQuentity.current.value
        // console.log(RestockQuantity);
        const newQuentity = parseInt(products.quentity) + parseInt(RestockQuentity)

        const updateQuentity = { quentity: newQuentity }

        console.log(updateQuentity, typeof (updateQuentity));


        fetch(`http://localhost:5000/products/${manageproduct}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateQuentity),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast("Stock Updated")
                    setProducts(updateQuentity)
                }

            })
    }

    const handleDelivered = () => {

        const remaining = parseInt(products.quentity) - 1

        const updateDelivered = { quentity: remaining }

        fetch(`http://localhost:5000/delivered/${manageproduct}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateDelivered),
        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast("delivered")
                    setProducts(updateDelivered)
                }

            })
        console.log(remaining);

    }





    // console.log(products);
    return (
        <div className='container'>
            <h1 className='mt-5 '>Update Inventory : {products.name}</h1>

            <img className='w-25' src={products.picture} alt="" />
            {/* <img className='w-50' src='https://cdn.dribbble.com/users/1677926/screenshots/6803180/inventory.gif' alt="" /> */}


            <div class="row mt-5">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Status </a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Delivery Update </a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Restock Product</a>

                    </div>
                </div>

                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">

                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                            <div class="card-body bg-primary text-white d-flex ">
                                <div>
                                    <img className='w-50' src={products.picture} alt="" />
                                </div>
                                <div>
                                    <h2>Current Status</h2>
                                    <h5 class="card-title">Name: {products.name}</h5>
                                    <p class="card-text">Supplier: {products.supplier}</p>
                                    <p class="card-text">Quentity: {products.quentity}</p>
                                    <p class="card-text">Price: {products.price}</p>
                                </div>


                            </div>
                        </div>


                        <div className='tab-pane fade container' id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">


                            <div class="card text-center">
                                <div class="card-header">
                                    {products.name}
                                </div>
                                <div class="card-body">
                                    <img className='mb-3 w-25' src={products.picture} alt="" />
                                    <h5 class="card-title">Current Quentity: {products.quentity}</h5>
                                    <p class="card-text">Get the product delivered by pressing delivered</p>
                                    <button onClick={handleDelivered} className='btn btn-primary my-3 '> Delivered </button>
                                    <ProgressBar animated now={products.quentity} />
                                </div>

                            </div>

                        </div>


                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">

                            <div class="card text-center">
                                <div class="card-header">
                                    Restock
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Current quentity is {products.quentity}</h5>
                                    <p class="card-text">Restock Now!</p>
                                    <ProgressBar animated now={products.quentity} />
                                    <img className='my-3 w-25' src={products.picture} alt="" />

                                    <form onSubmit={handleUpdateQuantity} >
                                        <input ref={refRestockQuentity} type="text" placeholder='Quantity' />
                                        <input className='btn btn-primary mx-3 my-2' type="submit" value="Restock" />
                                    </form>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>










        </div>
    );
};

export default Manageproduct;