# CfgNgLib

## Introduction

This project was created with the purpose of providing a demo, that could be published into an NPM package.

## Project creation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

Workspace was generated with the command `ng new cfg-ng-lib --no-create-application --directory=.`
The lib was generated with `ng generate library cfg-ng-lib`


## Library config 

Creating a configurable angular library

### credits

https://www.usefuldev.com/post/Angular:%20Creating%20configurable%20libraries%20with%20angular%20cli


### How to create a configurable angular library

1. create a config interface in the lib folder: cfg-ng-lib.config.ts
```
export interface CfgNgLibConfig {
    language: string;
}
```

2. add a token const in the lib folder: cfg-ng-lib.config.token.ts
```
export const CFG_NG_LIB_CONFIG = new InjectionToken(
    'CFG_NG_LIB_CONFIG'
);
```

3. Modify the lib module:
Open cfg-ng-lib.module.ts and add the following:

```
export class CfgNgLibModule { 
  static forRoot(cfgNgLibConfig: CfgNgLibConfig): ModuleWithProviders<CfgNgLibModule> {
    return {
      ngModule: CfgNgLibModule,
      providers: [
        { provide: CFG_NG_LIB_CONFIG, useValue: cfgNgLibConfig }
      ]
    }
  };
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
