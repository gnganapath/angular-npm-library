
# AngularLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Publish AngularLibrary

Sing up at npmjs.com

email, user, pwd are required, Email has to be verify with link

# Build AngularLibrary

Angular app or workspace do angular library build

ng build ng-logger (pacakge.json at library ngs-logger-gn) to avoid naming convention

go to workspace->dist->library

cmd:>npm publish
username : npmjs username
password: ****
email public: mandate to get OTP to publish
#
https://www.npmjs.com/package/ngs-logger-gn

# Create AngularLibrary from existing angular project
Assumtion : ng new Angular-App (created working with sample boiler plate code)

ng g library ngx-logger-matui

It create angular-app-> project -> ngx-logger-mat 

Src
src/lib
ng-packagr.json
package.json
...
..

to add dependent npm libraries
 go to angular-app->project->src->lib

 npm i @material-ui, ....

 then add it ng-package export ,

 components, service, pipes, models we can use it.


