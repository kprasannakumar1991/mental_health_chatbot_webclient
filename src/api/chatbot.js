import axios from 'axios';

export default axios.create({
    baseURL: 'https://mental-health-chatbot-backend.herokuapp.com/',
    // baseURL: 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json'
    }
});