import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors, fontSizes, lineHeights, typography } from '../styles';

import { GREEN_CHECKBOX, GRAY_CHECKBOX } from './checkboxIcons';

const CheckboxEl = styled.input`
  position: relative;
  height: 18px;
  width: 18px;
  appearance: none;
  border: 2px solid ${colors.aluminum};
  border-radius: 2px;
  cursor: pointer;
  margin: 0;
  margin-right: 6px;
  vertical-align: middle;
  background-repeat: no-repeat;
  &:checked {
    width: 19px;
    margin-right: 5px;
    border: none;
    background-image: url(${GREEN_CHECKBOX});
    &:disabled {
      background-image: url(${GRAY_CHECKBOX});
      background-color: transparent;
    }
  }
  &:disabled {
    background-color: ${colors.aluminum};
    opacity: 0.5;
  }
  &:hover, &:focus {
    border-color: ${colors.green};
  }
  &:focus {
    outline: none;
  }
`;

const Text = styled.label`
  ${typography.bodyCompact}
  color: ${colors.lightGray};
  vertical-align: middle;
`;

export const Checkbox = ({ label, defaultChecked, disabled, name, onChange, className }) => (
    <div className={className}>
      <CheckboxEl id={name} name={name} type="checkbox" defaultChecked={defaultChecked} checked={defaultChecked} disabled={disabled} onClick={ onChange } />
      {label && (
        <Text htmlFor={name}>{label}</Text>
      )}
    </div>
  );

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
