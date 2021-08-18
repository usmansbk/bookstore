import * as API from '../../api';

const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

API.createApp();

const loadBooks = (payload) => ({
  type: LOAD_BOOKS,
  payload,
});

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const createBook = (book) => async (dispatch) => {
  const isCreated = await API.createBook(book);
  if (isCreated) {
    dispatch(addBook(book));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  const isDeleted = await API.deleteBook(id);

  if (isDeleted) {
    dispatch(removeBook(id));
  }
};

export const getBooks = () => async (dispatch) => {
  const books = await API.getBooks();

  if (books) {
    dispatch(loadBooks(books));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case LOAD_BOOKS:
      return Object.entries(action.payload).map(([id, value]) => {
        const [book] = value;
        return { id, ...book };
      });
    default:
      return state;
  }
};

export default reducer;
