const snakeCase = require('param-case');
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `@import "../lib/variables";
@import "../lib/css3-mixins";
.${snakeCase(componentName)}{
}`;
}
