const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: '1',
    category: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    id: '2',
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    id: '3',
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: 'Author not set',
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
