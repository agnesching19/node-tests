const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('Agnes', 18);
    expect(spy).toHaveBeenCalledWith('Agnes', 18);
  });

  it('should call saveUser with user object', () => {
    const email = 'agnes@gmail.com';
    const password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});
