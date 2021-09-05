import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      screen: 0,
    }
  }
  
  changeScreen(screen){
    this.setState({
      screen: screen,
    })
  }

  render(){
    //TODO: Convert to switch
    if(this.state.screen == 1) return(<QuizCreator/>)
    if(this.state.screen == 2) return(<QuizImport/>)

    return(
        <div className="main-screen">
          <p>Welcome to quiz game</p>
          <button onClick={() => this.changeScreen(1)}>Create a quiz</button>
          <button onClick={() => this.changeScreen(2)}>Import a quiz</button>
        </div>
    )
  }
}

class QuizCreator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [],
      question: ["Question", 1, "Answer A", "Answer B", "Answer C", "Answer D"],
    }
    this.onChange = this.onChange.bind(this);
    this.InputBox = this.InputBox.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.setAnswer = this.setAnswer.bind(this);
  }

  onChange(value, index){
    let question = this.state.question;
    question[index] = value;
    this.setState({
         question: question,
    });
  }

  setAnswer(index){
    let question = this.state.question;
    question[1] = index;
    this.setState({
      question: question,
    });
    this.render();
  }

  AnswerButton(answer, val){
    var style = {}
    if(val == this.state.question[1])
      style = {backgroundColor: "greenyellow"}

    return(
      <button 
      className="question-button"
      style={style}
      onClick={e => this.setAnswer(val)}
      >
        {this.state.question[val+1]}
        </button>
    )
  }

  InputBox(index){
    return(
      <input
      className="question-create-input"
      type="text"
      value={this.state.question[index]}
      onChange={e => this.onChange(e.target.value, index)}
    />
    )
  }

  addQuestion(){
    let questions = this.state.questions;
    questions.push(this.state.question)
    this.setState({
      questions: questions,
      question: ["Question", 1, "Answer A", "Answer B", "Answer C", "Answer D"],
    })
  }

  createCode(){
    let questions = this.state.questions;
    let code = "";

    questions.forEach(question => {
      code += "⎙";
      question.forEach((element) => {
        code += element + "⎚"
      })
    });
    return code;
  }

  render(){
    return(
      <>
      <div className="question-box">
      <h1>Create a question</h1>
        {this.InputBox(0)} <br/>
        {this.InputBox(2)}
        {this.InputBox(3)}
        {this.InputBox(4)}
        {this.InputBox(5)}
      </div>


      <div className="question-box">
      <h1>Question Preview</h1>
        <p className="question-text">{this.state.question[0]}</p>
        {this.AnswerButton(this.state.question[2], 1)}
        {this.AnswerButton(this.state.question[3], 2)}
        {this.AnswerButton(this.state.question[4], 3)}
        {this.AnswerButton(this.state.question[5], 4)}
        <br/>
        <button onClick={this.addQuestion}>Add question</button>
        <p>Click on an answer to mark it as correct</p>
      </div>

      <div className="question-box">
        <h1>Quiz code</h1>
        <textarea value={this.createCode()}/>
        <p>Copy and import this quiz code to play your quiz</p>
      </div>
      </>
    )
  }
}

class QuizImport extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      code: "",
      start: false,
    }
    this.startQuiz = this.startQuiz.bind(this)
  }

  onChange(event){
    this.setState({
      code: event,
    })
  }
  
  parseImport(){
    let code = this.state.code;
    let quiz = [];
    let current = [];
    let questions = code.split("⎙");

    questions.forEach(question => {
      let questionSplit = question.split("⎚");
      questionSplit.forEach(element => {
        if(element != "")
          current.push(element)
      });

      if(current != "")
        quiz.push(current);
      current = [];
    });
    return(quiz)
  }
  
  startQuiz(){
    this.setState({
      start: true,
    })
  }
  
  render(){
    if(this.state.start)
      return(<Quiz quiz={this.parseImport()}/>)

    return(
      <div className="question-box">
        <h1>Enter a quiz code</h1>
        
        <textarea
              value={this.state.code}
              onChange={e => this.onChange(e.target.value)}
        />
        
        <br/>
        <button onClick={this.startQuiz}>Import and start</button>
      </div>
    )
  }
}

class Quiz extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      questions: [["What color is red", 1, "Red", "Blue", "Left", "Right"], ["What color is blue", 2, "Red", "Blue", "Left", "Right"]],
      correct: 0,
    }

    this.state.questions = this.props.quiz;
    this.checkAndIncrement = this.checkAndIncrement.bind(this);
  }

  checkAndIncrement(answer){
    if(answer == this.state.questions[this.state.current][1]){
      this.setState({
        correct: this.state.correct + 1,
      })
    }

    this.setState({
      current: this.state.current + 1,
    })
  }


  render(){
    if(this.state.current == this.state.questions.length){
      return(
        <div className="end-screen">
          <h1>The end</h1>
          <h1>You scored {this.state.correct} out of {this.state.questions.length}</h1>
        </div>
      )
    }
    return(
      <QuestionBox checkAndIncrement={this.checkAndIncrement} data={this.state.questions[this.state.current]}/>
    )
  }
}

class QuestionBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      guess: 0,
    }
    this.GiveAnswer = this.GiveAnswer.bind(this);
  }

  AnswerButton(answer, val){
    let buttonClass = "question-button";

    if(this.props.data[1] == val && this.state.guess != 0){
      buttonClass = "question-button-right"
    } else if (this.props.data[1] != val && this.state.guess != 0){
      buttonClass = "question-button-wrong"
    }

    if(answer != ""){
      return(
        <button className={buttonClass} onClick={() => this.GiveAnswer(val)}>{answer}</button>
      )
    }
  }

  GiveAnswer(val){
    if(this.state.guess != 0) return;
    this.setState({
      guess: 1
    })
    
    setTimeout(() => {
      this.props.checkAndIncrement(val);
      this.setState({
        guess: 0,
      })
    }, 3000);
  }

  render(){
    return(
      <div className="question-box">
        <p className="question-text">{this.props.data[0]}</p>
        {this.AnswerButton(this.props.data[2], 1)}
        {this.AnswerButton(this.props.data[3], 2)}
        {this.AnswerButton(this.props.data[4], 3)}
        {this.AnswerButton(this.props.data[5], 4)}
      </div>
    )
  }
}
export default App;
