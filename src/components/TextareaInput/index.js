import styled from 'styled-components';

import PbTheme from '../theme';

const { colors, typography } = PbTheme;

const TextareaInputWrapper = styled.div`
  position: relative;
  width: 100%;
  textarea:focus + label {
      top: 7px;
      ${typography.caption}
    }
  }
`;

const Textarea = styled.textarea`
  background-color: ${colors.white};
  border: thin solid ${colors.black12};
  border-radius: 4px;
  padding: 28px 16px 16px;
  color: ${colors.black90};
  height: 100px;
  min-height: 100px;
  min-width: 100%;
  resize: none;
  text-align: left;
  &:focus {
    border: thin solid ${colors.black40};
  }
`;

const TextLabel = styled.label`
  left: 16px;
  position: absolute;
  top: 14px;
  transition: all 0.14s ease-in-out;
  ${typography.subhead1}
`;

const TextareaInput = ({ label, name }) => (
  <TextareaInputWrapper>
    <Textarea id={name} name={name} />
    <TextLabel htmlFor={name}>{label}</TextLabel>
  </TextareaInputWrapper>
  );

export default TextareaInput;
