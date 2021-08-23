import PropTypes from 'prop-types';
import './BookProgress.css';
import CircularProgress from './CircularProgress';
import Stat from './Stat';

const BookProgress = ({ progress }) => {
  const { completed, currentChapter } = progress;
  return (
    <div className="progress-container">
      <CircularProgress />
      <Stat percent={completed} />
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
