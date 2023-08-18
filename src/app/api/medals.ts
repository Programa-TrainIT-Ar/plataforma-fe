import { Medal } from "../../types/medals";

export function fetchMedals ():Promise <Medal[]> {
  return fetch("http://localhost:3004/medals")
  .then((response: Response) => response.json())
}