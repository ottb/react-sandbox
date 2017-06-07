import React, { Component } from 'react';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);

    if (!this.props.message) {
        this.message = "Default message";
    } else {
        this.message = this.props.message;
    }
  }

  buttonClick() {
    this.props.buttonClick(this.props.message);
  }

  // on component update, generate log messages to avoid race condition with state transition
  componentDidUpdate(prevProps, prevState) {
    if (this.props.numClicks > prevProps.numClicks) {
      var currentdate = new Date(); 
      var datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();
      console.log("Button clicked at " + datetime);
      console.log("Button has been clicked " + this.props.numClicks + " times");
      console.log("The button message is " + this.message)
    }
  }

render() {
    return (
        <div>
            <button onClick={this.buttonClick}>{this.message}</button>
        </div>
    );
  }
}

export default ButtonComponent;