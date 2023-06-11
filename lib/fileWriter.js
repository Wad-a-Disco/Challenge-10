const fs = require('fs');

function writeSvgFile(svgString) {
  fs.writeFileSync('logo.svg', svgString);
}

module.exports = {
  writeSvgFile,
};
