import PropTypes from 'prop-types';

const BookProgress = ({ progress }) => {
  const { completed, currentChapter } = progress;
  return (
    <div>
      <div>
        <p>{`${completed}%`}</p>
        <p>Completed</p>
      </div>
      <div>
        <p>CURRENT CHAPTER</p>
        <p>{currentChapter}</p>
      </div>
    </div>
  );
};

BookProgress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookProgress;
