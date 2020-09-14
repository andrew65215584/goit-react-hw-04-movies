import React, { Component } from 'react';
import Axios from 'axios';
const apiKey = 'c6a84470b29816d87dd13d4e239e0619';
class MovieReviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const reviews = await Axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
    );
    this.setState({ reviews: reviews.data.results });
  }

  render() {
    return (
      <>
        <h1>MovieReviews</h1>
        <ul>
          {this.state.reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MovieReviews;
