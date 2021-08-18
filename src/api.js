const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const STORAGE_KEY = 'appId';

const post = (endpoint, body = {}) => fetch(`${BASE_URL}${endpoint}`, {
  method: 'POST',
  body: JSON.stringify(body),
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

  return response.json();
};

export const deleteBook = async (id) => {
  const appId = localStorage.getItem(STORAGE_KEY);
  const response = await post(`/apps/${appId}/books/${id}`, {
    item_id: id,
  });

  const result = await response.text();

  return result === 'The book was deleted successfully!';
};
