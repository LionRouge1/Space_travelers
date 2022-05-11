import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import JoinMission from '../JoinMission';
import store from '../../../redux/ConfigStore';

const MockJoinMission = () => (
  <Provider store={store}>
    <JoinMission />
  </Provider>
);

it('Number of join mission', () => {
  render(<MockJoinMission />);
  const headElement = screen.getByRole('heading', { name: /joined Mission/i });
  expect(headElement).toBeInTheDocument();
});
