import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';
import './Page.css';
import { loadBooks } from '../../redux/books/books';

const BooksPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div>
      <Books books={books} />
      <div className="horizontal-divider" />
      <AddBook />
    </div>
  );
};

export default BooksPage;
