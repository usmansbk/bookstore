import PropTypes from 'prop-types';

const BookProgress = ({ progress }) => {
  const { completed, currentChapter } = progress;
  return (
    <div className="progress-container">
      <div className="progress-stat">
        <p className="percent-complete">{`${completed}%`}</p>
        <p className="completed">Completed</p>
      </div>
      <div className="progress-divider" />
      <div>
        <p className="current-chapter-label">CURRENT CHAPTER</p>
        <p className="current-chapter">{currentChapter}</p>
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
