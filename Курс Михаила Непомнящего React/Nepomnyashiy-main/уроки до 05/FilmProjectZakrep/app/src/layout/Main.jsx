import React, { Component } from 'react'
import Movies from '../components/Movies'
import Loader from '../components/Loader'
import Search from '../components/Search'

class Main extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=a2d593e7&s=Matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }))
      .catch((err) => console.warn(err))
    // .finally(() => console.log(this.state.movies))
  }

  // componentDidUpdate() {
  //   console.log(this.state.movies)
  // }

  handleFind = (searchInput, type = 'all') => {
    this.setState({ isLoading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=a2d593e7&s=${searchInput}${
        type === 'all' ? '' : `&type=${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, isLoading: false }))
      .catch((err) => console.warn(err))
      .finally(() => console.log(this.state.movies))
  }

  renderMovies = () => {
    if (this.state.movies === undefined) {
      return <h3>Nothing found</h3>
    }
    if (this.state.movies) {
      return (
        <Movies
          movies={this.state.movies}
          isLoading={this.state.isLoading}
        />
      )
    } else {
      return <Loader />
    }
  }

  render() {
    return (
      <main className='container content'>
        <Search handleFind={this.handleFind} />
        {this.renderMovies()}
      </main>
    )
  }
}

export default Main
