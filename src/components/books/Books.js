import Book from './Book';

const books = [
  {
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: '17',
      completed: '64',
    },
  },
  {
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      currentChapter: '3',
      completed: '8',
    },
  },
  {
    genre: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: '0',
      completed: '0',
    },
  },
];

const Books = () => <ul>{books.map((book) => <Book key={book.title} book={book} />)}</ul>;

export default Books;
