module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './style.css';


class ${componentName} extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

${componentName}.propTypes = {
};

export default cssModules(${componentName}, styleCss, { allowMultiple: true });
`
}
