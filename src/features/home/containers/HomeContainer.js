import React from 'react';
import { connect } from 'react-redux';

import './Containers.css';
import { Body, Header } from '../containers';
import { testRedux as testReduxAction } from '../modules';

const HomeContainer = ({ testData, testRedux }) => (
  <div className="HomeContainer">
    <Header />
    <Body />
  </div>
);

const mapDispatchToProps = {
  testRedux: testReduxAction,
};

const mapStateToProps = ({ home }) => ({
  testData: home.testData
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
