import PropTypes from 'prop-types';
import './Stat.css';

const Stat = ({ percent = 0 }) => (
  <div className="progress-stat">
    <p className="percent-complete">{`${percent}%`}</p>
    <p className="completed">Completed</p>
  </div>

);

Stat.propTypes = {
  percent: PropTypes.string.isRequired,
};

export default Stat;
