import { useSelector } from 'react-redux';
import Books from './Books';
import AddBook from './AddBook';

const BooksPage = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <Books books={books} />
      <AddBook />
    </div>
  );
};

export default BooksPage;
