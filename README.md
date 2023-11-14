# Command Injection Demonstration in Express Application

## Overview
This repository contains an Express.js application designed to demonstrate the security implications of command injection vulnerabilities. The code showcases how unsanitized user input in system commands can pose significant security risks, and provides a practical example of mitigating these risks through input validation and the use of safer methods like `execFile`.

## Features
- Basic Express.js server setup.
- EJS for dynamic content rendering.
- Demonstration of a command injection vulnerability using `exec`.
- Implemented security enhancements with input validation and `execFile`.

## Security Note
This application was created for educational purposes to highlight the importance of validating and sanitizing user inputs in web applications, especially when dealing with system-level operations.

## Related Article
For an in-depth discussion and analysis of the concepts and vulnerabilities explored in this code, please refer to my comprehensive article on LinkedIn. You can read the article here: [Intro to Command Injection](#).

## Installation and Usage
- Clone the repository.
- Run `npm install` to install dependencies.
- Start the server with `node app.js`.
- Access the application through `http://localhost:3000`.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
