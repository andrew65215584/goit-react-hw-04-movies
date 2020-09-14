import React, { Component } from 'react';
import Axios from 'axios';
import MovieList from '../view/MovieList';
const apiKey = 'c6a84470b29816d87dd13d4e239e0619';

export class MoviesPage extends Component {
  state = {
    query: '',
    page: '',
    movies: [],
  };

  async componentDidMount() {
    if (this.props.location.query) {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${this.props.location.query}`,
      );
      this.setState({
        movies: response.data.results,
        query: this.props.location.query,
      });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    await formData.forEach((value, name) => {
      this.setState({ query: value });
    });

    const { query } = this.state;

    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`,
    );

    this.setState({ movies: response.data.results });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            placeholder="Search movies"
            className="SearchInput"
          ></input>
          <button type="submit" className="SearchInputBtn">
            Search
          </button>
        </form>
        <MovieList
          movies={this.state.movies}
          location={this.props.location}
          query={this.state.query}
        />
      </>
    );
  }
}

export default MoviesPage;
