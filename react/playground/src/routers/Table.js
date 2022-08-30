import React from 'react'
import {useParams} from 'react-router-dom'

const Table = () => {
    const {id} = useParams();
    return (
        <div>Table for user {id}</div>
    )
}

export default Table