# nrfcloud.com tests

[![Build Status](https://travis-ci.org/nRFCloud/nrfcloud.com-tests.svg?branch=master)](https://travis-ci.org/nRFCloud/nrfcloud.com-tests)
[![Greenkeeper badge](https://badges.greenkeeper.io/nRFCloud/nrfcloud.com-tests.svg)](https://greenkeeper.io/)
[![DeepScan Grade](https://deepscan.io/api/projects/833/branches/1774/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=833&bid=1774)
[![Known Vulnerabilities](https://snyk.io/test/github/nrfcloud/nrfcloud.com-tests/badge.svg)](https://snyk.io/test/github/nrfcloud/nrfcloud.com-tests)

Browser-based tests for [nRFcloud.com](https://nRFcloud.com/).

## Running the tests

    npm i
    npm test

Copy the file `.env.dist` to `.env` and enter your credentials for [nRFcloud.com](https://nRFcloud.com/). 

You can set the environment variable `HEADLESS` to `0` to run the tests
with a browser window. 

    HEADLESS=0 npm test
