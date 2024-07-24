import React from 'react';
import "./imageAreaDiv.css";

const ImageAreaDiv = () => {
  return (
    <video controls>
    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source> 
      <div>
        <img className='tv' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'></img>
      </div>
      
    </video> 
    );
}

export default ImageAreaDiv
