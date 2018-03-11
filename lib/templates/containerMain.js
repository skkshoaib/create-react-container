const snakeCase=require('param-case');
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  componentNameInSnakeCase=snakeCase(componentName);
  containerName=componentName+'Container';
  return `import { connect } from 'react-redux';
import ${componentName} from '../../components/${componentNameInSnakeCase}.jsx';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

const ${containerName} = connect(mapStateToProps, mapDispatchToProps)(${componentName});

export default ${containerName};
`
}
