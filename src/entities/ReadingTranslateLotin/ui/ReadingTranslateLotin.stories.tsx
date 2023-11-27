import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ReadingTranslateLotin } from './ReadingTranslateLotin';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ReadingTranslateLotin',
  component: ReadingTranslateLotin,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReadingTranslateLotin>;

const Template: ComponentStory<typeof ReadingTranslateLotin> = () => (
  <ReadingTranslateLotin />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
