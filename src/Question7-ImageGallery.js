/*
 * ============= Question 7 =============
 *
 * Complete the ImageGallery component so that it fetches an image URL from:
 * https://auspicious-baritone.glitch.me/gorilla.
 *
 * The request will take at least 2 seconds to return so make sure you show
 * something helpful to the user.
 */

import React from "react";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: null
    };
  }

  fetchData = () => {
    fetch().then(res => res.json());
  };

  render() {
    return <img src={this.state.imgSrc} alt="An animal" />;
  }
}

export default ImageGallery;