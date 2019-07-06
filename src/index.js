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
import './index.css';

const initialState = {
  locale: getBrowserLocale(),
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
