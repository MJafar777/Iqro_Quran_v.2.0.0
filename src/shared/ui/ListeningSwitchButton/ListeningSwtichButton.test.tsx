import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListeningSwtichButton from './ListeningSwtichButton';

describe('SwtichButton Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <ListeningSwtichButton
        buttonsNames={['Button 1', 'Button 2', 'Button 3', 'Button 4']}
      />,
    );
    expect(getByText('Button 1')).toBeInTheDocument();
  });

  it('should change left position on button click', () => {
    const { getByText, getByTestId } = render(
      <ListeningSwtichButton
        buttonsNames={['Button 1', 'Button 2', 'Button 3', 'Button 4']}
      />,
    );

    const button = getByText('Button 2');
    const divRef = getByTestId('btn-container');

    fireEvent.click(button);

    expect(divRef).toHaveStyle('left: 130px');
  });
});
