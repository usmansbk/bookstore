import PropTypes from 'prop-types';

const Icon = ({ name, className }) => <span className={`material-icons ${className}`}>{name}</span>;

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
