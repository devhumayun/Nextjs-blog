import axios from "axios";

export default async function getAllUsers() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")

  if(!response.data) throw new Error("Users Loaded failed")

  return response.data
}
