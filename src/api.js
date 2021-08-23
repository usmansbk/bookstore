const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const STORAGE_KEY = 'appId';

const post = (endpoint, body = {}, method = 'POST') => fetch(`${BASE_URL}${endpoint}`, {
  method,
  body: JSON.stringify(body),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export const createApp = async () => {
  let appId = localStorage.getItem(STORAGE_KEY);

  if (!appId) {
    const response = await post('/apps');

    appId = await response.text();
    localStorage.setItem(STORAGE_KEY, appId);
  }
};

export const createBook = async (book) => {
  const appId = localStorage.getItem(STORAGE_KEY);
  const response = await post(`/apps/${appId}/books`, book);

  return response.status === 201;
};

export const getBooks = async () => {
  const appId = localStorage.getItem(STORAGE_KEY);
  const response = await fetch(`${BASE_URL}/apps/${appId}/books`);
  try {
    const books = await response.json();
    return books;
  } catch (error) {
    return {};
  }
};

export const deleteBook = async (id) => {
  const appId = localStorage.getItem(STORAGE_KEY);
  const response = await post(`/apps/${appId}/books/${id}`, {
    item_id: id,
  }, 'DELETE');

  const result = await response.text();

  return result === 'The book was deleted successfully!';
};
