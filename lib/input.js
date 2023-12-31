const inquirer = require('inquirer');

async function promptUser() {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: (input) => {
                if (input.length <= 3) {
                    return true;
                } else {
                    return 'Please enter up to three characters.';
                }
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ];

    return inquirer.prompt(questions);
}

module.exports = { promptUser };
