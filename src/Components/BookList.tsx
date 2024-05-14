// BookList.tsx
import React from 'react';

interface Book {
  title: string;
  author: string;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <p>{book.title} - {book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;