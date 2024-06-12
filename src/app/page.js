import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul className="flex flex-wrap justify-center gap-1 text-lg mt-5 md:text-2xl">
        <li>
          If you want to see Product List just click on
        </li>
        <li className="text-blue-500 hover:text-blue-400">
          <Link href="/products">Product List</Link>
        </li>
      </ul>
    </main>
  )
}
