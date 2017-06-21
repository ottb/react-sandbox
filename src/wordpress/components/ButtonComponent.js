import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {maxPosts: this.props.maxPosts, postOrder: this.props.postOrder};

    if (this.props.message) {
        this.message = this.props.message;
    }
  }

  // take select value and update local state
  handleSelectChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // pass local form values in state back to controller
  buttonClick = () => {
    this.props.buttonClick(this.state.maxPosts, this.state.postOrder);
  }

  // need to add in form elements
  render() {
    return (
        <div>
          <label>
            Select the number of posts
            <select name="maxPosts" value={this.state.maxPosts} onChange={this.handleSelectChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </label>
          <br />
          <label>
            Choose post display order
            <select name="postOrder" value={this.state.postOrder} onChange={this.handleSelectChange}>
              <option value="asc">Oldest</option>
              <option value="desc">Newest</option>
            </select>
          </label>
          <br />
          <button onClick={this.buttonClick}>{this.message}</button>
        </div>
    );
  }
}

ButtonComponent.defaultProps = {
  message: "Update List"
}

ButtonComponent.propTypes = {
  message: PropTypes.string,
  maxPosts: PropTypes.number.isRequired,
  postOrder: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired
}

export default ButtonComponent;