"use client"
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ViewProduct({ params }) {

    const [product, setProduct] = useState([]);

    const getProductById = async () => {
        let data = await fetch(`https://dummyjson.com/products/${params.viewproduct}`);
        data = await data.json();
        setProduct(data);


        let name = localStorage.removeItem("User Name :")
        console.log("USERNAME IS : " + name)
    }

    useEffect(() => {
        getProductById();
    }, []);

    return (
        <div>
            <ul className='text-center mt-10 text-slate-900 dark:text-white 2xl:text-xl'>
                <li className="font-bold">{product.title ? "Name:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li>{product.title}</li>
                <li className="font-bold mt-5">{product.title ? "Desc:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li>{product.description}</li>
                <li className="font-bold mt-5">{product.title ? "Category:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li>{product.category}</li>
                <li className="font-bold mt-5">{product.title ? "Rating:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li>{product.rating}</li>
                <li className="font-bold mt-5">{product.title ? "Warranty:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li>{product.warrantyInformation}</li>
                <li className="font-bold mt-5">{product.title ? "Shipping:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li>{product.shippingInformation}</li>
                <li className="font-bold mt-5">{product.title ? "Return:" : <Skeleton count={2} style={{width:"100rem"}}/>}</li>
                <li className='mb-5'>{product.returnPolicy}</li>
            </ul>
        </div>
    )
}