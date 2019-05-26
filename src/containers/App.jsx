import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoSheet from '../components/TodoSheet';
import testAction from '../actions/actions';

const StyledButton = styled(Button)`
  background-color: red;
  border: 1px solid black;
`;

const App = (props) => {
  const { testResult, testAction } = props;
  return (
    <div className="app">
      <h1>Herbert React App</h1>
      <TodoSheet />
      <StyledButton color="primary" onClick={() => testAction('success')}>Redux test</StyledButton>
      <p className="test-result">{testResult}</p>
    </div>
  );
};

App.propTypes = {
  testResult: PropTypes.string.isRequired,
  testAction: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  testResult: store.test.testSuccess,
});

const mapDispatchToProps = {
  testAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
