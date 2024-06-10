import React, { useState } from 'react';
import axios from 'axios';

const FavoriteButton = ({ book }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      if (!isFavorited) {
        await axios.post(`/books/${book._id}/favorite`);
        setIsFavorited(true);
      } else {
        await axios.delete(`/books/${book._id}/favorite`);
        setIsFavorited(false);
      }
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isFavorited ? 'Unfavorite' : 'Favorite'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FavoriteButton;