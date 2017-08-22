module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import { combineReducers } from 'redux';
import data from './reducer';

const reducer = combineReducers({
  data
});

export default reducer;
`
}
