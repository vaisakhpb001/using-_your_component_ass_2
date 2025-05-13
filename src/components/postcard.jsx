<div>
      <h1>Digital Library</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            image={book.image}
            name={book.name}
            genre={book.genre}
            author={book.author}
          />
        ))}
      </div>
    </div>