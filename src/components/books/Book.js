import PropTypes from 'prop-types';
import Progress from './BookProgress';
import ActionButtons from './ActionButtons';
import './Books.css';

const Book = ({ book }) => {
  const {
    item_id: id, title, category, author, progress,
  } = book;

  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h6 className="book-author">{author}</h6>
          <ActionButtons id={id} />
        </div>
        <Progress progress={progress} />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: Progress.propTypes.progress,
  }).isRequired,
};

export default Book;
