import Books from './Books';
import AddBook from './AddBook';

const books = [
  {
    item_id: 'mock-1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    item_id: 'mock-2',
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    item_id: 'mock-3',
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

const BooksPage = () => (
  <div>
    <Books books={books} />
    <AddBook categories={books.map((book) => book.category)} />
  </div>
);

export default BooksPage;
