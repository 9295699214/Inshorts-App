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
const [newResults, setNewsResult] = useState("");

useEffect(()=>{
  newApi();
},[category,newResults])


const newApi = async() =>{

  try{
    const news = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
    );
     setNewsArray(news.data.articles);
     setNewsResult(news.data.totalResults);
  }catch(error){
    console.log(error)
  }

}

  return (
    <div className="App">
     <Navbar setCategory={setCategory}/>
     <NewsContent/>
     <Footer/>
    </div>
  );
}

export default App;
