import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url).then(resp => resp.json()).then(json => {
            setData(json)
        })
        
    },[url])

    return [data];
}

export default useFetch;