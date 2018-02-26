# nrfcloud.com tests

[![Build Status](https://travis-ci.org/nRFCloud/nrfcloud.com-tests.svg?branch=master)](https://travis-ci.org/nRFCloud/nrfcloud.com-tests)  
[![Greenkeeper badge](https://badges.greenkeeper.io/nRFCloud/nrfcloud.com-tests.svg)](https://greenkeeper.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)  
[![DeepScan Grade](https://deepscan.io/api/projects/833/branches/1774/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=833&bid=1774)
[![Known Vulnerabilities](https://snyk.io/test/github/nrfcloud/nrfcloud.com-tests/badge.svg)](https://snyk.io/test/github/nrfcloud/nrfcloud.com-tests)

Browser-based tests for [nRFcloud.com](https://nRFcloud.com/).

## Running the tests

    npm i
    npm test

Copy the file `.env.dist` to `.env` and enter your credentials for [nRFcloud.com](https://nRFcloud.com/). 

You can to run the tests with a browser window: 

    npx cypress open
