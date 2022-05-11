import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import InsertMission from "../InsertMission";

const MockHandleClick = jest.fn;

describe('Testing InsertMission', () => {
  describe.each([
    [true, 'Active member', 'Leave Mission'],
    [false, 'NOT A MEMBER', 'Join Mission']
  ])('Check status: %s', (status, expected1, expected2) => {
    
    it('Check join button', () => {
      render(
        <InsertMission
        missionId="1"
        missionName="Gogloshi"
        description="Gogloshi is very good"
        status={status}
        handleClick={MockHandleClick}
      />
      );
      const buttonElement =  screen.getByRole('button');
      expect(buttonElement.textContent).toBe(expected2);
    });
  
    it('Check join button', () => {
      render(
        <InsertMission
        missionId="1"
        missionName="Gogloshi"
        description="Gogloshi is very good"
        status={status}
        handleClick={MockHandleClick}
      />
      );
      const spanElement =  screen.getByTestId('message');
      expect(spanElement.textContent).toBe(expected1);
    });
  });
});