import Book from './Book';

const books = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const Books = () => <ul>{books.map((book) => <Book key={book.title} book={book} />)}</ul>;

export default Books;
