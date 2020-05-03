import React from 'react';
import Button from "./Button";
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('Text', () => {
        const buttonText = text("Text", "Add action");

        const label = 'Color';
        const options = ['blue', 'red', 'green', 'yellow']
        const defaultValue = 'blue';
        const color = select(label, options, defaultValue);

        return (
            <Button onClick={action('clicked')} color={color}>{buttonText}</Button>
        );
    });