import axios from 'axios';
const KEY = 'AIzaSyANc4c-NQEMJBsrvhqAJJLVmOcy6t7EVoE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
