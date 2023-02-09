import axios from 'axios';

export default axios.create({
    baseURL: 'http://mentalhealthchatbot-env.eba-ep2rbvgh.ap-south-1.elasticbeanstalk.com/',
    // baseURL: 'https://mental-health-chatbot-backend.herokuapp.com/',
    // baseURL: 'http://localhost:5000/',
    headers: {
        'Content-Type': 'application/json'
    }
});