import axios from 'axios';

const KEY = 'AIzaSyDEPCtlv9ZfTmXZjk2e4hbauoLfffYEpdk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
