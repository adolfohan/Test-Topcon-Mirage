const { expect } = require('chai');
const { fetchRepository } = require('../api');

describe('API Tests', () => {
  // Test case: Fetch repository information
  it('should fetch repository information', async () => {
    const repository = await fetchRepository('octocat', 'Hello-World');
    expect(repository).to.have.property('name').equal('Hello-World');
    expect(repository).to.have.property('owner');
    expect(repository.owner).to.have.property('login').equal('octocat');
  });

  // Test case: Verify the number of forks
  it('should have a valid number of forks', async () => {
    const repository = await fetchRepository('octocat', 'Hello-World');
    expect(repository).to.have.property('forks').that.is.a('number').and.is.at.least(0);
  });

  // Test case: Verify the repository description
  it('should have a valid repository description', async () => {
    const repository = await fetchRepository('octocat', 'Hello-World');
    expect(repository).to.have.property('description').that.is.a('string').and.is.not.empty;
  });
});
