import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // state = {
  //   movies: [],
  //   loading: true,
  // };

  const searchMovies = (str, type = "all") => {
    setLoading(true);
    // this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      // .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        setLoading(false);
        // this.setState({ loading: false });
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // componentDidMount() {
  //   fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ movies: data.Search, loading: false }))
  //     .catch((error) => {
  //         console.error(error);
  //         this.setState({ loading: false });
  //       });
  // }

  // render() {
  // const { movies, loading } = this.state;

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {/* <Search searchMovies={this.searchMovies} /> */}
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
  // }
};
