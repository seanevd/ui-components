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
              title: 'Example: textarea',
              subtitle: 'A range slider with one value',
              sectionFn: () => (
                <TextareaInput label="Label" />
              )
            },
            /*{
              title: 'Example: Double Range',
              subtitle: 'A range slider with a min and max value option',
              sectionFn: () => (
                <TextareaInput
                  label="Pick a number"
                  initialValue={{
                    min: 25,
                    max: 50
                  }}
                  minValue={0}
                  maxValue={100}
                  onRangeUpdate={action('rangeValues')} />
              )
            },
            {
              title: 'Example: Date Range',
              subtitle: 'You can easily create a date range by formatting the labels.',
              info: `
                TextareaInput has a formatLabel prop which accepts a function where you can access the handle labels to format them
                
                ~~~
                const formatLabel = value => (
                  <div>
                    <Hour>{moment().startOf('day').add(value, 'hours').format('h')}</Hour>
                    <Meridian>{moment().startOf('day').add(value, 'hours').format('A')}</Meridian>
                  </div>
                );
                ~~~
              `,
              sectionFn: () => {
                const formatLabel = value => (
                  <div>
                    <Hour>{moment().startOf('day').add(value, 'hours').format('h')}</Hour>
                    <Meridian>{moment().startOf('day').add(value, 'hours').format('A')}</Meridian>
                  </div>
                );

                return <TextareaInput
                        label="time is between"
                        formatLabel={formatLabel}
                        initialValue={{
                          min: 8,
                          max: 17
                        }}
                        minValue={0}
                        maxValue={24}
                        onRangeUpdate={action('rangeValues')} />
              }
            },
            {
              title: 'Example: Custom Value Step',
              subtitle: 'A range slider a step value of 10',
              sectionFn: () => <TextareaInput
                              minValue={0}
                              maxValue={100}
                              onRangeUpdate={action('rangeValues')}
                              step={10} />
            }*/
          ]
        }
      ]
    }
  );