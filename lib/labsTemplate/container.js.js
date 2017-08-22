module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import { connect } from 'react-redux';
import Action from './action';
import ${componentName} from './${componentName}';

const mapStateToProps = ({ lab }) => ({
});

const mapDispatchToProps = dispatch => ({
});

const Container = connect(mapStateToProps, mapDispatchToProps)(${componentName});

export default Container;
`
}
