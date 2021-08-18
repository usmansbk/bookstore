import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { postBook } from '../../redux/books/books';

const AddBook = ({ categories = [] }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTitle = (event) => setTitle(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);
  const handleSubmit = (event) => {
    const book = {
      item_id: nanoid(),
      title,
      category,
    };
    dispatch(postBook(book));
    setTitle('');
    setCategory(categories[0]);
    event.preventDefault();
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} placeholder="Book title" required onChange={handleTitle} />
        <select value={category} onChange={handleCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBook;
