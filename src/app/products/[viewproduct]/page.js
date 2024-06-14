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
            <ul>
                <li>{product.title}</li>
                <li>{product.description}</li>
                <li>{product.category}</li>
                <li>{product.title}</li>
                <li>{product.rating}</li>
                <li>{product.warrantyInformation}</li>
                <li>{product.shippingInformation}</li>
                <li>{product.returnPolicy}</li>
            </ul>
        </div>
    )
}