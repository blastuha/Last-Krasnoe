import React, { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    // click on button - does not work
    if (event.key === 'Enter') {
      console.log(event.type)
      this.props.searchMovies(this.state.search, this.state.type)
    }
    if (event.type === 'click') {
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (event) => {
    // Вызываем через callback, чтобы сначала обновилось состояние, после сработала ф. searchMovie. Когда мы принимаем в state - функцию, то вторым параметром она принимает callback
    this.setState(
      () => ({
        type: event.target.dataset.type,
      }),
      () => {}
    )
    this.props.searchMovies(this.state.search, this.state.type)
  }

  render() {
    return (
      <div className='row'>
        <div className='col s12'>
          <div className='input-field'>
            <input
              className='validate'
              id='email_inline'
              type='search'
              placeholder='Search'
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className='btn search-btn'
              onClick={(e) => this.handleKey(e)}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          <label>
            <input
              className='with-gap'
              name='group3'
              type='radio'
              data-type='all'
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='group3'
              type='radio'
              data-type='movie'
              onChange={this.handleFilter}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='group3'
              type='radio'
              data-type='series'
              onChange={this.handleFilter}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    )
  }
}

export default Search
