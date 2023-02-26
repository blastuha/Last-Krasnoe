import React from 'react'

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imbdID: id,
    Type: type,
    Poster: poster,
  } = props

  return (
    <div
      id={id}
      className="card movie"
    >
      <div className="card-image waves-effect waves-block waves-light">
        {poster === 'N/A' ? (
          <img
            className="activator"
            src={`https://via.placeholder.com/300x430?text=${title}`}
            alt="pic"
          />
        ) : (
          <img
            className="activator"
            src={poster}
            alt="pic"
          />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year}
          <span>{type}</span>
        </p>
      </div>
    </div>
  )
}

export default Movie
