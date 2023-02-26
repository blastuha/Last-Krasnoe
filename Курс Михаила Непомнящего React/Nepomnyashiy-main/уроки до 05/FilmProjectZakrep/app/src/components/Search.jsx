import React, { Component } from 'react'

export default class Search extends Component {
  state = {
    searchInput: '',
    type: 'all',
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value })

    if (event.key === 'Enter') {
      // console.log(this.state.type)
      this.props.handleFind(this.state.searchInput, this.state.type)
    }
    if (event.type === 'click') {
      this.props.handleFind(this.state.searchInput, this.state.type)
      console.log(this.state.searchInput)
    }
  }

  handleFilter = (event) => {
    console.log(this.state.type)
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {}
    )
    this.props.handleFind(this.state.searchInput, this.state.type)
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              value={this.state.searchInput}
              id='first_name2'
              type='search'
              className='validate'
              onChange={this.handleChange}
              onKeyDown={this.handleChange}
            />
            <label
              className='active'
              htmlFor='first_name2'
            >
              Search
            </label>
            <button
              className='btn search-btn'
              onClick={this.handleChange}
            >
              Search
            </button>
          </div>
        </div>
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
          <span>Series</span>
        </label>
      </div>
    )
  }
}
