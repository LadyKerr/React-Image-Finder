import React from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import Loader from "react-loader-spinner";

class ImageResults extends React.Component {
  state = {
    open: false,
    currentImg: ""
  };

  handleOpen = img => {
    this.SetState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList cols={3}>
          {images.map(image => (
            <GridTile>
              title={image.tags}
              key={image.id}
              subtitle=
              {
                <span>
                  by: <strong>{image.user}</strong>
                </span>
              }
              actionIcon ={" "}
              {
                <IconButton>
                  <ZoomIn color="white" />
                </IconButton>
              }
              <img src={image.largeImageURL} alt={image.username} />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imageListContent = (
        <Loader type="Puff" color="ffb900" height={60} width={60} />
      );
    }
    return <div>{imageListContent}</div>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
