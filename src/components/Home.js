import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='main'>
           <h1>NEWS APP</h1>
            <h1><Link to='/news'>News Feed</Link></h1>
            <img src='https://st.depositphotos.com/1006899/3776/i/950/depositphotos_37765339-stock-photo-news.jpg' alt='NewImage' />
   
            
        </div>
    )
}

export default Home
