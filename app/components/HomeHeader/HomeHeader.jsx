
import Link from "next/link";

export default function HomeHeader() {
  return (
    <header className="flex px-5 py-6 bg-[#f9f9f9] shadow-md sticky">
        <div className="flex justify-between items-center w-4/5 m-auto">
            <div>
                <Link href="/"> <h6 className="font-bold cursor-pointer text-2xl"> HK's Bolg </h6> </Link>
            </div>
            <ul className="flex space-x-4">
                <li>
                    <Link className="text-blue-500 hover:text-black" href="/"> Home </Link>
                </li>
                <li>
                  <Link className="text-blue-500 hover:text-black" href="/users"> Users </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}
