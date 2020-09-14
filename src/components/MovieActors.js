import React, { Component } from 'react';
import Axios from 'axios';
const apiKey = 'c6a84470b29816d87dd13d4e239e0619';

class MovieActors extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    const actors = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=${apiKey}`,
    );

    this.setState({ actors: actors.data.cast });
  }

  render() {
    return (
      <>
        <h1>Кто снимался</h1>
        <ul>
          {this.state.actors.map(actor => {
            return (
              <li key={actor.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                  alt=""
                />
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default MovieActors;
