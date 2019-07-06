/* eslint-disable import/no-extraneous-dependencies */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-plugin-snapshots/commands';
import 'cypress-file-upload';

import { ROOT_PAGE_URL } from '../testConstants';

Cypress.Commands.add('resetAndInitialize', () => {
  // Force the locale to be English
  cy.window()
    .its('localStorage')
    .invoke('setItem', 'REMEMBER_LOCALE', 'en');

  // Prevent beforeunload from blocking navigation
  // from: https://github.com/cypress-io/cypress/issues/2118#issuecomment-445085420
  cy.on('window:before:load', win => {
    const original = win.addEventListener;
    /* eslint-disable prefer-rest-params */
    // eslint-disable-next-line no-param-reassign
    win.addEventListener = function addEventListener() {
      if (arguments && arguments[0] === 'beforeunload') {
        return null;
      }
      return original.apply(this, arguments);
    };
    /* eslint-enable prefer-rest-params */
  });

  cy.visit(ROOT_PAGE_URL);
});

Cypress.Commands.add(
  'uploadFile',
  (
    fileInputSelector,
    fixtureUrl,
    fakeFileName,
    mimeType = 'application/json'
  ) => {
    let encoding;
    let contentPromise;
    if (mimeType === 'application/json') {
      encoding = 'utf8';
      contentPromise = cy.fixture(fixtureUrl).then(JSON.stringify);
    } else if (mimeType.indexOf('image') === 0) {
      contentPromise = cy.fixture(fixtureUrl, 'base64');
    } else if (mimeType === 'application/pdf') {
      encoding = 'base64';
      contentPromise = cy.fixture(fixtureUrl, 'base64');
    } else {
      contentPromise = cy.fixture(fixtureUrl);
    }

    return contentPromise.then(fileContent => {
      cy.get(fileInputSelector).upload(
        { fileContent, fakeFileName, mimeType, encoding },
        { force: true }
      );
    });
  }
);
