const axios = require('axios');

async function fetchRepository(owner, repo) {
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch repository information');
  }
}

module.exports = {
  fetchRepository,
};
