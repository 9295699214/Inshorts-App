import './App.css';
import Navbar from './components/Navbar';
import {useEffect, useState} from 'react';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';
import apiKey from './data/config';
import Footer from './components/Footer/Footer';

function App() {

const [category, setCategory] = useState("business");
const [newsArray, setNewsArray] = useState("");
const [newsResults, setNewsResult] = useState("");
const [loadMore, setLoadMore] = useState(20);

useEffect(() => {
  const newApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  
  newApi();
}, [category,newsResults,loadMore]);


  return (
    <div className="App">
     <Navbar setCategory={setCategory}/>
     <NewsContent newsArray={newsArray} newsResults={newsResults} loadMore = {loadMore} setLoadMore={setLoadMore}/>
     <Footer/>
    </div>
  );
}

export default App;
