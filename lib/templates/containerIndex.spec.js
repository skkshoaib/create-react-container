import template from './containerIndex.js';

describe('containerIndex template', () => {
  it('should return template string', () => {
    const expected = `import Name from './Name.container';

export default Name;
`;
     expect(template('Name')).toBe(expected)
  })

  it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
  })
})
