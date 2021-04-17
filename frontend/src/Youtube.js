import './App.css';
import React, { useState, useEffect } from 'react';
import youtube from './api/youtube';
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('IELTS');
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
    <div className='bg-black flex'>
      <div className='my-8'>
        <SearchBar onFormSubmit={onTermSubmit} />
      </div>
      <VideoDetail video={selectedVideo} />

      <VideoList
        onVideoSelect={video => setSelectedVideo(video)}
        videos={videos}
      />
    </div>
  );
};

export default Youtube;
