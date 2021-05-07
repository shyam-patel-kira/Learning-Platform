import './App.css';
import React, { useState, useEffect } from 'react';
import youtube from './api/youtube';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import Navbar from './Components/Navbar/Navbar';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('IELTS and GRE');
  }, []);

  const onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <div className='bg-customwhite'>
      <Navbar />
      <div>
        <SearchBar onFormSubmit={onTermSubmit} />
      </div>
      <div className='flex flex-row justify-items-evenly'>
        <VideoDetail video={selectedVideo} />

        <VideoList
          onVideoSelect={video => setSelectedVideo(video)}
          videos={videos}
          className=''
        />
      </div>
    </div>
  );
};

export default Youtube;
