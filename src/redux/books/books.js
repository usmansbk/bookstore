import { createBook, createApp } from '../../api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

createApp();

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const postBook = (book) => async (dispatch) => {
  const isCreated = await createBook(book);
  if (isCreated) {
    dispatch(addBook(book));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
