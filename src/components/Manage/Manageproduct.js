import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Manageproduct = () => {
    const { manageproduct } = useParams()
    const [products, setProducts] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/products/${manageproduct}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);

    // console.log(products);
    return (
        <div className='container'>
            <h1 className='mt-5 '>Update Inventory : {products.name}</h1>

            <img className='w-50' src={products.picture} alt="" />
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
                                    Featured
                                </div>
                                <div class="card-body">
                                    <img className='mb-3' src="" alt="" />
                                    <h5 class="card-title">Current Quentity: {products.quentity}</h5>
                                    <p class="card-text">Get the product delivered by pressing delivered</p>
                                    <button className='btn btn-primary my-3 '> Delivered </button>
                                    <ProgressBar animated now={20} />
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

                                    <input type="text" placeholder='Quntity' />
                                    <input className='btn btn-primary mx-3 my-2' type="submit" value="Restock" />
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