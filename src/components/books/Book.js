import PropTypes from 'prop-types';

const Actions = () => (
  <div>
    <button type="button">Comments</button>
    <button type="button">Remove</button>
    <button type="button">Edit</button>
  </div>
);

const Progress = ({ progress }) => {
  const { completed } = progress;
  return (
    <div>
      <p>{`${completed}%`}</p>
      <p>Completed</p>
    </div>
  );
};

const Book = ({ book }) => {
  const {
    title, genre, author, progress,
  } = book;

  return (
    <div>
      <div>
        <div>
          <h4>{genre}</h4>
          <h2>{title}</h2>
          <h6>{author}</h6>
        </div>
        <Progress progress={progress} />
      </div>
      <Actions />
    </div>
  );
};

Progress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    progress: PropTypes.shape({
      currentChapter: PropTypes.string.isRequired,
      completed: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Book;
