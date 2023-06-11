const { promptUser } = require('./lib/input');
const { writeSvgFile } = require('./lib/fileWriter');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function generateLogo() {
  const userInput = await promptUser();

  const shapeColor = userInput.shapeColor;
  const textColor = userInput.textColor;
  const text = userInput.text;
  const shapeType = userInput.shape;

  let shape;

  switch (shapeType) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape selected.');
      return;
  }

  shape.setColor(shapeColor);

  // Generate the SVG string
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="120" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  // Write the SVG string to a file
  writeSvgFile(svgString);

  console.log('Generated logo.svg');
}

generateLogo();
