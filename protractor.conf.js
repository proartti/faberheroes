let HtmlReporter = require('protractor-beautiful-reporter');
let jasmineReporters = require('jasmine-reporters');
let path = require('path');

exports.config = {
  baseDirectory: 'tmp/screenshots',
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    logName: 'Chrome - English',
    version: '',
    platform: 'ANY',
    shardTestFiles: false,
    maxInstances: 2,
    chromeOptions: {
      args: ['--no-sandbox']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });

    require('connect')().use(require('serve-static')('platforms/browser/www/')).listen(4200);
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
      verbosity: 3,
      color: true,
      showStack: false,
    }));

    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      savePath: process.env.JUNIT_REPORT_PATH,
      outputFile: process.env.JUNIT_REPORT_NAME,
      consolidateAll: true
    }));

    // Add a screenshot reporter:
    jasmine.getEnv().addReporter(new HtmlReporter({
      preserveDirectory: false,
      takeScreenShotsOnlyForFailedSpecs: true,
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
      baseDirectory: 'reports-tmp',
      pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {

          var currentDate = new Date(),
              day = currentDate.getDate(),
              month = currentDate.getMonth() + 1,
              year = currentDate.getFullYear();

          var validDescriptions = descriptions.map(function (description) {
              return description.replace('/', '@');
          });

          return path.join(
            day + "-" + month + "-" + year,
            // capabilities.get('browserName'),
            validDescriptions.join('-')
          );
      }
    }).getJasmine2Reporter());
  },
  onComplete() {}
};
