# Logo Generator

A command-line application for generating simple logos. This project is part of the UCI Coding Bootcamp Challenge 10.

## Description

As a freelance web developer, you often need a simple logo for your projects. With the Logo Generator, you can easily create custom logos without relying on a graphic designer. The application allows you to choose the text, text color, and shape of the logo and generates an SVG file that you can use for your projects.

## Technologies Used

The following technologies were used in the development of this application:

- Node.js: A JavaScript runtime environment that allows us to run JavaScript code outside of a web browser.
- JavaScript: The programming language used to write the application logic.
- Inquirer: A Node.js library for prompting and receiving user input from the command line.
- Jest: A JavaScript testing framework used for writing unit tests.
- SVG: Scalable Vector Graphics, a markup language for describing two-dimensional vector graphics.

## File Structure

- `examples/`: Example SVG file(s) created with the app.
- `lib/`: Folder for classes or functions.
  - `shapes.js`: Exports `Triangle`, `Circle`, and `Square` classes.
  - `shapes.test.js`: Jest tests for shapes.
  - `input.js`: Contains functions for prompting user input.
  - `fileWriter.js`: Contains functions for writing SVG file.
- `.gitignore`: Indicates which folders and files Git should ignore.
- `index.js`: Runs the application using imports from `lib/`.
- `package.json`: Project configuration file.
- `README.md`: App description, setup and usage instructions.

## Usage

1. Make sure you have Node.js installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Install the dependencies by running the command: `npm install`.
5. Run the application using the command: `node index.js`.
6. Follow the prompts to enter the text, text color, and shape for your logo.
7. Once all input is provided, the application will generate an SVG file named `logo.svg`.
8. You can find the generated SVG file in the `examples/` folder.
9. Open the `logo.svg` file in a browser to view the generated logo.

## Walkthrough Video

For a detailed walkthrough of how to run the program, you can watch the following video:

[Logo Generator Walkthrough Video](https://drive.google.com/file/d/1M68rt1BxYNZD0b0ag5Bnhwu8CdgoxbeC/view)

## Contributions

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining your changes and the motivation behind them.

## License

This project is licensed under the [MIT License](LICENSE).
