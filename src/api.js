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

    appId = response.text();
    localStorage.setItem(STORAGE_KEY, appId);
  }
};

export const createBook = async (book) => {
  const appId = localStorage.getItem(STORAGE_KEY);
  const response = await post(`/apps/${appId}/books`, book);

  return response.status === 201;
};

export default {};
