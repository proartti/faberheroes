## Faber Heros App

This app is made as as test of the Ionic Framework v3.
App was started with the Sidebar ionic-angular template.

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

## Run Unit Tests
```bash
npm run test           # run unit tests (ng test)
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

## Environment Variables

An separated configuration file for Webpack was added to manage the IONIC_EVN state.

> Important. Normally the environment files will be ignored and not tracked by git, but I added the files as examples with mock data. In order to run the app you need to provide a valid api_key and secret key from Marvel API

Open the file `src/environments/environment.dev.ts`

```javascript

export const ENV: Environment = {
  url: 'http://gateway.marvel.com',
  api_key: '[YOUR_API_KEY]',        // Your api_key here
  secret: '[YOUR_SECRET_KEY]'       // Your secret Key here
}

```
