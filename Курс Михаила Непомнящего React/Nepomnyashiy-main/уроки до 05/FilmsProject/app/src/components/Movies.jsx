import React from 'react'
import Movie from './Movie'

function Movies(props) {
  // если придет - undefined (нет фильмов по запросу), то получим пустой массив
  const { movies = [] } = props

  return (
    <div className='movies'>
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Movie
              key={movie.imbID}
              {...movie}
            />
          )
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  )
}

export default Movies
