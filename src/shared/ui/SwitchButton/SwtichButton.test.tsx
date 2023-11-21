import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SwtichButton from './SwtichButton';

describe('SwtichButton Component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(<SwtichButton buttonsNames={['Button 1', 'Button 2', 'Button 3', 'Button 4']} />);
    expect(getByText('Button 1')).toBeInTheDocument();
  });

  it('should change left position on button click', () => {
    const { getByText, getByTestId } = render(<SwtichButton buttonsNames={['Button 1', 'Button 2', 'Button 3', 'Button 4']} />);
    
    const button = getByText('Button 2');
    const divRef = getByTestId('btn-container');

    fireEvent.click(button);

    expect(divRef).toHaveStyle('left: 130px');
  });
});
