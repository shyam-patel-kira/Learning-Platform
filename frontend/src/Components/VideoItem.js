import React from 'react';
//import './VideoItem.css';

function VideoItem(props) {
  return (
    <div
      className='flex flex-row justify-items-left cursor-pointer mr-4'
      onClick={() => {
        props.onVideoSelect(props.video);
      }}
    >
      <img
        className='w-44 my-8'
        src={props.video.snippet.thumbnails.medium.url}
        alt={props.video.snippet.title}
      />

      <div className='text-black my-8 font-myfonts leading-relaxed'>{props.video.snippet.title}</div>
    </div>
  );
}

export default VideoItem;
