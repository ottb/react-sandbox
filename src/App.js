import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {numClicks: 0};
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState((prevState) => {
      return {numClicks: prevState.numClicks + 1};
    });
    // Since state updates may be asynchronous, we can't output the count of clicks here; it may not have updated yet.
    // We could use a callback function, but official recommendation is to use componentDidUpdate for that logic, 
    //   and that is most effectively done in the child component, since otherwise we're having to pass back props (message) from the child to the parent.
    // In this particular case, I would just leave the click function inside the child and let it manage its own click state.
  }

  render() {
    return(
      <div>
        <ButtonComponent message="Here's a message from a parent" buttonClick={this.buttonClick.bind(this)} numClicks={this.state.numClicks} />
      </div>
    );
  }
}

export default App;
