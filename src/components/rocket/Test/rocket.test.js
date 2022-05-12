import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../../redux/ConfigStore';
import RocketList from '../rocketList';
import MyProfile from '../../pages/MyProfile';

describe('Main page snapshot tests', () => {
  it('RocketList Page renders correctly', () => {
    const rocketsPage = renderer
      .create(
        <Provider store={store}>
          <RocketList />
        </Provider>,
      )
      .toJSON();
    expect(rocketsPage).toMatchSnapshot();
  });

  it('Missions Page renders correctly', () => {
    const missionsPage = renderer
      .create(
        <Provider store={store}>
          <missions />
        </Provider>,
      )
      .toJSON();
    expect(missionsPage).toMatchSnapshot();
  });

  it('MyProfile Page renders correctly', () => {
    const MyProfilePage = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      )
      .toJSON();
    expect(MyProfilePage).toMatchSnapshot();
  });
});
