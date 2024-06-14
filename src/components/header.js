import Link from "next/link";
import ThemeButton from "./themebutton";

export default function Header() {
    return (
        <div className="text-center bg-slate-900 text-white font-bold text-2xl py-5 sm:text-5xl sm:py-10">
            <Link href="/">Product List App</Link>
            <ThemeButton/>
        </div>
    )
}