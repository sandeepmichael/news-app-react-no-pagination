import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './Newsitem'
import { Link } from 'react-router-dom'



const NewsList = () => {
   
   
    const [articles, setArticles] = useState([])
   

   
    useEffect(() => {
       const getArticles = async () => {
           const res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=819e5e59d29346c490ae9ed66356b2dd')
        
           setArticles(res.data.articles)
  
       }
   
       getArticles();
    }, [])
 


    return (
        <div>
         <Link to='/'>Back To Home</Link>
            {articles.map(({title, description, url, urlToImage}) => (
              <NewsItem key={title} title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
               />
            ))}
     
            
            
        </div>
    )
}

export default NewsList
