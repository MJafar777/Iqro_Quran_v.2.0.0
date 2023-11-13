import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ReadingPage from './ReadingPage';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ReadingPage',
  component: ReadingPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReadingPage>;

const Template: ComponentStory<typeof ReadingPage> = () => <ReadingPage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
