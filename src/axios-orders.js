import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-cd922.firebaseio.com/'
});

export default instance;