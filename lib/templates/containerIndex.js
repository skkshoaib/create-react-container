module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import ${componentName} from './${componentName}.container';

export default ${componentName};
`;
}
