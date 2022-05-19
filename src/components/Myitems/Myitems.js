import React, { useEffect, useState } from 'react';

const Myitems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const navigateToManageProduct = () => {

    }
    return (
        <div>
            <div className='container table-responsive-sm space-inventory mt-5 '>
                <h1 className=' product-title fw-bold text-primary bg-primary text-white py-3 my-3'>MANAGE MY ITEMS</h1>
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

            </div>
        </div>
    );
};

export default Myitems;