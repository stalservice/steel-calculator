import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { flattenMessages } from './component/utils';
import ruLocaleData from 'react-intl/locale-data/ru';
import ukLocaleData from 'react-intl/locale-data/uk';

import messages from './component/messages';

import './App.css';
import SteelCalculator from './component/SteelCalculator';

addLocaleData([  ...ukLocaleData, ...ruLocaleData ]);

class App extends Component {

  render () {
    const { locale } = this.props;
    return (
      <div className="App">
        <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
          <SteelCalculator />

        </IntlProvider>
      </div>
    )
  }
}

export default App;
