import React from "react";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FlatButton from "material-ui/FlatButton";

class SearchBar extends React.Component {
  state = {
    searchInput: "",
    amount: 18,
    images: [],
    baseUrl: "https://pixabay.com/api/",
    apiKey: "12908939-a258f64c5e7e855c20dfeed3c"
  };

  onSearchChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.baseUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchInput
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => {
            this.setState({
              images: res.data.hits
            });
          })
          .catch(err => console.log(err.response));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);
    return (
      <div className="container">
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
          label="search"
          style={{
            backgroundColor: "#ffb900",
            fontFamily: "Kaushan Script",
            color: "#ffffff"
          }}
        />
        <br />
        <p>How many images do you want?</p>
        <SelectField
          name="amount"
          label="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={0} primaryText="0" />
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={20} primaryText="20" />
          <MenuItem value={30} primaryText="30" />
        </SelectField>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null}
      </div>
    );
  }
}

export default SearchBar;
