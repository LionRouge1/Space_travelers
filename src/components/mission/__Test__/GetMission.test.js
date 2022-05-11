import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import GetMission from "../GetMission";
import { Provider } from "react-redux";
import store from '../../../redux/ConfigStore'

const MockGetMission = () => {
  return (
    <Provider store={store}>
      <GetMission />
    </Provider>
  )
};

describe('Testing GetMission', () => {
  it('Verified if there is element table in document', () => {
    render( <MockGetMission /> );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  })
});