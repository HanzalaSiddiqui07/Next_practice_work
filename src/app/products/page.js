"use client"
import { useEffect, useState } from 'react';
import ProductItem from '../components/product-item'; // Adjust the path as per your directory structure

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
            <div className='text-3xl font-bold text-slate-900 text-center py-5'>{edit !== null ? 'Edit Product' : 'Add Product'}</div>
            <form className='text-center' onSubmit={(e) => {
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
                    className="rounded-md py-1.5 pl-2 w-1/5 pr-2 text-slate-900 ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 sm:leading-8"
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    required
                    className="rounded-md ml-3 py-1.5 pl-2 w-1/5 pr-2 text-slate-900 ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 sm:leading-8"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                    required
                    className="rounded-md ml-3 py-1.5 w-1/5 pl-2 pr-2 text-slate-900 ring-1 ring-inset ring-slate-900 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-slate-900 sm:leading-8"
                />
                <button className="px-10 py-2.5 ml-3 text-white bg-slate-900 rounded-md hover:bg-slate-700" type="submit">{edit !== null ? 'Update' : 'Add'}</button>
            </form>
            <div className='pt-10 pb-5 text-center'>
                <span className='text-3xl font-bold text-slate-900'>
                    Product List
                </span>
            </div>
            <div className="flex justify-center py-5">
                {productList && productList.length > 0 ? (
                    <table className="table-auto border-2 border-slate-900 text-justify">
                        <thead>
                            <tr className='text-2xl text-slate-900'>
                                <th className='py-2 px-12'>Title</th>
                                <th className='py-2 px-12'>Category</th>
                                <th className='py-2 px-12'>Price</th>
                                <th className='py-2 px-12'></th>
                                <th className='py-2 px-12'></th>
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
