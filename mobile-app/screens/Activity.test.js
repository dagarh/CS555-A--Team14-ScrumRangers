//test Activity.js
import React from 'react';
import {render} from '@testing-library/react-native';
import Activity from './Activity';

describe('Test Activity Page', () => {
  test('renders events', () => {
    const { getByPlaceholderText, getByText  } = render(<Activity />);
    const textinput = getByPlaceholderText('Enter Location');
    const pressablebutton = getByText('Search Events');
    
    expect(textinput).toBeTruthy();
    expect(pressablebutton).toBeTruthy();
  });

});
