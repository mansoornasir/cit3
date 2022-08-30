import React from 'react'
import useFetch from './useFetch'

const App = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos") 
    return (
        <div>
            {data && 
                data.map(l => {
                    return <p>{l.title}</p>
                })
            }
        </div>
    )
}

export default App