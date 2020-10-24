import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-reactjs-77301.firebaseio.com/'
});

export default instance;