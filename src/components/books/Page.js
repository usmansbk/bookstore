import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Books from './Books';
import AddBook from './AddBook';
import { getBooks } from '../../redux/books/books';

const books = [
  {
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <Books books={books} />
      <AddBook categories={books.map((book) => book.category)} />
    </div>
  );
};

export default BooksPage;
