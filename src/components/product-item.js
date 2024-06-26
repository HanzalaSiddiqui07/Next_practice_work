import { useRouter } from "next/navigation"

const ProductItem = (props) => {
    const router = useRouter();
    const navigate = (item)=>{
      router.push(item)
    }
    return (
        <tr key={props.item.id}>
            <td className="px-1 md:px-2 lg:px-3 xl:px-11 text-xs sm:text-base md:text-lg lg:text-xl border border-slate-500 text-slate-900 dark:text-white">{props.item.title}</td>
            <td className="px-1 md:px-2 lg:px-3 xl:px-11 text-xs sm:text-base md:text-lg lg:text-xl border border-slate-500 text-slate-900 dark:text-white">{props.item.category}</td>
            <td className="px-1 md:px-2 lg:px-3 xl:px-11 text-xs sm:text-base md:text-lg lg:text-xl border border-slate-500 text-slate-900 dark:text-white">{props.item.price}</td>
            <td className="px-1 md:px-2 lg:px-3 xl:px-11 text-xs sm:text-base md:text-lg lg:text-xl border border-slate-500">
                <button onClick={() => props.onDelete(props.item.id)} className="px-1 sm:px-5 py-1 lg:px-10 lg:py-2.5 text-white bg-red-600 rounded-md hover:bg-red-500">
                    Delete
                </button>
            </td>
            <td className="px-1 md:px-2 lg:px-3 xl:px-11 py-2 text-xs sm:text-base md:text-lg lg:text-xl border border-slate-500">
                <button onClick={() => props.onEdit(props.item)} className="px-1 sm:px-5 py-1 lg:px-5 lg:py-2.5 text-white bg-slate-900 dark:bg-blue-500 rounded-md hover:bg-slate-700 dark:hover:bg-blue-400">
                    Edit
                </button>
                <button onClick={()=>{navigate(`/products/${props.item.id}`)}} className="ml-2 px-1 sm:px-5 py-1 lg:px-5 lg:py-2.5 text-white bg-slate-900 dark:bg-blue-500 rounded-md hover:bg-slate-700 dark:hover:bg-blue-400">
                    View
                </button>
            </td>
        </tr>
    );
};

export default ProductItem;
