import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { useState, useEffect } from "react"
import axios from "axios"

const [books, setBooks] = useState([])
const bookUrl = "https://edwardtanguay.netlify.app/share/books.json"

useEffect(() => {
  ;(async () => {
    const response = (await axios.get(bookUrl)).data
    setBooks(response)
  })()
}, [])

const handleDelete = book => {
  const _books = books.filter(m => m.id !== book.id)
  setBooks(_books)
}

const handleEdit = book => {
  book.title = book.title + " - FINISHED"
  setBooks([...books])
}

const BooksPage = () => (
  <Layout>
    <Seo title="Page three" />
    <h1>Books</h1>
    <p>Welcome to the books page</p>
    {books.map((book, index) => {
      return (
        <div className="book" key={index}>
          <img
            src={`https://edwardtanguay.netlify.app/share/images/books/${book.idcode}.png`}
            alt="book cover"
          />
          <div className="info">
            <div className="title">{book.title}</div>
            <div className="description">{book.description}</div>
            <div className="buttonArea">
              <button onClick={() => handleDelete(book)}>Delete</button>
              <button onClick={() => handleEdit(book)}>Edit</button>
            </div>
          </div>
        </div>
      )
    })}
  </Layout>
)

export default BooksPage