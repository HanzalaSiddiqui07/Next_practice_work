const ProductItem = (props) => {
    return (
        <tr key={props.item.id}>
            <td className="px-12 py-2 text-xl">{props.item.title}</td>
            <td className="px-12 py-2 text-xl">{props.item.category}</td>
            <td className="px-12 py-2 text-xl">{props.item.price}</td>
            <td className="px-12 py-2 text-xl">
                <button onClick={() => props.onDelete(props.item.id)} className="px-10 py-2.5 ml-3 text-white bg-red-600 rounded-md hover:bg-red-500">
                    Delete
                </button>
            </td>
            <td className="px-12 py-2 text-xl">
                <button onClick={() => props.onEdit(props.item)} className="px-10 py-2.5 ml-3 text-white bg-slate-900 rounded-md hover:bg-slate-700">
                    Edit
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
