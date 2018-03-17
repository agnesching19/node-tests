const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const result = utils.add(33, 11);
      expect(result).toBe(44).toBeA('number');
    });

    it('should asnyc add two numbers', (done) => {
      utils.asyncAdd(5, 6, (sum) => {
        expect(sum).toBe(11).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square a number', () => {
      const result = utils.square(12);
      expect(result).toBe(144).toBeA('number');
    });

    it('should asnyc square a number', (done) => {
      utils.asyncSquare(13, (sum) => {
        expect(sum).toBe(169).toBeA('number');
        done();
      });
    });
  });

  it('should set firstName and lastName', () => {
    const user = {location: 'London', age: 18};
    const result = utils.setName(user, 'Agnes Ching');
    expect(result).toInclude({
      firstName: 'Agnes',
      lastName: 'Ching'
    });
  });
});

// it('should expect some values', () => {
  // expect(12).toNotBe(21);
  // expect({name: 'agnes'}).toNotEqual({name: 'Agnes'});
  // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Agnes',
//     age: 18,
//     location: 'London'
//   }).toExclude({
//     age: 20
//   });
// });
