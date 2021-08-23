import PropTypes from 'prop-types';
import Progress from './BookProgress';

const Actions = () => (
  <div>
    <button type="button">Comments</button>
    <button type="button">Remove</button>
    <button type="button">Edit</button>
  </div>
);

const Book = ({ book }) => {
  const {
    title, category, author, progress,
  } = book;

  return (
    <div>
      <div>
        <div>
          <h4>{category}</h4>
          <h2>{title}</h2>
          <h6>{author}</h6>
        </div>
        <Progress progress={progress} />
      </div>
      <Actions />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: Progress.propTypes.progress,
  }).isRequired,
};

export default Book;
