module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import Container from './container';

export default Container;
`
}
