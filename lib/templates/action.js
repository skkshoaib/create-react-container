module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `const sampleAction = (data) => ({
  type: 'SAMPLE_ACTION',
  data
});

export default {
  sampleAction
};
`
}
