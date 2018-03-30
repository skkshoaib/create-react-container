const paramCase = require('param-case');

module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  const componentNameInParamCase = paramCase(componentName);

  return `import {ActionTypes} from './${componentNameInParamCase}.action.js';
const initialState={
    data:[]
};
const ${componentName}Reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default ${componentName}Reducer;
`
}
