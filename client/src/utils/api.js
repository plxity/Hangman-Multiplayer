import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hangman-multiplayer.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
export default api