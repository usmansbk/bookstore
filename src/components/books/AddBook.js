import PropTypes from 'prop-types';

const AddBook = ({ categories = [] }) => (
  <section>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input placeholder="Book title" required />
      <select>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </section>
);

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBook;
