"use client";
import { useFetch } from "../../../hooks/useFetch";

const Users = () => {
  const {data} = useFetch("https://jsonplaceholder.typicode.com/users")
  console.log({data})
 
  return (
    <div className='grid'>
      <div className='grid'>
      <ul>
      {data?.map((user: { id: number, name: string }) => (
          <li key={user.id}>{user.name}</li>
         ))}
      </ul>
      </div>
    </div>
  )
}

export default Users