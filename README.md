# Bounding Box Labeler

### Todo

- Keyboard shortcuts to go to next image
- onBeforeUnload to avoid unwanted reload, etc.
- export image size as well
- custom label per box (also with keyboard shortcuts)

## Installation and Usage

#### Development

```sh
$ npm start
```

#### Docker build simulation

```sh
$ npm run deploy-test
```

#### Tests

Unit tests and lint:

```sh
$ npm test
```

#### Rendering efficiency checks

Add the following to src/index.js (do not commit it to git or release it to production, though!):

```js
if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React, {
    // Whitelist for components, using component name
    // include: [/^(Container|MyComponent)/],
    // Blacklist for components, using component name
    // exclude: [/^(Container|MyComponent)/],
  });
}
```
