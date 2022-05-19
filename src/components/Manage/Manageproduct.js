import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Manageproduct = () => {
    const { manageproduct } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='mt-5 '>Update Inventory: {manageproduct}</h1>
            <img className='w-50' src='https://cdn.dribbble.com/users/1677926/screenshots/6803180/inventory.gif' alt="" />


            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Status </a>
                        <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Delivery Update </a>
                        <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Restock Product</a>

                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">

                        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>


                        <div className='tab-pane fade container' id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">


                            <div class="card text-center">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-body">
                                    <img className='mb-3' src="" alt="" />
                                    <h5 class="card-title">Current Quentity:</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <button className='btn btn-primary my-3 '> Delivered </button>
                                    <ProgressBar animated now={20} />
                                </div>

                            </div>

                        </div>


                        <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">

                            <div class="card text-center">
                                <div class="card-header">
                                    Featured
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Special title treatment</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

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