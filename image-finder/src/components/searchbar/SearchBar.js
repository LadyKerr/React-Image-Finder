import React from "react";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import FlatButton from "material-ui/FlatButton";

class SearchBar extends React.Component {
  state = {
    searchInput: "",
    amount: 20,
    images: [],
    baseUrl: "https://pixabay.com/api/",
    apiKey: "12908939-a258f64c5e7e855c20dfeed3c"
  };

  componentDidMount() {
    this.getImagesData();
  }

  onSearchChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getImagesData = () => {
    axios
      .get(
        `${this.state.baseUrl}?key=${this.state.apiKey}&q=${
          this.state.searchInput
        }&image_type=photo&safesearch=true`
      )
      .then(res => {
        console.log(res);
        this.setState({
          images: res.data.hits
        });
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <br />
        <p> Search below for your favorite photo! </p>
        <TextField
          label="Search Here"
          type="search"
          name="searchInput"
          value={this.state.searchInput}
          onChange={this.onSearchChange}
        />
        <FlatButton
          onSubmit={this.getImagesData}
          label="search"
          style={{
            backgroundColor: "#ffb900",
            fontFamily: "Kaushan Script",
            color: "#ffffff"
          }}
        />
        <br />
        <div>
          {this.state.images.map(image => (
            <ImageResults image={image} key={image.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default SearchBar;
