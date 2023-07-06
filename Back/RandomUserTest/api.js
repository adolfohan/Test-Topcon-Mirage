const axios = require('axios');

async function fetchRandomUser() {
  try {
    const response = await axios.get('https://randomuser.me/api/');
    return response.data.results[0];
  } catch (error) {
    throw new Error('Failed to fetch random user');
  }
}

module.exports = {
  fetchRandomUser,
};
