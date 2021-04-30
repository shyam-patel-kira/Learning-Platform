import React from 'react';
import VideoItem from './VideoItem';

function VideoList(props) {
  const renderedList = props.videos.map(video => {
    return <VideoItem onVideoSelect={props.onVideoSelect} video={video} />;
  });

  return <div className='ml-96 mb-8'>{renderedList}</div>;
}

export default VideoList;
