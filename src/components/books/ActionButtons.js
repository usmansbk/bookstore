import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';
import './ActionButtons.css';

const ActionButtons = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(deleteBook(id));

  return (
    <div className="action-buttons">
      <button className="button-outline" type="button">Comments</button>
      <div className="vertical-divider" />
      <button className="button-outline" type="button" onClick={handleRemove}>Remove</button>
      <div className="vertical-divider" />
      <button className="button-outline" type="button">Edit</button>
    </div>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionButtons;
