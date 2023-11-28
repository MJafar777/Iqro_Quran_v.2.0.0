import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ReadingTranskriptLotin } from './ReadingTranskriptLotin';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'pages/ReadingTranskriptLotin',
  component: ReadingTranskriptLotin,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ReadingTranskriptLotin>;

const Template: ComponentStory<typeof ReadingTranskriptLotin> = () => (
  <ReadingTranskriptLotin />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
