## Faber Heros App

Find your Marvel Heroes with this simple yet 'uncanny' Ionic 3 App. This app was started with the Ionic-cli utilizing the Ionic-Angular Sidenav template.

This starter project utilize the Angular-CLI to run Jasmine/Karma for unit test and also Protractor for E2E test. Also some cool stuff like Prettier and Environment files.

![Screenshots Faber Heros](./src/assets/imgs/screenshots.jpg?raw=true "Faber Heros")


## Install & Start

You need to be running [the latest node LTS](https://nodejs.org/en/download/) or newer

```bash
git clone https://github.com/proartti/faberheros.git
cd faberheros
npm install
npm run browser         # start the application on browser platform
```

or

```bash
yarn
yarn browser            # start the application on browser platform
```

## Environment Variables

An separated configuration file for Webpack was added to manage the IONIC_EVN state.

> Important. Normally the environment files will be ignored and not tracked by git, but I added the files as examples with mock data. In order to run the app you need to provide a valid api_key and secret key from Marvel API

Open the file `src/environments/environment.dev.ts`

```javascript
export const ENV: Environment = {
  url: 'http://gateway.marvel.com',
  public_key: '[YOUR_API_KEY]', // Your api_key here
  private_key: '[YOUR_SECRET_KEY]' // Your secret Key here
};
```

## Run Unit Tests

```bash
npm run test            # run unit tests (ng test)
```

## Run E2E

To initialize the test run the command below:

```bash
npm run e2e
```

This command will add/build browser platform and initialize Protractor to run test in the browser platform.

Three reports will be generated:

* Simplified Terminal report
* Complete report to file `./junitresults.xml`
* Screenshot reports in `./reports-tmp/`
  * Open `./reports-tmp/[current-date]/report.html` to visualize the report


## NPM Script Commands

All of the scripts are listed as following:

| `yarn <script>`                            | Description                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `start`                                    | Run your app on the development server at `localhost:8100/`. Runs on watch for dev builds.                            |
| `clean`                                    | Empty the www/build directory.                                                                                        |
| `build`                                    | A complete build of the application. It uses development settings by default. Use --prod to create an optimized build |
| `lint`                                     | Run the linter against the source .ts files, using the tslint.json config file at the root.                           |
| `serve`                                    | Run the development server at `localhost:8100/`. Runs on watch for dev builds.                                        |
| `browser`                                  | Adds and Run on browser platform. Live reload enabled to `developer` builds                                           |
| `browser:prod`                             | Adds and Run on browser platform on `production` build                                                                |
| `test`                                     | Run tests with watch anabled                                                                                          |
| `test-coverage`                            | Run tests with watch anabled and generates the code coverage report at `./coverage` folder                            |
| `test-ci`                                  | Run the test only one time on a Headless Chrome and generates the code coverage report at `./coverage` folder         |
| `e2e`                                      | Run protractor test on a brwoser platform                                                                             |
| `postinstall`                              | Run after package install to setup protractor enviroment                                                              |

## App Structure

Here is the structure of the app, which folows the Ionic-Angular pattern and guidelines for Ionic apps.

```
.
├── e2e                             # Folder to keep all the e2e App test files
│   └── tsconfig.e2e.json           # TypeScrpt configuration file for protractor build
├── resources                       # Folder to keep Cordova resources
│   ├── android                     # Folder to keep all icons and splash images for Android
│   ├── ios                         # Folder to keep all icons and splash images for iOS
│   ├── icon.png                    # Icon image source
│   └── splash.png                  # Splash image source
├── src                             # App source code
│   ├── app                         # App main files folder
│   |   ├── models                  # Folder to keep all typescript model
│   |   ├── pipes                   # Folder to all pipes
│   |   └── services                # Folder to keep all services
│   ├── assets                      # Folder to keep global app assets
│   ├── environments                # Enviroments files (usually not tracked by git)
│   ├── pages                       # Folder to keep all apps pages conponents
│   ├── theme                       # Folder to keep the global theme files
│   ├── index.html                  # Initial index file to load the app scripts
│   ├── polifills.ts                # Polifills to Angular-cli configuration
│   ├── test.ts                     # Initial test file to global setup
│   └── tsconfig.spec.json          # TypeScript configuration for test environment
├── .angular-cli.json               # Angular-CLI configuration to run the test enviroment
└── .prettierrc                     # Prettier configuration file
└── config.xml                      # Cordova main configuration file
└── ionic.config.json               # Ionic Framework configuration file
└── karma.conf.js                   # Karma configuration file
└── protractor.conf.js              # Protractor configuration file
└── tsconfig.json                   # TypeScript compiler configuration file
└── tsconfig.ng-cli.json            # TypeScript compiler configuration file for Angular-CLI
└── tslint.json                     # Typescript Lint configuration file
└── webpack.config.js               # Webpack extra configurations for environment files
```

## ToDo

* Erros messages in toast or alerts
Better user experience when user is informed of whats going wrong

* Add Android and iOS recources and platforms

* More reactive animations
GSAP to animate buttons reactions to taps and svg effects


## Credit

* Create the app with IONIC-CLI [ionicframework.com/docs/cli/](https://ionicframework.com/docs/cli/)
* The base app UI, components and icons from [ionicframework.com](https://ionicframework.com/framework)

