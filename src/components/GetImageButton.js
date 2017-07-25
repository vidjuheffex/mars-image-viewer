import React, {Component} from 'react';

class GetImageButton extends Component {
  render(){

    let buttonStyle = {
      borderRadius: '50%',
      width: '5rem',
      height: '5rem',
      borderStyle: 'solid'
    };
    return (
      <button style={buttonStyle} onClick={this.props.handleFetch}>Go!</button>
    );
  }
}

export default GetImageButton;


