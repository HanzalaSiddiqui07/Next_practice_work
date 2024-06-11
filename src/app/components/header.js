import Link from "next/link";

export default function Header() {
    return (
        <div className="text-center text-5xl font-bold py-10 bg-slate-900 text-white">
            <Link href="/">To-do List App</Link>
        </div>
    )
}