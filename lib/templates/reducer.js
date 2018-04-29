const paramCase = require('param-case');

module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  const componentNameInParamCase = paramCase(componentName);

  return `export const types={
};
const initialState={
    
};
export default (state = initialState, action) => {
    const {payload}=action;
  switch (action.type) {
    default:
      return state;
  }
};
export const actions={

};
`
}
