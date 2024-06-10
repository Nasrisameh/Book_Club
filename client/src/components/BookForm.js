import React, { useState } from 'react';

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (title.trim().length < 1) {
      newErrors.title = 'Title is required';
    }

    if (description.trim().length < 5) {
      newErrors.description = 'Description must be at least 5 characters';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAddBook({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && <p>{errors.title}</p>}

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {errors.description && <p>{errors.description}</p>}

      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;