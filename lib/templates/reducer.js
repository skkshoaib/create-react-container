module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `const ${componentName} = (state = {
  info: {}
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ${componentName};
`
}
