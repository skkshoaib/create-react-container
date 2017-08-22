module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import ActionTypes from './actionTypes';

export default {};
`
}
