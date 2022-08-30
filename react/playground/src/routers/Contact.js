import React from 'react'
import {useSearchParams} from 'react-router-dom'
const Contact = () => {
    const [searchParams] = useSearchParams(); 
    // for (const entry of searchParams.entries()) {
    //     const [param, value] = entry;
    //     console.log(param)
    // }
    console.log(Object.fromEntries([...searchParams]));
    return (
        <div>
            {searchParams.get("sort")}
        </div>
    )
}
export default Contact