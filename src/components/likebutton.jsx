import React from 'react';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div style={{ width: '200px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }}
      />
      <h3>{name}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
};

export default BookCard;