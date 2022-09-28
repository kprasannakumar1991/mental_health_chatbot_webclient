import React from 'react';

const AnswerList = (props) => {
    console.log(props.answers)

    if (props.answers.length === 0) {
        return (
            <div className='ui ' style={{color: 'red'}}>
                Sorry no answers found. Please ask another question.
            </div>
        )

    } else {
        const answers = props.answers.map((answer) => {
            return (
                <div class="ui segments" key={answer._q_no}>
                    <div class="ui segment">
                        <p style={{color: '#0c6693'}}>Q {answer._q_no}) {answer.question}.   ( {answer.probability} % match)</p>
                    </div>
                    <div class="ui secondary segment">
                        <p>{answer.answer}</p>
                    </div>
                </div>
            );
        });
    
        
        return (
            <div>
                {answers}
            </div>
        )
    }
   

}

export default AnswerList;