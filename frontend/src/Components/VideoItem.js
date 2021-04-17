import React from 'react';
import './VideoItem.css';

function VideoItem(props) {
  return (
    <div
      className='flex flex-row justify-items-center cursor-pointer'
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
    >
      <img
        className='max-w-full my-4'
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />
      <div className='my-4'>
        <div className='text-white' >
          {props.video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
