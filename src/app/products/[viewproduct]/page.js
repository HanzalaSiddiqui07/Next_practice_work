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
    }

    useEffect(() => {
        getProductById();
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()

        const saveProduct = {
            title: product.title,
            category: product.category,
            price: product.price
        }

        localStorage.setItem("Product", JSON.stringify(saveProduct))
        
        document.cookie = `Product=${JSON.stringify(saveProduct)}`; 

    }

    return (
        <div>
            <ul className='text-center mt-10 text-slate-900 dark:text-white 2xl:text-xl'>
                <li className="font-bold">{product.title ? "Name:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.title}</li>
                <li className="font-bold mt-5">{product.description ? "Desc:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.description}</li>
                <li className="font-bold mt-5">{product.category ? "Category:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.category}</li>
                <li className="font-bold mt-5">{product.price ? "Price:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.price}</li>
                <li className="font-bold mt-5">{product.rating ? "Rating:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.rating}</li>
                <li className="font-bold mt-5">{product.warrantyInformation ? "Warranty:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.warrantyInformation}</li>
                <li className="font-bold mt-5">{product.shippingInformation ? "Shipping:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li>{product.shippingInformation}</li>
                <li className="font-bold mt-5">{product.returnPolicy ? "Return:" : <Skeleton count={2} style={{ width: "100rem" }} />}</li>
                <li className='mb-5'>{product.returnPolicy}</li>
            </ul>

            <form onSubmit={handleSubmit} className='text-center space-x-2 mt-10'>
                {product.title ? <><input type='text' name='title' className="rounded-md text-slate-900 dark:bg-white ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 py-2.5 pl-2 pr-2 w-72 sm:w-1/2 md:w-52 lg:w-64 
                xl:w-[22rem]" value={product.title} />
                    <input type='text' name='category' className="rounded-md text-slate-900 dark:bg-white ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 py-2.5 pl-2 pr-2 w-72 sm:w-1/2 md:w-52 lg:w-64 
                xl:w-[22rem]" value={product.category} />
                    <input type='text' name='price' className="rounded-md text-slate-900 dark:bg-white ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 py-2.5 pl-2 pr-2 w-72 sm:w-1/2 md:w-52 lg:w-64 
                xl:w-[22rem]" value={product.price} />
                    <button className="text-white bg-slate-900 dark:bg-blue-500  rounded-full hover:bg-slate-700 dark:hover:bg-blue-400 py-2.5 w-28 
                sm:w-36 md:w-auto md:px-7 lg:px-10" type='submit'>Save</button></> : <Skeleton style={{ width: "100rem", height: "3rem" }} />}
            </form>
        </div>
    )
}