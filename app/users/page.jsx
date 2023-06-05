import getAllUsers from "@/libs/getAllUsers";
import Link from "next/link";

export const  metadata = {
  title: "User",
  description: "This is user page"
}

export default async function UsersPage() {
  const users = await getAllUsers()
  return (
    <div className="py-5 w-4/5 m-auto">
        <h1 className="text-4xl font-bold pt-3 py-5 "> All Users </h1>
        <div className="flex gap-5 flex-col">
            {
              users.map((data,index) => {
                return(
                  <div key={index}>
                    <ul>
                      <li>
                        <Link href="#"> <strong>Name</strong>: {data.name} </Link>
                        <span className="block"><strong>Email</strong>: {data.email}</span>
                      </li>
                    </ul>
                   </div>
                )
              })
            }
        </div>
    </div>
  )
}
