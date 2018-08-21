const fs = require('fs');
const path = require('path');
const args = require('minimist')(process.argv.slice(2));
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const ContainerTemplate = require('./ContainerTemplate');

if (typeof args._[0] === 'string') {
  const name = capitalize(args._[0]);

  if (!fs.existsSync(path.resolve(__dirname, '..', 'src', 'containers', name + 'Container.jsx'))) {
    if (fs.existsSync(path.resolve(__dirname, '..', 'src', 'components', name))) {
      // generating jsx-file
      fs.writeFileSync(path.resolve(__dirname, '..', 'src', 'containers', `${name}Container.jsx`), ContainerTemplate.jsx(name));
    } else {
      console.log(`Please create component ${name} first!`);
    }
  } else {
    console.log(`Containers ${name}Container already exists!`);
  }
} else {
  console.log('-Please enter container name as argument: node container.js Name (without Container suffix)');
}
