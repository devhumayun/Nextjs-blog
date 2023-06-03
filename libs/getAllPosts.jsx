import axios from "axios";


export default async function getAllPosts() {
  
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

    if(!response.data) throw new Error("Posts loaded failed")

    return response.data
}
