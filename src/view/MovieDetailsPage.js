import React, { Component } from 'react';

import Axios from 'axios';
import { Link, Route, Switch } from 'react-router-dom';
import MovieActors from '../components/MovieActors';
import MovieReviews from '../components/MovieRewievs';

const apiKey = 'c6a84470b29816d87dd13d4e239e0619';

class MovieDetailsPage extends Component {
  state = {
    genres: [],
  };

  async componentDidMount() {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${apiKey}&language=en-US`,
    );
    const {
      original_title,
      title,
      poster_path,
      popularity,
      genres,
      overview,
    } = response.data;

    this.setState({
      // ...response.data,
      poster_path,
      popularity,
      genres,
      overview,

      title: original_title ? original_title : title,
      from: this.props.location.state.from,
      query: this.props.location.state.query,
    });
  }

  handleClick() {
    this.props.history.push({
      pathname: this.state.from,
      query: this.state.query,
      search: this.state.query ? `?query=${this.state.query}` : '',
    });
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleClick()}>Go Back</button>
        <div className="contentWrapperFilm">
          <img
            src={`https://image.tmdb.org/t/p/w300${this.state.poster_path}`}
            alt="{Постер фильма}"
            className="filmImg"
            style={
              this.state.poster_path ? {} : { width: '700px', height: '700px' }
            }
          />

          <div>
            <h1> {this.state.title}</h1>
            <p>{this.state.popularity}</p>
            <h3>Overview</h3>
            <p>{this.state.overview}</p>
            <h3>Genres</h3>
            <ul>
              {this.state.genres.map(el => {
                return <li key={el.id}> {el.name}</li>;
              })}
            </ul>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <Link to={`${this.props.match.url}/cast`}>
              <li key={'Cast'}>Cast</li>
            </Link>

            <Link to={`${this.props.match.url}/reviews`}>
              <li key={'reviews'}>Reviews</li>
            </Link>
          </ul>
        </div>

        <Switch>
          <Route
            path={`${this.props.match.path}/cast`}
            component={MovieActors}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={MovieReviews}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
