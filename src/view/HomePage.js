import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';
const apiKey = 'c6a84470b29816d87dd13d4e239e0619';

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async () => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
    );

    this.setState({ films: response.data.results });
  };

  render() {
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {this.state.films.map(film => {
            return (
              <li key={film.id}>
                <Link
                  to={{
                    pathname: `/movies/${film.id}`,
                    state: { from: this.props.location.pathname },
                  }}
                >
                  {film.title || film.original_name}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default HomePage;
