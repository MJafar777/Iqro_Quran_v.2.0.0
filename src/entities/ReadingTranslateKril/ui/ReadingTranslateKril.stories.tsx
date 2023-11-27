import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ReadingTranslateKril } from './ReadingTranslateKril';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ReadingTranslateKril',
  component: ReadingTranslateKril,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReadingTranslateKril>;

const Template: ComponentStory<typeof ReadingTranslateKril> = () => (
  <ReadingTranslateKril />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
