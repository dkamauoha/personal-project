import React, { Component } from 'react'
import axios from 'axios';


class Gallery extends Component {
  constructor () {
    super();
    this.state = {
      file: '',
      fileName: '',
      fileType: '',
      img: ''
    }
    this.handlePhoto = this.handlePhoto.bind(this);
    this.sendPhoto = this.sendPhoto.bind(this);
  }

  handlePhoto(event) {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onload = photo => {
      this.setState({
        file: photo.target.result,
        fileName: file.name,
        fileType: file.type,
        img: ''
      })
    }

    reader.readAsDataURL(file);
  }

  sendPhoto (event) {
    return axios.post('/api/s3', this.state).then(response => {
      this.setState({img: response.data.location})
    })} 


  render() {
    return (
      <div>
        <h2>Gallery</h2>
        <div>
          <input type='file' id='real' onChange={this.handlePhoto}/>
          <button onClick={this.sendPhoto}>Upload</button>
        </div>
        <div>
          <img src={this.state.img} alt='' />
        </div>
      </div>
    )
  }
}

export default Gallery;
