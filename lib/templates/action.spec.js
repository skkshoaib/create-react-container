import template from './action.js';

describe('action template', () => {
  it('should return template string', () => {
    const expected = `const sampleAction = (data) => ({
  type: 'SAMPLE_ACTION',
  data
});

export default {
  sampleAction
};
`;

  expect(template('Name')).toBe(expected)
})

it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
})
})
