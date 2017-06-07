const fs = require('fs');
const camelCase = require('camelcase');
const reactPresentational = require('react-presentational');
const indexFileTemplate = require('../lib/templates/containerIndex');
const containerFileTemplate = require('../lib/templates/containerMain');
const reducerFileTemplate = require('../lib/templates/reducer');
const actionFileTemplate = require('../lib/templates/action');




const componentName = process.argv[2];
const componentNameInCamelCase = camelCase(componentName);

const dir = './' + componentName;
fs.mkdirSync(dir);

reactPresentational(componentName, true, dir);

const indexFileContent = indexFileTemplate(componentName);
const containerFileContent = containerFileTemplate(componentName);
const actionFileContent = actionFileTemplate(componentNameInCamelCase);
const reducerFileContent = reducerFileTemplate(componentNameInCamelCase);

fs.writeFileSync(`${dir}/index.js`, indexFileContent);
fs.writeFileSync(`${dir}/${componentName}.container.js`, containerFileContent);
fs.writeFileSync(`${dir}/${componentNameInCamelCase}.action.js`, actionFileContent);
fs.writeFileSync(`${dir}/${componentNameInCamelCase}.reducer.js`, reducerFileContent);






