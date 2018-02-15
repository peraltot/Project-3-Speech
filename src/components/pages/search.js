import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
// import Learn from "./Learn";
import StoryDetail from "../StoryDetail";

import API from "../../../routes/api";
import SearchForm from "../Search";

// const Search = props =>

class Search extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchStory("");
  }

  searchStory = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchStory(this.state.search);
  };

  render() {
    return (

<div heading={this.state.result.title || "Search for a Story to Begin"}>
                <StoryDetail
                    title={this.state.result.title}
                    words={this.state.result.words}
                  />
  
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              </div>
            );
          }
        
        }

export default Search;
