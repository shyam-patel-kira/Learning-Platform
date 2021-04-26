import React from 'react';

function VideoDetail(props) {
  if (!props.video) {
    return <div>Loading......</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div className=''>
        <iframe className='w-60' title='video player' src={videoSrc} />
      </div>
      <div className='text-customwhite bg-customblack'>
        <h4 className='text-customwhite bg-customblack'>
          {props.video.snippet.title}
        </h4>
        <p className='text-customwhite bg-customblack'>
          {props.video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;
