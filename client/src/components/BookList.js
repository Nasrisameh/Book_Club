import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookDetails from './BookDetails';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () =>{
      try {
        const response = await axios.get('/books');
        setBooks(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooks();
  }, []);

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleCancel = () => {
    setEditingBook(null);
  };

  return (
    <div>
      {editingBook ? (
        <BookForm book={editingBook} onCancel={handleCancel} />
      ) : (
        <>
          <h1>Books</h1>
          <button onClick={() => setEditingBook({ title: '', description: '' })}>
            Add Book
          </button>
          {books.map((book) => (
            <div key={book._id}>
              <BookDetails book={book} />
              <button onClick={() => handleEdit(book)}>Edit</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default BookList;