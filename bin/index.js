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
const isValidType=function(type){
  return type=="container" || type=="component";
}
const isContainer=function(type){
  return type=="container";
}
const type = process.argv[2].toLowerCase();
if(!isValidType(type)){
  console.error("Pass valid types only i.e. component and container")
}
const componentName = process.argv[3];
const componentNameInSnakeCase = snakeCase(componentName);
const componentNameInCamelCase = camelCase(componentName);
const parentDir='./src/main/webapp';
const containerDir = parentDir+'/js/containers';
const componentDir = parentDir+'/js/components';
const reducerDir = parentDir+'/js/reducers';

const styleDir = parentDir+'/style/components';
mkdirSync(parentDir+'/js');
if(isContainer(type)){
  mkdirSync(containerDir);
}
mkdirSync(componentDir);
mkdirSync(reducerDir);

mkdirSync(parentDir+'/style');
mkdirSync(parentDir+'/style/components');

const indexFileContent = indexFileTemplate(componentName);
const containerFileContent = containerFileTemplate(componentName);
const actionFileContent = actionFileTemplate(componentNameInCamelCase);
const reducerFileContent = reducerFileTemplate(componentNameInCamelCase);
const componentFileContent = componentFileTemplate(componentName);
const styleFileContent = styleFileTemplate(componentName);

if(isContainer(type)){
	fs.writeFileSync(`${containerDir}/${componentNameInSnakeCase}.container.jsx`, containerFileContent);
	fs.writeFileSync(`${reducerDir}/${componentNameInSnakeCase}.reducer.js`, reducerFileContent);
}
fs.writeFileSync(`${componentDir}/${componentNameInSnakeCase}.jsx`, componentFileContent);
fs.writeFileSync(`${styleDir}/${componentNameInSnakeCase}.scss`, styleFileContent);






