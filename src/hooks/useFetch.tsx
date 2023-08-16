import React, {useEffect, useState} from 'react'

export function useFetch(url: RequestInfo | URL) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((response: Response) => response.json())
        .then((data: any) => setData(data));
      }, [url])

    return {data};
}