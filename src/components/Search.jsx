import React, { Component } from "react";

export class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  hendleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;

    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={this.handleSearchChange}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => {
              this.props.searchMovies(this.state.search, this.state.type);
            }}
          >
            Search
          </button>
        </div>
        <div className="radio-btn">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.hendleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie" //как в API
              onChange={this.hendleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series" //как в API
              onChange={this.hendleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
