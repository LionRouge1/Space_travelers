import React from 'react';

const InsertMission = ({
  missionId,
  missionName,
  description,
  status,
  handleClick,
}) => {
  const member = {
    backgroundColor: 'green',
    color: 'white',
  };
  const notMenber = {
    backgroundColor: '#ccc',
    color: 'white',
  };
  const Bmember = {
    backgroundColor: 'none',
    border: '1px solid red',
    color: 'red',
  };
  const BnotMenber = {
    backgroundColor: 'none',
    border: '1px solid #ccc',
    color: '#ccc',
  };
  return (
    <tr>
      <th>{missionName}</th>
      <td>{description}</td>
      <td>
        <span
          data-testid="message"
          style={(status) ? member : notMenber}
        >
          {(status) ? 'Active member' : 'NOT A MEMBER'}
        </span>
      </td>
      <td>
        <button
          id={missionId}
          type="button"
          style={(status) ? Bmember : BnotMenber}
          onClick={(e) => handleClick(e)}
        >
          {(status) ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

export default InsertMission;
