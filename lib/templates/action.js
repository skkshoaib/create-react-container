
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  actionTypeName=componentName+'ActionTypes';
  return `export const ${actionTypeName}={
    
};
`
}
