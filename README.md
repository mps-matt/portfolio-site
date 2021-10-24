# Matt Stark - Portfolio Site

Hello, this project is just the source code for my own personal portfolio.
It is a simple Angular-only frontend, currently without any API.

It follows a CI/CD process so PRs must build, have all tests pass and pass linting before they can merge in to main.
A Pre-commit is setup to run ng lint --fix and commit any linting changes. This is to ensure code looks and feels the same throughout the project. If, for any reason, the code being commited does not pass linting and can't be automatically fixed, the commit will not be prcoess. Please fix the code that does not follow the linting rule and commit again. 

You can famisliarise yourself with the linting rules in the .eslintrc.json file at the root of the repository.

Run `npm install` after first cloning the repositroy to pull down the required NPM packages.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Running linting

Run `npm run lint` or `npm run lint-fix` to lint the project

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
