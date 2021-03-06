import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Input from '../atoms/BoardTitleInput';
import DisableListEditMode from '../atoms/DisableListEditMode';

const ListEditingMode = ({ disableListEditMode, handleSubmit }) => (
  <ListEditingModeWrapper>
    <form onSubmit={handleSubmit}>
      <Field name="listItem" component={Input} type="text" placeholder="Add a list" />
    </form>
    <DisableListEditMode disable={disableListEditMode} />
  </ListEditingModeWrapper>
);

ListEditingMode.propTypes = {
  disableListEditMode: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
const ListEditingModeWrapper = styled.div`
  padding: 20px 12px;
  height: 75px;
  margin: 20px 0;
  background-color: rgba(255, 255, 255, 0.45);
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export default ListEditingMode;
