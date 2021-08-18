import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const ActionButtons = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));

  return (
    <div>
      <button type="button">Comments</button>
      <button type="button" onClick={handleRemove}>Remove</button>
      <button type="button">Edit</button>
    </div>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ActionButtons;
