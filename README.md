# nrfcloud.com tests

[![Build Status](https://travis-ci.org/nRFCloud/nrfcloud.com-tests.svg?branch=master)](https://travis-ci.org/nRFCloud/nrfcloud.com-tests)
[![Build Status](https://jenkins.nrfcloud.com/buildStatus/icon?job=nrfcloud.com-tests)](https://jenkins.nrfcloud.com/job/nrfcloud.com-tests/)

Browser-based tests for [nRFcloud.com](https://nRFcloud.com/).

## Running the tests

    npm i
    npm test

Copy the file `.env.dist` to `.env` and enter your credentials for [nRFcloud.com](https://nRFcloud.com/). 

You can set the environment variable `HEADLESS` to `0` to run the tests
with a browser window. 

    HEADLESS=0 npm test
