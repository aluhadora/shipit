import React, { Component } from 'react';
import '../App.css';

class AlbumArt extends Component {

  render () {
    const { track } = this.props;
    return (
      <div className="Album-Art">
        <img src={track.img} className="Album-Img" />
      </div>
    );
  }
}

export default AlbumArt;