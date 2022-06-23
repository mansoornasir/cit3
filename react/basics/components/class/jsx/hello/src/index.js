import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card 
      image="https://randomuser.me/portraits/men/22.jpg"
      name="Mustafa"
      joined="Joined in 2013" 
      desc="Kristy is an art director living in New York."
      noOfFriends="4"
    />
    
    <Card 
      image="https://randomuser.me/portraits/women/21.jpg"
      name="Kiran"
      joined="Joined in 2018" 
      desc="Kristy is an art director living in Los Angeles."
      noOfFriends="0"
    />
    

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
