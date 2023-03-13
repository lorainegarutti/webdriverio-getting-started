# Getting started

Project to start studies about Webdriver.io implementation for API and end-to-end tests.

- Web based project
- Master branch is using webdriver.io by itself
- `selenium-standalone` branch is using webdriver.io with selenium

## Required local dependencies

- yarn
- node

### Dev dependencies added

- @wdio/local-runner
- wdio-chromedriver-service
- wdio-mochawesome-reporter
- mochawesome-report-generator
- @wdio/mocha-framework
- @wdio/dot-reporter
- chromedriver

### Running all tests

- clone repository
- yarn
- yarn run test:e2e (tests will run headless by default)
- reports by file will be stored at `test/results`
- yarn run 
