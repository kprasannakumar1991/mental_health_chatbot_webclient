import axios from 'axios';

export default axios.create({
    baseURL: 'https://mental-health-chatbot-backend.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json'
    }
});