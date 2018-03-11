const paramCase=require('param-case')
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import ${componentName}Container from './${paramCase(componentName)}.container.jsx';

export default ${componentName}Container;
`;
}
