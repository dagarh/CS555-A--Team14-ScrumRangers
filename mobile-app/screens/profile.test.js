import React from 'react';
import {render} from '@testing-library/react-native';
import Profile from './profile';

describe('Profile Page', () => {
  test('renders PROFILE', () => {
    const {getByText} = render(<Profile />);

    expect(getByText('Unknown User')).toBeTruthy();
    expect(getByText('No bio available')).toBeTruthy();
    expect(getByText('No location set')).toBeTruthy();

    expect(getByText('Edit Profile')).toBeTruthy();
  });
});