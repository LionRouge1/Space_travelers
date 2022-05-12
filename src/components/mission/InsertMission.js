import React from 'react';

const InsertMission = ({
  missionId,
  missionName,
  description,
  status,
  handleClick,
}) => {
  const member = {
    backgroundColor: '#18a2b8',
    color: 'white',
  };
  const notMenber = {
    backgroundColor: '#6d757d',
    color: 'white',
  };
  const Bmember = {
    backgroundColor: 'transparent',
    border: '1px solid #dc3645',
    color: '#dc3645',
  };
  const BnotMenber = {
    backgroundColor: 'transparent',
    border: '1px solid #6d757d',
    color: '#343a40',
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
