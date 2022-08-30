import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
        
        About
        <button onClick={() => {navigate("/")}}>Go To Home</button>
        </div>
    )
}

export default About