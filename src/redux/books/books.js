import * as API from '../../api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/books/SET_BOOKS';

const initialState = [
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

API.createApp();

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

export const createBook = (book) => async (dispatch) => {
  const isCreated = await API.createBook(book);
  if (isCreated) {
    dispatch(addBook(book));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  if (id.startsWith('mock-')) {
    dispatch(removeBook(id));
  } else {
    const isDeleted = await API.deleteBook(id);

    if (isDeleted) {
      dispatch(removeBook(id));
    }
  }
};

export const loadBooks = () => async (dispatch) => {
  const books = await API.getBooks();

  if (books) {
    dispatch(setBooks(books));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: 'Suzanne Collins',
        progress: {
          currentChapter: 'Chapter 17',
          completed: '64',
        },
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case SET_BOOKS: {
      const saved = Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          item_id: key,
          ...book,
          author: 'Suzanne Collins',
          progress: {
            currentChapter: 'Chapter 17',
            completed: '64',
          },
        };
      });

      return state.concat(saved);
    }
    default:
      return state;
  }
};

export default reducer;
