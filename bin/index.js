#!/usr/bin/env node

const fs = require('fs');
const camelCase = require('camelcase');
const snakeCase = require('param-case');
const indexFileTemplate = require('../lib/templates/containerIndex');
const containerFileTemplate = require('../lib/templates/containerMain');
const reducerFileTemplate = require('../lib/templates/reducer');
const actionFileTemplate = require('../lib/templates/action');
const componentFileTemplate = require('../lib/templates/component');
const styleFileTemplate = require('../lib/templates/style');


const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') console.log("Directory already exists "+dirPath);
  }
}

const componentName = process.argv[2];
const componentNameInSnakeCase = snakeCase(componentName);
const componentNameInCamelCase = camelCase(componentName);
const parentDir='./src/main/webapp';
const dir = parentDir+'/js/containers/' + componentName;
const componentDir = parentDir+'/js/components';
const styleDir = parentDir+'/style/components';
mkdirSync(parentDir+'/js');
mkdirSync(parentDir+'/js/containers');
mkdirSync(parentDir+'/js/components');
mkdirSync(parentDir+'/style');
mkdirSync(parentDir+'/style/components');
mkdirSync(dir);

const indexFileContent = indexFileTemplate(componentName);
const containerFileContent = containerFileTemplate(componentName);
const actionFileContent = actionFileTemplate(componentNameInCamelCase);
const reducerFileContent = reducerFileTemplate(componentNameInCamelCase);
const componentFileContent = componentFileTemplate(componentName);
const styleFileContent = styleFileTemplate(componentName);

fs.writeFileSync(`${dir}/index.js`, indexFileContent);
fs.writeFileSync(`${dir}/${componentNameInSnakeCase}.container.jsx`, containerFileContent);
fs.writeFileSync(`${dir}/${componentNameInSnakeCase}.action.js`, actionFileContent);
fs.writeFileSync(`${dir}/${componentNameInSnakeCase}.reducer.js`, reducerFileContent);
fs.writeFileSync(`${componentDir}/${componentNameInSnakeCase}.jsx`, componentFileContent);
fs.writeFileSync(`${styleDir}/${componentNameInSnakeCase}.scss`, styleFileContent);






