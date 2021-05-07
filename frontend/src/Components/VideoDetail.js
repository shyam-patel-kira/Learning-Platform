import React from 'react';
import Loader from 'react-loader-spinner';

function VideoDetail(props) {
  if (!props.video) {
    return (
      <div>
        <div className='my-64'>
          <h1 className='flex flex-row text-3xl mx-auto my-4 text-customblack font-myfonts justify-center'>
            Fetching Video...
          </h1>
          <Loader
            type='BallTriangle'
            color='#00BFFF'
            height={100}
            width={100}
            className='flex flex-row mx-auto my-auto justify-center'
          />
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;

  return (
    <div>
      <div>
        <iframe
          className='w-full h-96 ml-16'
          title='video player'
          src={videoSrc}
        />
      </div>
      <div className='text-customwhite bg-customwhite ml-16 my-4 font-myfonts leading-relaxed'>
        <h4 className='text-customwhite bg-customwhite'>
          {props.video.snippet.title}
        </h4>
        <p className='text-customblack bg-customwhite'>
          {props.video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;
