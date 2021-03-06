import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';
import BoardTitleInput from './BoardTitleInput';

const CancelButton = styled.button`
  width: auto;
  height: 43px;
  margin: 15px -5px 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  border: none;
  background: none;
  color: white;
  font-weight: 900;
  text-shadow: 0px 0px 3px #000;
  &:hover {
    transition: all 200ms ease-in-out;
    background-color: none;
    color: #00ffc5;
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0 5px 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 114px;
  height: 43px;
  margin: 15px 18px 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 250 ease-in-out;
  border: none;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
  &:hover {
    transition: all 250ms ease-in-out;
    color: #00baff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: #dbdbdb;
  }
`;

const BoardTitleForm = ({ handleSubmit, cancelAction }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <Field name="boardTitle" component={BoardTitleInput} type="text" />
    </form>
    <ButtonWrapper>
      <CancelButton onClick={() => cancelAction()}>Cancel</CancelButton>
      <SubmitButton onClick={handleSubmit} type="button">
        Create
      </SubmitButton>
    </ButtonWrapper>
  </div>
);

BoardTitleForm.propTypes = {
  cancelAction: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

function validate(values) {
  const errors = {};

  if (!values.boardTitle || values.boardTitle === '') {
    errors.boardTitle = 'Please enter a name for the board';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'boardTitle',
})(BoardTitleForm);
