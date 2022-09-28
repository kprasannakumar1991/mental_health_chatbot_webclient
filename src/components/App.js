import React from 'react';
import SearchBar  from './SearchBar';
import Spinner from './Spinner';
import AnswerList from './AnswerList';
import chatbot from '../api/chatbot';

import '../style/App.css'

class App extends React.Component {

    state = {images:[], answers:[], error: null, requestStated: false, requestEnded: false};

    onSearchSubmit = async (term) => {

        this.setState({requestStated: true})

        try {
            const response2 = await chatbot.post('/question1', {question: term});
            this.setState({answers: response2.data.answers, requestStated: false, requestEnded: true})

        } catch(err) {
            console.log(err)
            this.setState({error: "Something went wrong. Please try again.", requestStated: false, requestEnded: true})

        }
    }

    renderAnswer = () => {
        if (this.state.error != null) {
            return <p style={{color: 'red'}}>{this.state.error}</p>
        }  
        if (this.state.requestStated === true) {
            return <Spinner />
        }

        if (this.state.requestEnded === true) {
            return <AnswerList answers={this.state.answers}/>
        }

        return null;
    }

    render() {
        return (
            

            <div className='ui container' style={{marginTop: '20px'}}>

                {/* <h1 className='applabel'><i className='wechat icon'></i></h1> */}
                <h2 className='applabel'>Welcome to Mental health chatbot</h2>
                {/* <p>This app uses a Machine Learning Model trained over a <a href="https://www.kaggle.com/datasets/narendrageek/mental-health-faq-for-chatbot" target="_blank" rel='noreferrer'>dataset</a> to find the best matched answer</p> */}
                <p style={{color: 'grey'}}>Uses Machine Learning to find the best match</p>

                <SearchBar onSubmit={this.onSearchSubmit}/>
                
                {this.renderAnswer()}
            </div>
    
        );
    };
   
}

export default App;