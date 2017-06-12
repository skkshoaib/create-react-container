# create-react-container

Utility function designed to create smart containers for your React components. In case you are using concept of
containers and components in your project, there's too much basic structure that you need to create over and over. This module
tries to reduce that wasted effort.


> NOTE:
> This module is opinionated. It assumes you are using [react-css-modules](https://github.com/gajus/react-css-modules).
> Plus you are following the concept of containers and components to manage your code base for React.

## Setup
``npm i create-react-container -g``

or

``yarn global add create-react-container``

## How to use
Lets assume this is the directory structure of your project
```
app
  |- components
  |- containers
    |- Home
    |- Detail
```

Lets assume, we want to create a component named `Home`. Go inside the `containers` directory from your terminal and
type this command
``react-container Home``

New directory structure would be:
```
app
  |- components
  |- containers
    |- Home
      |- home.action.js
      |- Home.container.js
      |- Home.css
      |- Home.js
      |- Home.reducer.js
      |- Home.spec.js
      |- index.js
    |- Detail
```

This command created 1 directory and 7 files within that directory. Below is the sample content of these files
### home.action.js
```
const sampleAction = (data) => ({
  type: 'SAMPLE_ACTION',
  data
});

export default {
  sampleAction
};
```

### Home.container.js
```
import { connect } from 'react-redux';
import HomePresentational from './Home';

const mapStateToProps = () => ({

});

const mapDispatchToProps = () => ({
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomePresentational);

export default Home;
```
#### Home.css
```
.sample {}
```

#### Home.js
```
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styleCss from './Home.css';

const Home = (props) => {
  return (
    <div styleName="sample">Home</div>
  );
};

Home.propTypes = {
};

export default cssModules(Home, styleCss, { allowMultiple: true });
```

### Home.reducer.js
```
const home = (state = {
  info: {}
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default home;
```
### Home.spec.js
```
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from './Home';

describe('Home test', () => {
  it('should render component', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('.Home').length).toBe(1);
  });
});
```

### index.js
```
import Home from './Home.container';

export default Home
```
