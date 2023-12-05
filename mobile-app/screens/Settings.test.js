//test Settings.js
import React from 'react';
import {render} from '@testing-library/react-native';
import Settings from './Settings';

describe('Test Settings Page', () => {
  test('renders settings', () => {
    const {getByText} = render(<Settings />);
    expect(getByText('Posts')).toBeTruthy();
    expect(getByText('Saved')).toBeTruthy();
    expect(getByText('Likes')).toBeTruthy();
    expect(getByText('Comments')).toBeTruthy();
    expect(getByText('Change Password')).toBeTruthy();
  });

});
