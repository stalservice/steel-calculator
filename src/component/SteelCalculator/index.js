import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import BtnMetalRental from '../BtnMetalRental';
import Select from '../Select';

import './steelCalculator.css';
import {metal} from "../../data";

class SteelCalculator extends Component {

  state = {
    activeMetalProfile: '',
    valueSelectMetal: '',
    selectMetal: ''
  };

  setValueMetal = (value, obj) => {
    this.setState({
      valueSelectMetal: value,
      selectMetal: obj
    })
  };

  setMetalProfile = (type) => {
    this.setState({ activeMetalProfile: {...type} })
  };

  handleChange = (value, key) => {
    this.setState(({ activeMetalProfile }) => {
      activeMetalProfile.parameters[key].value = value;
      return { activeMetalProfile }
    })
  };

  renderFields = () => {
    const { activeMetalProfile } = this.state;

    return Object.keys(activeMetalProfile.parameters).map(key => {
      const { title, value, max, min } = activeMetalProfile.parameters[key];
      return (
        <div key={key}>
          <p>
            <FormattedMessage id={title} />
          </p>
          <input
            className='inputValue'
            placeholder='0.0'
            step="0.1"
            max={max}
            min={min}
            type="number"
            value={value}
            onChange={(e) => this.handleChange(e.target.value, key)}
          />
        </div>
      )
    })
  };

  renderResult = () => {
    const { activeMetalProfile, selectMetal:{ density } } = this.state;
    const result = activeMetalProfile.result(density);
    return (Math.round((result / 10) * 10)) / 1000
  };

  render() {
    const { activeMetalProfile, valueSelectMetal, selectMetal } = this.state;
    const { language, toggleLanguage } = this.props;
    return (
      <div className='main'>
        <header>
          <h2 className='logo'>
            <FormattedMessage
              id='detail.titleCalculator'
            />
          </h2>
          <button
            onClick={toggleLanguage}
          >
            {language === 'uk-UK' ? 'uk' : 'ru'}
          </button>
        </header>

        <BtnMetalRental
          activeMetalProfile={activeMetalProfile}
          setMetalProfile={this.setMetalProfile}
        />
        <Select
          setValueMetal = {this.setValueMetal}
          valueSelectMetal={valueSelectMetal}
        />

        <div className='block-metal-profile-img'>
          {
            activeMetalProfile ?
              <h3>
                <FormattedMessage
                  id={activeMetalProfile.titleProduct}
                />
              </h3> : ''
          }
          <div className='details-container'>
            <div>
              {
                activeMetalProfile
                  ? this.renderFields()
                  : null
              }
              {
                activeMetalProfile
                  ? (<p style={{ marginTop: '30px' }}>{this.renderResult()} кг.</p>)
                  : ''
              }
            </div>

            <div className='metal-profile-img'>
              {
                activeMetalProfile.length !== 0 ? (
                  <img src={activeMetalProfile.urlImg} alt={activeMetalProfile.type} />
                ) : null
              }
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default SteelCalculator;