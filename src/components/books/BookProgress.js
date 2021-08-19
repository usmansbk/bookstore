import PropTypes from 'prop-types';
import './BookProgress.css';

const BookProgress = ({ progress }) => {
  const { completed, currentChapter } = progress;
  return (
    <div className="progress-container">
      <div className="progress-stat">
        <p className="percent-complete">{`${completed}%`}</p>
        <p className="completed">Completed</p>
      </div>
      <div className="progress-divider" />
      <div className="current-chapter-container">
        <div>
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">{currentChapter}</p>
        </div>
        <div>
          <button className="primary-button" type="button">UPDATE PROGRESS</button>
        </div>
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
