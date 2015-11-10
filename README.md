# jspm-test
Reproduce an error for watch/building jspm bundles

## Setup
1. Run `npm run setup` which will install both npm and jspm dependencies
2. Run `npm run watch` which will start a watchr task running jspm-dev-builder
3. Modify `lib/App.js` a couple times until you see an error.
