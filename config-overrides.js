/* eslint-disable import/no-extraneous-dependencies, no-param-reassign, no-console */
const { override, addBabelPlugin, addWebpackAlias } = require('customize-cra');

// Adapted from now-incompatible react-app-rewire-hot-loader
// License: https://github.com/cdharris/react-app-rewire-hot-loader/blob/master/LICENCE.md
function rewireHotLoader(config) {
  // Find a rule which contains eslint-loader
  const usesEslintLoader = u =>
    typeof u === 'object' && u.loader && u.loader.includes('eslint-loader');
  const rule = config.module.rules.find(
    r => r.use && r.use.some(usesEslintLoader)
  );

  if (rule) {
    const use = rule.use.find(usesEslintLoader);

    if (use) {
      // Inject the option for eslint-loader
      use.options.emitWarning = true;
    }
  }

  config = addWebpackAlias({ 'react-dom': '@hot-loader/react-dom' })(config);
  config = addBabelPlugin('react-hot-loader/babel')(config);

  return config;
}

// Remove the data-cy attributes used for integration testing
function removeDataCyAttributes(config) {
  // Leave in the attributes for the build to be used for tests
  if (process.env.IS_TEST_BUILD) {
    // eslint-disable-next-line no-console
    console.warn('Performing build for tests. Leaving in data-cy attributes.');

    return config;
  }

  return addBabelPlugin(['remove-jsx-attributes', { patterns: ['^data-cy$'] }])(
    config
  );
}

const overridesByNodeEnv = {
  // Overrides applied when `npm start`-ing the app, running in dev mode.
  development: [
    rewireHotLoader,

    // Include the styled-components babel plugin for
    // generating non-gibberish classNames
    addBabelPlugin('styled-components'),
  ],

  // Overrides applied when `npm run build`-ing the app. (NOT just on the production environment)
  production: [removeDataCyAttributes],
};

module.exports = override(...(overridesByNodeEnv[process.env.NODE_ENV] || []));
