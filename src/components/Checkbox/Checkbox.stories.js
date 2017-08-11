import React from 'react';
import { action, storiesOf } from '@storybook/react';
import backgrounds from "@storybook/addon-backgrounds";

import Checkbox from './';
import { colors } from '../styles';

storiesOf('Atoms', module)
  .addDecorator(backgrounds([
    { name: "white", value: colors.white, default: true },
    { name: "green", value: colors.greenBackground },
  ]))
  .addWithChapters(
    'Checkbox',
    {
      info: `
        Usage

        ~~~
        import React from 'react';
        import Checkbox from 'ui-components/Checkbox';
        ~~~
      `,
      chapters: [
        {
          sections: [
            {
              title: 'Example: Single Checkbox',
              subtitle: 'A default checkbox with no props',
              sectionFn: () => (
                <Checkbox
                  onChange={action('clicked')} />
              )
            },
            {
              title: 'Example: Disabled State',
              subtitle: 'Disabled checkbox, not checked',
              sectionFn: () => (
                <Checkbox
                  disabled
                  onChange={action('clicked')} />
              ),
              options: {
                showSource: false
              }
            },
            {
              title: 'Example: Disabled State',
              subtitle: 'Disabled checkbox, checked',
              sectionFn: () => (
                <Checkbox
                  disabled
                  defaultChecked
                  onChange={action('clicked')} />
              ),
              options: {
                showSource: false
              }
            },
            {
              title: 'Example: Checkbox with labels',
              subtitle: 'Regular checkboxes with labelled text (also, these have not been designed, styling for labels are not approved)',
              sectionFn: () => (
                <div>
                  <Checkbox name="first" label="With a associated text" />
                  <Checkbox name="second" label="Second line of information" defaultChecked />
                  <Checkbox name="third" label="Another line of text, disabled" disabled />
                  <Checkbox name="third" label="Another line of text, disabled and checked" disabled defaultChecked />
                </div>
              ),
              options: {
                showSource: false
              }
            }
          ]
        }
      ]
    });
  /*.add('Checkbox', () => (
    <div>
      <ComponentDescription title="Checkbox" description="A basic checkbox component."/>
      {examples.map((example, idx) => (
        <Example dark title={example.title} description={example.description} key={idx}>
          {example.render()}
        </Example>
      ))}
    </div>
  ));*/
