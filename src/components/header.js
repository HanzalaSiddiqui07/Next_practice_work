import Link from "next/link";
import ThemeButton from "./themebutton";

export default function Header() {
    return (
        <ul className="flex bg-slate-900 text-white py-5 sm:py-10 ps-10 space-x-10">
            <li className="text-2xl sm:text-5xl font-bold"><Link href="/">Product List App</Link></li>
            <li className="text-2xl sm:text-3xl mt-2 ps-[34rem]"><Link href='/'>Home</Link></li>
            <li className="text-2xl sm:text-3xl mt-2"><Link href='/products'>Products</Link></li>
            <li className="text-2xl sm:text-5xl mt-2"><ThemeButton/></li>
        </ul>
    )
}