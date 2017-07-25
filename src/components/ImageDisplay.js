import React, {Component} from 'react';

class ImageDisplay extends Component {
  render(){
    let imageList = this.props.images;

    let imageContainerStyle = {
      padding: 0,
      margin: 0,
      marginTop: '5vh',
      display: 'flex'
    };
    
    let imageCardStyle = {
      flex: '1 0 auto'
    };

    let imageStyle ={
      width: 'auto',
      height: '90vh'
    };

    
    imageList = imageList.map( (element, index) => {
      return (
        <div key={index} style={imageCardStyle}>
          <img src={element.img_src} style={imageStyle}/>
        </div>
      );
    });
    return(
      <div>
        <div style={imageContainerStyle}>
          {imageList}
        </div>
      </div>
    );
  }
}

export default ImageDisplay;
