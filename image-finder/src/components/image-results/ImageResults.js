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
    currentImage: ""
  };

  handleOpen = image => {
    this.setState({ open: true, currentImage: image });
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
            <GridTile
              title={image.tags}
              key={image.id}
              subtitle={
                <span>
                  by: <strong>{image.user}</strong>
                </span>
              }
              actionIcon={
                <IconButton
                  onClick={() => this.handleOpen(image.largeImageURL)}
                >
                  <ZoomIn color="white" />
                </IconButton>
              }
            />
          ))}
        </GridList>
      );
    } else {
      imageListContent = (
        <Loader type="Puff" color="ffb900" height={60} width={60} />
      );
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        />
        <img src={this.state.currentImage} alt="" style={{ width: "100%" }} />
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
