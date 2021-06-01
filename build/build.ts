const { copyFile, remove, writeFile } = require('fs-extra');

async function handlePackageJSON() {
   const keys = [
      'name',
      'version',
      'author',
      'respository',
      'homepage',
      'bugs'
   ];
   const package = require('./package.json');
   const origPackage = require('../package.json');

   // Copy keywords
   keys.forEach((key) => {
      package[key] = origPackage[key];
   });

   await writeFile('./dist/package.json', JSON.stringify(package));
}

async function init() {
   // Copy files
   await copyFile('README.md', './dist/README.md');

   // Create package.json
   await handlePackageJSON();
}

init();
