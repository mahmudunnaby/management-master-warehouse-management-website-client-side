import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Myitems = () => {
    const [products, setProducts] = useState([])
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/myitems/${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

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
                    <tbody >
                        {
                            products?.map(product => {

                                return (<tr key={product._id}>

                                    <th scope="row"><img className='product-img' src={product.picture} alt="" /></th>
                                    <td>{product.name}</td>
                                    <td>{product.supplier}</td>
                                    <td>{product.quentity}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={() => navigateToManageProduct(product._id)} className='btn btn-primary'> Manage</button></td>
                                    <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'> Delete</button></td>
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