const snakeCase=require('param-case');
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `require('../../style/components/${snakeCase(componentName)}.scss');
import React from 'react';
import PropTypes from 'prop-types'; 
const ${componentName} = (props) => {
	return (
		<div className="${snakeCase(componentName)}">${componentName}</div>
	);
};
${componentName}.propTypes = {
};
${componentName}.defaultProps = {
};
export default ${componentName};
`
};
