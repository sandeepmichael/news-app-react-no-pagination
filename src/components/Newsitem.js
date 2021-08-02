import React from 'react'
import './Newsitem.css'



const NewsItem = ({title, description, url, urlToImage}) => {
    return(
 
       
            <div className='news-item'>
          <img className='news-img' src={urlToImage} alt='NewImage' />
            <h3>
                <a href={url}>{title}</a>
            </h3>
            <p className='news-para'>{description}</p>
            </div>
      
   

    
    
        
    )
}

export default NewsItem
