const { promptUser } = require('./lib/input');
const { writeSvgFile } = require('./lib/fileWriter');
const { Triangle, Circle, Square } = require('./lib/shapes');

const svgWidth = 300;
const svgHeight = 200;

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

    const svgString = `
  <svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}">
    ${shape.render()}
    <text x="150" y="112" text-anchor="middle" fill="${textColor}" font-size="16">${text}</text>
  </svg>
  `;


    // Write the SVG string to a file
    writeSvgFile(svgString);

    console.log('Generated logo.svg');
}

generateLogo();
