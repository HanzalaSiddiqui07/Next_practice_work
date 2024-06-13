"use client"
import { useEffect, useState } from 'react';
import ProductItem from '../components/product-item';

const Products = () => {
    const [productList, setProductList] = useState([]);
    const [newProduct, setNewProduct] = useState({ title: '', category: '', price: 0 });
    const [edit, setEdit] = useState(null);

    const fetchProducts = async () => {
        let data = await fetch('https://dummyjson.com/products');
        data = await data.json();

        if (data.products && data.products.length > 0) {
            setProductList(data.products);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const addProduct = () => {
        setProductList([...productList, { ...newProduct, id: productList.length + 1 }]);
        setNewProduct({ title: '', category: '', price: 0 });
    };

    const deleteProduct = (id) => {
        setProductList(productList.filter(product => product.id !== id));
    };

    const updateProduct = (index) => {
        const updatedProducts = productList.map((product, i) => i === index ? newProduct : product);
        setProductList(updatedProducts);
        setNewProduct({ title: '', category: '', price: 0 });
        setEdit(null);
    };

   

    return (
        <div>
            <div className='font-bold text-slate-900 text-center text-2xl pt-5 pb-2 sm:text-3xl sm:pt-10 sm:pb-5'>{edit !== null ? 'Edit Product' : 'Add Product'}</div>
            <form className='space-y-3 md:space-y-0 md:space-x-2 lg:space-x-4 flex flex-col items-center justify-center md:flex-row' onSubmit={(e) => {
                e.preventDefault();
                if (edit !== null) {
                    updateProduct(edit);
                } else {
                    addProduct();
                }
            }}>
                <input
                    type="text"
                    placeholder="Title"
                    value={newProduct.title}
                    onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                    required
                    className="rounded-md text-slate-900 ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 
                    py-2.5 pl-2 pr-2 w-72 sm:w-1/2 md:w-52 lg:w-64 xl:w-[22rem]"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    required
                    className="rounded-md text-slate-900 ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 
                    py-2.5 pl-2 pr-2 w-72 sm:w-1/2 md:w-52 lg:w-64 xl:w-[22rem]"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                    required
                    className="rounded-md text-slate-900 ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 
                    py-2.5 pl-2 pr-2 w-72 sm:w-1/2 md:w-52 lg:w-64 xl:w-[22rem]"
                />
                <button className="text-white bg-slate-900 rounded-full hover:bg-slate-700 py-2.5 w-28 sm:w-36 md:w-auto md:px-7 lg:px-10" type="submit">
                    {edit !== null ? 'Update' : 'Add'}</button>
            </form>
            <div className='pt-10 text-center'>
                <span className='text-2xl sm:text-3xl font-bold text-slate-900'>
                    Product List ({productList.length})
                </span>
            </div>
            <div className="flex justify-center py-5">
                {productList && productList.length > 0 ? (
                    <table className="mx-2 table-auto border-2 border-collapse border-slate-900">
                        <thead>
                            <tr className='text-sm sm:text-base md:text-xl lg:text-2xl text-slate-900 text-justify'>
                                <th className='py-3 sm:py-5 px-1 md:px-2 lg:px-3 xl:px-10 border border-slate-500'>Title</th>
                                <th className='px-1 md:px-2 lg:px-3 xl:px-10 border border-slate-500'>Category</th>
                                <th className='px-1 md:px-2 lg:px-3 xl:px-10 border border-slate-500'>Price</th>
                                <th className='text-center border border-slate-500'>Actions</th>
                                <th className='text-center border border-slate-500'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((item, index) => (
                                <ProductItem
                                    key={item.id}
                                    item={item}
                                    onDelete={deleteProduct} 
                                    onEdit={(product) => {
                                        setEdit(index);
                                        setNewProduct(product);
                                    }}
                                />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-xl text-slate-600">No products available</p>
                )}
            </div>
        </div>
    );
};

export default Products;
