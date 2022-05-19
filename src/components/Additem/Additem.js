import React from 'react';
import style from './Additem.css'

const Additem = () => {
    return (
        <div className='space container '>
            <h1 className='text-white py-3 bg-primary rounded '>ADD NEW ITEM</h1>
            <div className='row add-container mt-5'>
                <div class="input-group mb-1 col">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-1 col">
                    <span class="input-group-text" id="inputGroup-sizing-default">Supplier</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-1 col-6">
                    <span class="input-group-text" id="inputGroup-sizing-default">Discription</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-1 col-6">
                    <span class="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-1 col">
                    <span class="input-group-text " id="inputGroup-sizing-default">Quentity</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group mb-1 col">
                    <span class="input-group-text " id="inputGroup-sizing-default">Price</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
            </div>

            <button className='btn btn-primary mt-3 px-3'>Add Item</button>

        </div>
    );
};

export default Additem;