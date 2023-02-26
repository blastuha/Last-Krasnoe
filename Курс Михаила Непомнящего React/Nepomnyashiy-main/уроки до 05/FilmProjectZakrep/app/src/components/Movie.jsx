import React from 'react'

function Movie(props) {
  return (
    <div className='movies'>
      {props.movies.map((movie) => (
        <div
          key={movie.imbdID}
          className='card'
        >
          <div className='card-image waves-effect waves-block waves-light'>
            <img
              className='activator'
              src={movie.Poster}
              alt='Poster'
            />
          </div>
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4'>
              {movie.Title}
            </span>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>
              Card Title<i className='material-icons right'>close</i>
            </span>
            <p>
              Here is some more information about this product that is only
              revealed once clicked on.
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Movie
