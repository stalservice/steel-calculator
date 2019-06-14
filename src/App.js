import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { flattenMessages } from './component/utils';
import ruLocaleData from 'react-intl/locale-data/ru';
import ukLocaleData from 'react-intl/locale-data/uk';

import messages from './component/messages';

import './App.css';
import SteelCalculator from './component/SteelCalculator';

addLocaleData([  ...ukLocaleData, ...ruLocaleData ]);

let locale =
  (navigator.languages && navigator.languages[0])
  || navigator.language
  || navigator.userLanguage
  || 'uk-UK';

class App extends Component {

  state = {
    language: 'uk-UK'
  };

  toggleLanguage = () => {
    this.setState(({language}) => ({
      language: language === 'uk-UK' ? 'ru-RU' : 'uk-UK'
    }))
  };

  render () {
    const { language } = this.state;
    return (
      <div className="App">
        <IntlProvider locale={locale} messages={flattenMessages(messages[language])}>
          <SteelCalculator
            toggleLanguage={this.toggleLanguage}
            language={language}
          />

        </IntlProvider>
      </div>
    )
  }
}

export default App;
