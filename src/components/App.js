import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import UseVideos from '../hooks/useVideos';

const App = () => {
  const [videos, search] = UseVideos('react hooks');
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;