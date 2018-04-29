const snakeCase=require('param-case');
module.exports = function(componentName) {
  if (!componentName) {
    throw new Error('Template name is required')
  }
  componentNameInSnakeCase=snakeCase(componentName);
  containerName=componentName+'Container';
  return `import { connect } from 'react-redux';
import React from 'react';
import ${componentName} from '../components/${componentNameInSnakeCase}.jsx';

class ${containerName} extends React.Component {
	constructor(props){
		super(props);
		this.props=props;
	};
	componentDidMount() {
	}
	render(){
		return (
			<${componentName} />
		);
	}
}
 


const mapStateToProps = (state, ownProps) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => ({

});
export default connect( mapStateToProps, mapDispatchToProps )(${containerName});
`
}
