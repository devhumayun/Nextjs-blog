import getAllPosts from "@/libs/getAllPosts";

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <>
      <div className="py-12 px-5 w-4/5 m-auto">
        <h1 className="font-black text-4xl"> All Blog Posts </h1>

        <div className="flex justify-between flex-wrap w-full gap-5 py-5">
          {posts.map((data, index) => {
            return (
              <div
                key={index}
                className="w-1/5 bg-[#f9f9f9] p-5 shadow-sm cursor-pointer"
              >
                <h4 className="font-bold text-xl py-1"> {data.title} </h4>
                <span>{data.body}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
