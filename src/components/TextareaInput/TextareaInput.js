import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { colors, typography } from '../styles';

const TextareaInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Textarea = styled.textarea`
  background-color: ${colors.white};
  border: thin solid ${colors.black40};
  border-radius: 4px;
  box-sizing: border-box;
  padding: 28px 16px 16px;
  color: ${colors.black90};
  height: 100px;
  min-height: 100px;
  min-width: 100%;
  resize: none;
  text-align: left;
  &:hover {
    border-width: 2px;
    padding: 27px 15px 15px;
  }
  &:focus {
    border: 2px solid ${colors.green};
    outline: 0;
    padding: 27px 15px 15px;
    + label {
      color: ${colors.green};
    }
  }
  ${typography.subhead1}
`;

const TextLabel = styled.label`
  color: ${colors.black60};
  left: 16px;
  position: absolute;
  top: ${(props) => {
    if (props.open) {
      return '7px';
    } else {
      return '14px';
    }
  }};
  transition: all 0.14s ease-in-out;
  ${(props) => {
    if (props.open) {
      return typography.caption
    } else {
      return typography.subhead1
    }
  }}
`;

class TextareaInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedOrHasValue: false
    };
  }

  focused = () => {
    this.setState({
      focusedOrHasValue: true
    })
  }

  blurred = (e) => {
    if (_.get(e, 'target.value', false)) {
      this.setState({
        focusedOrHasValue: true
      })
    }
    else {
      this.setState({
        focusedOrHasValue: false
      })
    }
  }

  render() {
    const { label, name } = this.props;
    return (
      <TextareaInputWrapper>
        <Textarea onFocus={this.focused} onBlur={this.blurred} id={name} name={name} />
        <TextLabel open={this.state.focusedOrHasValue} htmlFor={name}>{label}</TextLabel>
      </TextareaInputWrapper>
    );
  }
}

export default TextareaInput;
