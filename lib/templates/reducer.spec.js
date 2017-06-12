import template from './reducer.js';

describe('reducer template', () => {
  it('should return template string', () => {
     const expected = `const Name = (state = {
  info: {}
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Name;
`;

    expect(template('Name')).toBe(expected)
  })

  it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
  })
})