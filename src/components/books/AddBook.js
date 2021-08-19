import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { createBook } from '../../redux/books/books';
import './AddBook.css';

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
    dispatch(createBook(book));
    setTitle('');
    setCategory(categories[0]);
    event.preventDefault();
  };

  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input className="input title-input" value={title} placeholder="Book title" required onChange={handleTitle} />
        <select className="input category-input" value={category} onChange={handleCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

AddBook.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AddBook;
