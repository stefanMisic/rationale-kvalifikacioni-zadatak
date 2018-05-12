import React from 'react';
import { connect } from 'react-redux';
import { Button, Header } from 'semantic-ui-react';

import { testRedux as testReduxAction } from '../modules';

const HomeContainer = ({ testData, testRedux }) => (
  <div>
    <Header
      as='h1'
      color='red'
    >
      Hello, React!
    </Header>
    <Header
      as='h2'
      color='green'
    >
      Hello, Redux: {testData}!
    </Header>
    <Button
      onClick={() => testRedux('success')}
      primary
    >
      Hello, Semantic UI! Test Redux!
    </Button>
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
