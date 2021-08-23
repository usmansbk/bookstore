import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const categories = ['Action', 'Science Fiction', 'Economy'];

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleTitle = (event) => setTitle(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);
  const handleSubmit = (event) => {
    const book = {
      id: nanoid(),
      title,
      category,
    };
    dispatch(addBook(book));
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

export default AddBook;
