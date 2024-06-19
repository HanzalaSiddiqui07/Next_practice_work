'use client'
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from 'react-icons/bs'

export default function Header() {
    const { theme, setTheme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

    return (
        <ul className="flex bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 sm:py-10 ps-10 space-x-10">
            <li className="text-2xl sm:text-5xl font-bold"><Link href="/">Product List App</Link></li>
            <li className="text-2xl sm:text-3xl mt-2 ps-[34rem]"><Link href='/'>Home</Link></li>
            <li className="text-2xl sm:text-3xl mt-2"><Link href='/products'>Products</Link></li>
            <li className="text-2xl sm:text-4xl mt-2"><button>
                {currentTheme === 'light' ? <BsMoon onClick={() => setTheme("dark")} />
                    : <BsSun onClick={() => setTheme("light")} />}
            </button></li>
        </ul>
    )
}