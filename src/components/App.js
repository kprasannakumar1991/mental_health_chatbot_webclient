import React from 'react';
import SearchBar  from './SearchBar';
import Spinner from './Spinner';
import AnswerList from './AnswerList';
import chatbot from '../api/chatbot';


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

                <div style={{fontSize: '24px', color:'#0c6693'}}>Mental health FAQs <i className='wechat icon'></i></div>

                <SearchBar onSubmit={this.onSearchSubmit}/>
                
                {this.renderAnswer()}
            </div>
    
        );
    };
   
}

export default App;