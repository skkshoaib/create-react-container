#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const pascalCase = require('pascalcase');

const componentName = process.argv[2];
if (!componentName) {
  throw new Error('Template name is required')
}
const componentNameInPascalCase = pascalCase(componentName);

const dir = './' + componentNameInPascalCase;
fs.mkdirSync(dir);
fs.mkdirSync(`${dir}/components`);

const templatesPath = path.resolve(__dirname, '../lib/labsTemplate');
fs.readdirSync(templatesPath).forEach(function(templateName,index){
  var path = templatesPath + "/" + templateName;
  let template = require(path);
  let content = template(componentNameInPascalCase);

  let fileName = templateName.replace(/\.js$/,'');
  if(fileName == 'component.js') {
  	fileName = fileName.replace('component', componentNameInPascalCase);
  }
  fs.writeFileSync(`${dir}/${fileName}`, content);
});
