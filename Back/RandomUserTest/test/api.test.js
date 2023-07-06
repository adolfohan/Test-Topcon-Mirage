const { expect } = require('chai');
const { fetchRandomUser } = require('../api');

describe('API Tests', () => {
  // Test case: Fetch a random user
  it('should fetch a random user', async () => {
    const user = await fetchRandomUser();
    expect(user).to.have.property('name');
    expect(user).to.have.property('email');
    expect(user).to.have.property('location');
  });

  // Test case: Verify email address format
  it('should have a valid email address', async () => {
    const user = await fetchRandomUser();
    expect(user.email).to.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
  });

  // Test case: Verify non-empty name
  it('should have a non-empty name', async () => {
    const user = await fetchRandomUser();
    expect(user.name).to.have.property('first').that.is.not.empty;
    expect(user.name).to.have.property('last').that.is.not.empty;
  });

  // Test case: Verify valid location
  it('should have a valid location', async () => {
    const user = await fetchRandomUser();
    expect(user.location).to.have.property('country').that.is.not.empty;
    expect(user.location).to.have.property('city').that.is.not.empty;
  });
});
