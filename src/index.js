import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ja from 'react-intl/locale-data/ja';
import configureStore from './configureStore';
import View from './containers/View';
import { DEFAULT_LOCALE, getBrowserLocale, messages } from './utils/I18N';
import { getSavedFileMeta } from './utils/localStore';
import './index.css';

const savedFileDict = getSavedFileMeta();
const initialState = {
  locale: getBrowserLocale(),
  data: { fileDict: getSavedFileMeta() },
  ui: { selectedFilename: Object.keys(savedFileDict)[0] },
};
const initStore = configureStore(initialState);

addLocaleData([...en, ...ja]);

const ConnectedIntlProvider = connect(({ locale }) => ({
  locale,
  messages: messages[locale],
}))(IntlProvider);

function render() {
  ReactDOM.render(
    <Provider store={initStore}>
      <ConnectedIntlProvider defaultLocale={DEFAULT_LOCALE}>
        <View />
      </ConnectedIntlProvider>
    </Provider>,
    global.document.getElementById('app')
  );
}

render();
