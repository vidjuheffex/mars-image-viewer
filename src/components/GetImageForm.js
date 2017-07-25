import React, {Component} from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';


class GetImageForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      sol: 1000,
      images: []
    };
  }

  handleRover = e => {
    this.setState({rover:e.target.value});
  }

  handleCamera = e => {
    this.setState({camera:e.target.value});
  }

  handleSol = e => {
    this.setState({sol: e.target.value});
  }

  fetchRoverImage = e => {
    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${this.state.rover}/photos?sol=${this.state.sol}&camera=${this.state.camera}&api_key=PhVXcWHnqaRpkc3c7Wo6COAcbFRq8fFNs5eIJc1A`;
    fetch(imageUrl)
      .then(res => { return res.json();})
      .then(res => {
        console.log(res);
        return this.setState({images: res.photos });
      })
      .catch(err => {
        throw err;
      });
  };
  
  render(){

     let controlsStyle = {
      position: 'fixed',
      top: '10vh',
      left: '1rem',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(0,0,0,0.6)',
      padding: '1rem'
     };
    
    let tableWrapStyle = {
      display: 'inline-block',
      color: 'white'
    };
    
    let tableStyle = {
      display: 'table',
      marginRight: '1rem'
    };

    let rowStyle = {
      display: 'table-row'
    };

    let colStyle = {
      display: 'table-cell',
      padding: '.5rem'
    };

    let inputStyle = {
      width: '100%'
    };

    return (
      <div>
        <div style={controlsStyle}>
          <div style= {tableWrapStyle}>
            <div style = {tableStyle}>
              <div style={rowStyle}>
                <label style = {colStyle} htmlFor="rover">Rover</label>
                <select style = {{...colStyle, ...inputStyle}} onChange={this.handleRover} id="rover" value={this.state.rover}>
                  <option value="Curiosity">Curiosity</option>
                  <option value="Opportunity">Opportunity</option>
                  <option value="Spirit">Spirt</option>
                </select>
              </div>
              <div style={rowStyle}>
                <label style = {colStyle} htmlFor="camera">Camera Type</label>
                <select style = {{...colStyle, ...inputStyle}} onChange={this.handleCamera} id="rover" value={this.state.camera}>
                  <option value="fhaz">FHAZ (Front Hazard)</option>
                  <option value="rhaz">RHAZ (Rear Hazard)</option>
                  <option value="navcam">NAVCAM (Navigation Cam)</option>
                </select>
              </div>
              <div style={rowStyle}>
                <label style = {colStyle}  htmlFor="sol">Martian Sol: 1000-2000</label>
                <input style = {{...colStyle,...inputStyle}} type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.sol}/>
              </div>
            </div>
          </div>
          <GetImageButton handleFetch={this.fetchRoverImage} />
        </div>
        <ImageDisplay images={this.state.images}/>
      </div>
    );
  }
}

export default GetImageForm;
