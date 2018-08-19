const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2), { alias: { simple: 's' } });
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const ComponentTemplate = require('./ComponentTemplate');
const { simple } = args;

if (typeof args._[0] === 'string') {
  const name = capitalize(args._[0]);

  if (!fs.existsSync(path.resolve(__dirname, '..', 'src', 'components', name))) {
    // creating folder
    fs.mkdirSync(path.resolve(__dirname, '..', 'src', 'components', name));
    // generating jsx-file
    if (simple) {
      fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, `${name}.jsx`), ComponentTemplate.jsxs(name));
    } else {
      fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, `${name}.jsx`), ComponentTemplate.jsx(name));
    }
    // generating index.js file
    fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, 'index.js'), ComponentTemplate.js(name));
    // generating scss-file
    fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, `${name}.scss`), ComponentTemplate.scss(name));
    // generating test-file (enzyme)
    fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'components', name, `${name}.test.js`), ComponentTemplate.test(name));
  } else {
    console.log(`Component ${name} already exists!`);
  }
} else {
  console.log('-Please enter component name as argument: node component.js Name');
}
