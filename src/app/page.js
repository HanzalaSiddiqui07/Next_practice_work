import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex flex-wrap justify-center gap-1 text-lg pt-10 md:text-2xl">
        <li className="text-slate-900 dark:text-white">
          If you want to see Product List, just click on
        </li>
        <li className="text-blue-500 hover:text-blue-400">
          <Link href="/products">Product List</Link>
        </li>
      </ul>
    </main>
  )
}
