"use client"
import { useEffect, useState } from 'react';

export default function ViewProduct({ params }) {

    const [product, setProduct] = useState([]);

    const getProductById = async () => {
        let data = await fetch(`https://dummyjson.com/products/${params.viewproduct}`);
        data = await data.json();
        setProduct(data);
    }

    useEffect(() => {
        getProductById();
    }, []);

    return (
        <div>
            <ul className='text-center mt-5 text-slate-900'>
                <li className="font-bold">Name:</li>
                <li>{product.title}</li>
                <li className="font-bold mt-5">Desc:</li>
                <li>{product.description}</li>
                <li className="font-bold mt-5">Category:</li>
                <li>{product.category}</li>
                <li className="font-bold mt-5">Rating:</li>
                <li>{product.rating}</li>
                <li className="font-bold mt-5">Warranty:</li>
                <li>{product.warrantyInformation}</li>
                <li className="font-bold mt-5">Shipping:</li>
                <li>{product.shippingInformation}</li>
                <li className="font-bold mt-5">Return:</li>
                <li className='mb-5'>{product.returnPolicy}</li>
            </ul>
        </div>
    )
}