module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import { actionGenerator } from '../utility'; //Fix this path to utility
const generator = actionGenerator(__filename);

export default {
}
`
}
