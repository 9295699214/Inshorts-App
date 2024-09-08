import { Container } from '@mui/material';
import "./NewsContent.css";

import React from 'react'
import NewsCard from '../NewsCard/NewsCard';

const NewsContent = ({newsArray,newsResults, loadMore, setLoadMore}) => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadMessage'>
            <span className='downloadText'>For the best experience use inshorts appp on your smartphone</span>
            <img alt="app store" height="80%" src="https://assets.inshorts.com/website_assets/images/appstore.png"/>
            <img alt="play store" height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png"/>
        </div>

        {newsArray && newsArray.length > 0 ? (
          newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))
        ) : (
          <p>No news available</p>
        )}
        <hr />
        {
          loadMore <= newsResults && (
            <>
              <button className='loadMore' onClick={()=>{setLoadMore(loadMore+20)}}>Load More</button>
            </>
          )
        }
      </div>
    </Container>
  )
}

export default NewsContent
