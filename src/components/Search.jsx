import React, { useState } from "react";

export const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  // state = {
  //   search: "",
  //   type: "all",
  // };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // handleSearchChange = (e) => {
  //   this.setState({ search: e.target.value });
  // };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  // handleKey = (e) => {
  //   if (e.key === "Enter") {
  //     this.props.searchMovies(this.state.search, this.state.type);
  //   }
  // };

  const hendleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  // hendleFilter = (e) => {
  //   this.setState(
  //     () => ({ type: e.target.dataset.type }),
  //     () => {
  //       this.props.searchMovies(this.state.search, this.state.type);
  //     }
  //   );
  // };

  // render() {
  // const { search } = this.state;

  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="Search"
          type="search"
          className="validate"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleKey}
          // onChange={this.handleSearchChange}
          // onKeyDown={this.handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => {
            this.props.searchMovies(search, type);
            // this.props.searchMovies(this.state.search, this.state.type);
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
            onChange={hendleFilter}
            checked={type === "all"}
            // onChange={this.hendleFilter}
            // checked={this.state.type === "all"}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie" //как в API
            onChange={hendleFilter}
            checked={type === "movie"}
            // onChange={this.hendleFilter}
            // checked={this.state.type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series" //как в API
            onChange={hendleFilter}
            checked={type === "series"}
            // onChange={this.hendleFilter}
            // checked={this.state.type === "series"}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );
  // }
};
