import React, {useEffect, useState} from 'react'

export function useFetch(apiFunction: Function ) {
    const [data, setData] = useState <any>(null)

    useEffect(() => {
        apiFunction()
        .then((data: any) => setData(data));
      }, [apiFunction])

    return {data};
}