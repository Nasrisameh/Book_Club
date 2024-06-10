import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/books/${id}`);
        setBook(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Added by: {book.author}</p>
      <p>Added on: {new Date(book.createdAt).toLocaleDateString()}</p>
      {book.author === localStorage.getItem('userId') && (
        <>
          <button>Edit</button>
          <button>Delete</button>
        </>
      )}
      <FavoriteButton book={book} />
    </div>
  );
};

export default BookDetails;