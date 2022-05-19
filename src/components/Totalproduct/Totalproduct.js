import React, { useEffect, useState } from 'react';

const Totalproduct = () => {

    const [products, setProducts] = useState([])
    const [sum, setSum] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        let s = 0;
        for (const product of products) {
            s += parseInt(product.quentity)
        }
        setSum(s)


    }, [products])



    console.log(sum);
    return (
        <div className='mt-5 '>
            <div className='container  space-inventory'>
                <h1 className='my-5 product-title fw-bold text-primary'>STOCK SUMMERY</h1>
                <img className='img-fluid' src="https://i.ibb.co/2yxdJXQ/book14-removebg-preview.png" alt="" />
                <h1 className='mt-3  '>In Stock: <span className='bg-danger rounded text-white p-2'>{sum}</span>  books </h1>
            </div>


        </div>
    );
};

export default Totalproduct;