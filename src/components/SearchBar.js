import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value.toLowerCase()});
    }

    onFormSubmit= (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui' style={{marginTop: '10px', marginBottom: '40px'}}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <div class="ui action input">
                            < input spellCheck 
                                    type="text" 
                                    value={this.state.term} 
                                    onChange={this.onInputChange} 
                                    placeholder='Type a mental health related question here...'
                            />
                            <button class="ui button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;