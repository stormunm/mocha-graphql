# graphql-js-test

start out with your files in {resources and test}

copy graphql-js file .babelrc over to the top level directory

copy graphql-js file package.json over to the top level directory

```
yarn
yarn add graphql
source build_alias.sh
```

```
alias sw1='./node_modules/.bin/babel-node ./node_modules/.bin/_mocha --require ./resources/mocha-bootload --check-leaks --full-trace ./test/starWarsQuery-test.js'

alias sw2='./node_modules/.bin/babel-node ./node_modules/.bin/_mocha --require ./resources/mocha-bootload --check-leaks --full-trace ./test/starWarsIntrospection-test.js'

alias sw3='./node_modules/.bin/babel-node ./node_modules/.bin/_mocha --require ./resources/mocha-bootload --check-leaks --full-trace ./test/starWarsValidation-test.js'

alias swall='./node_modules/.bin/babel-node ./node_modules/.bin/_mocha --require ./resources/mocha-bootload --check-leaks --full-trace ./test/*-test.js'
```
