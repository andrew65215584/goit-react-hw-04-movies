import React, { Component, Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';

// import HomePage from './view/HomePage';
// import MovieDetailsPage from './view/MovieDetailsPage';
// import MoviesPage from './view/MoviesPage';

const HomePage = lazy(() =>
  import('./view/HomePage' /* webpackChunkName: "Home-Page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './view/MovieDetailsPage' /* webpackChunkName: "Movie-Details-Page" */
  ),
);
const MoviesPage = lazy(() =>
  import('./view/MoviesPage' /* webpackChunkName: "Movies-Page" */),
);

class App extends Component {
  render() {
    return (
      <>
        <header className="Header">
          <ul className="NavigationList">
            <li className="NavigationItem">
              <NavLink
                exact
                to="/"
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Home
              </NavLink>
            </li>
            <li className="NavigationItem">
              <NavLink
                to="/movies"
                className="NavLink"
                activeClassName="NavLink--active"
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </header>
        <Suspense fallback={<h1>Загружается </h1>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId/cast " component={HomePage} />
            <Route path="/movies/:movieId/reviews " component={HomePage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
