import { Container } from '@mui/material';
import "./NewsContent.css";

import React from 'react'

const NewsContent = () => {
  return (
    <Container maxWidth="md">
      <div className='content'>
        <div className='downloadMessage'>
            <span className='downloadText'>For the best experience use inshorts appp on your smartphone</span>
            <img alt="app store" height="80%" src="https://assets.inshorts.com/website_assets/images/appstore.png"/>
            <img alt="play store" height="80%" src="https://assets.inshorts.com/website_assets/images/playstore.png"/>
        </div>
        <div>
          
        </div>
        
      </div>
    </Container>
  )
}

export default NewsContent
