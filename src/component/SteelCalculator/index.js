import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import BtnMetalRental from '../BtnMetalRental';
import Select from '../Select';
import './steelCalculator.css';
import { steelTypes, metal } from '../data';

class SteelCalculator extends Component {
  state = {
    activeMetalProfile: steelTypes[0],
    selectedMetal: metal[0],
  };

  selectMetal = (metal) => {
    this.setState({ selectedMetal: metal })
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
            placeholder='0'
            step="1"
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
    const { activeMetalProfile, selectedMetal:{ density } } = this.state;
    const result = activeMetalProfile.result(density);
    return (Math.round((result / 10) * 10)) / 1000
  };

  render() {
    const { activeMetalProfile, selectedMetal } = this.state;
    const Img = activeMetalProfile.urlImg;
    return (
      <div className='main'>
        <header>
          <h2 className='logo'>
            <FormattedMessage
              id='detail.titleCalculator'
            />
          </h2>
        </header>
        <BtnMetalRental
          activeMetalProfile={activeMetalProfile}
          setMetalProfile={this.setMetalProfile}
        />
        <Select
          selectMetal = {this.selectMetal}
          selectedMetal={selectedMetal.id}
        />
        <div className='block-metal-profile-img'>
          {
            activeMetalProfile
              ? (
                <h3>
                  <FormattedMessage
                    id={activeMetalProfile.titleProduct}
                  />
                </h3>
              )
              : ''
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
                  ? (
                    <p style={{ marginTop: '30px' }}>{this.renderResult()} кг.</p>
                  )
                  : ''
              }
            </div>
            <div className='metal-profile-img'>
              {
                activeMetalProfile.length !== 0
                  ? (
                    <Img />
                  )
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SteelCalculator;
