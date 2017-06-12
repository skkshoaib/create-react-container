import template from './containerMain.js';

describe('containerMain template', () => {
   it('should return template string', () => {
      const expected = `import { connect } from 'react-redux';
import NamePresentational from './Name';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

const Name = connect(mapStateToProps, mapDispatchToProps)(NamePresentational);

export default Name;
`;
    expect(template('Name')).toBe(expected)
   })

   it('throws when template name is not passed', () => {
    expect(() => template()).toThrow();
  })
})
