module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  return `import { connect } from 'react-redux';
import ${componentName}Presentational from './${componentName}';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

const DrugPage = connect(mapStateToProps, mapDispatchToProps)(${componentName}Presentational);

export default ${componentName};`
}
