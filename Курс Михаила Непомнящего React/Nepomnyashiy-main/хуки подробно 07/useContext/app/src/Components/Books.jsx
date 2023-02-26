import React, { useContext } from 'react'
import { CustomContext } from '../Contex'
import Book from './Book'

function Books() {
  const { books = [] } = useContext(CustomContext)
  console.log(books)

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          {...book}
        />
      ))}
    </div>
  )
}

export default Books
