import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, genre, author } = book;

  return (
    <div>
      <h4>{genre}</h4>
      <h2>{title}</h2>
      <h6>{author}</h6>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
