import userEvent from '@testing-library/user-event';
import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import style from './Additem.css'

const Additem = () => {
    const [user, loading, error] = useAuthState(auth);
    const refName = useRef('');
    const refSupplier = useRef('')
    const refDiscription = useRef('')
    const refImage = useRef('')
    const refQuentity = useRef(0)
    const refPrice = useRef(0)




    const handleInputProduct = (event) => {
        event.preventDefault();

        const name = refName.current.value
        const email = user.email
        const supplier = refSupplier.current.value
        const discription = refDiscription.current.value
        const picture = refImage.current.value
        const quentity = refQuentity.current.value
        const price = refPrice.current.value

        const product = { name, email, supplier, discription, picture, quentity, price }

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })

            .then(res => res.json())
            .then(data => { console.log(data) })


    }


    return (
        <div className='space container '>
            <h1 className='text-white py-3 bg-primary rounded '>ADD NEW ITEM</h1>

            <form onSubmit={handleInputProduct} >
                <div className='row add-container mt-5'>
                    <div class="input-group mb-1 col">
                        <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input ref={refName} type="text" class="form-control" aria-label="Sizing example input " aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-1 col">
                        <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input disabled value={user.email} type="text" class="form-control" aria-label="Sizing example input " aria-describedby="inputGroup-sizing-default" />

                    </div>
                    <div class="input-group mb-1 col">
                        <span class="input-group-text" id="inputGroup-sizing-default">Supplier</span>
                        <input ref={refSupplier} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-1 col-6">
                        <span class="input-group-text" id="inputGroup-sizing-default">Discription</span>
                        <input ref={refDiscription} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-1 col-6">
                        <span class="input-group-text" id="inputGroup-sizing-default">Image URL</span>
                        <input ref={refImage} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-1 col">
                        <span class="input-group-text " id="inputGroup-sizing-default">Quentity</span>
                        <input ref={refQuentity} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div class="input-group mb-1 col">
                        <span class="input-group-text " id="inputGroup-sizing-default">Price</span>
                        <input ref={refPrice} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>

                <button type='submit' className='btn btn-primary mt-3 px-3'>Add Item</button>

            </form>






        </div>
    );
};

export default Additem;