"use client";
import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { Medal } from "../../../types/medals";
import { fetchMedals } from "../../api/medals";

const Users = () => {
  const [medals, setMedals] = useState<Medal[]>();
  
  useEffect(() => {
    fetchMedals()
    .then(setMedals)
  }, [])
 
  return (
    <div className='grid'>
      <div className='grid'>
      <ul>
      {medals?.map((medal) => (
          <li key={medal.id}>{medal.name}{medal.type}</li>
         ))}
      </ul>
      </div>
    </div>
  )
}

export default Users