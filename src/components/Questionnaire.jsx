import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

class Questionnaire extends React.Component {

  constructor(props) {

    super(props);

    this.state = { 
      ...props, 
      options: props.question.options.slice(0, 1) 
    };

  }
  
  componentDidMount() {
    this.setTimeouts(this.props.question.options);
  }

  componentWillUnmount() {
  
    this.timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });

  }

  setTimeouts(options) {

    const delay = this.props.delay !== undefined ? this.props.delay : 0;
    
    this.timeouts = options.map((option, index) => {
      return setTimeout(() => {
        this.setState({ options: options.slice(0, index+1) });
      }, delay * index)
    });
   
  }

  componentWillReceiveProps(nextProps) { 
    
    if (this.state.currentQuestion !== nextProps.currentQuestion) {
      const options = nextProps.question.options;
      this.setState({ ...nextProps, options: options.slice(0,1) }, this.setTimeouts(options));
    }

  } 

  render() {

    const { 
      currentQuestion, 
      question, 
      handleAnswer, 
      options 
    } = this.state;

    return (
      <div className="questionnaire-card">
        <h1>{question.question}</h1>
          <ul>
          {options.map((option, index) => {
            return (
              <CSSTransitionGroup key={option} transitionName="question-animation" transitionAppear={true} transitionAppearTimeout={0} transitionLeaveTimeout={300} transitionEnterTimeout={500}>
               <li key={index} onClick={handleAnswer.bind(null, currentQuestion, option)}>
                <span className="radio"></span>
                <span className="text">{option}</span>
               </li>
              </CSSTransitionGroup>
            )
          })}
          </ul>
      </div>
    );

  }

}

Questionnaire.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired
};

export default Questionnaire;