const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const post = (endpoint) => fetch(`${BASE_URL}${endpoint}`, {
  method: 'POST',
});

export const createApp = async () => {
  let appId = localStorage.getItem('appId');

  if (!appId) {
    const response = await post('/apps/');

    appId = response.text();
    localStorage.setItem('appId', appId);
  }
};

export const createBook = async () => {

};

export default {};
