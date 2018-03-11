const snakeCase=require('param-case');
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import React, { PropTypes } from 'react';
require('../../style/components/${snakeCase(componentName)}.scss');
const ${componentName} = (props) => {
  return (
    <div className="${snakeCase(componentName)}">${componentName}</div>
  );
};
${componentName}.propTypes = {
};
export default ${componentName};
`
};
