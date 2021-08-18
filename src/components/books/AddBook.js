import PropTypes from 'prop-types';

const AddBook = ({ categories = [] }) => (
  <form>
    <input placeholder="Book title" required />
    <select>
      {categories.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
    <button type="submit">ADD BOOK</button>
  </form>
);

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBook;
