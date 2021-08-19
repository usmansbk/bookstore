import * as API from '../../api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/books/SET_BOOKS';

const initialState = [];

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
  const isDeleted = await API.deleteBook(id);

  if (isDeleted) {
    dispatch(removeBook(id));
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
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case SET_BOOKS:
      return Object.entries(action.payload).map(([key, value]) => {
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
    default:
      return state;
  }
};

export default reducer;
