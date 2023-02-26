import React from 'react'
import Movie from './Movie'

function Movies(props) {
  return (
    <div>
      <Movie movies={props.movies} />
    </div>
  )
}

export default Movies
