import React from 'react';
// import moment from 'moment';
// import styled from 'styled-components';
import {
  // action,
  storiesOf
} from '@storybook/react';

import TextareaInput from './TextareaInput';
// import { fontSizes } from '../styles';

storiesOf('Form', module)
  .addWithChapters(
    'TextareaInput',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import TextareaInput from 'ui-components/TextareaInput';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: textarea default empty',
              sectionFn: () => (
                <TextareaInput
                  label="Label"
                  name="first"
                />
              )
            },
            {
              title: 'Example: textarea with existing text',
              sectionFn: () => (
                <TextareaInput
                  label="Label"
                  name="firstz"
                >
                  This text was hardcoded into stories. The structure of this component follows how a `textarea` should look.
                </TextareaInput>
              )
            },
            {
              title: 'Example: textarea with helper text',
              sectionFn: () => (
                <TextareaInput
                  label="Labely"
                  helper="Helper text."
                  error=""
                  name="second"
                />
              )
            },
            {
              title: 'Example: textarea with error text',
              sectionFn: () => (
                <TextareaInput
                  label="Label"
                  helper="Helper text."
                  error="Errors will override helper text."
                  name="third"
                />
              )
            },
            {
              title: 'Example: textarea disabled',
              sectionFn: () => (
                <TextareaInput
                  label="Label"
                  helper="Helper text."
                  disabled
                  name="fourth"
                />
              )
            },
          ]
        }
      ]
    }
  );