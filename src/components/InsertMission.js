import React from 'react';

const InsertMission = ({missionId, missionName, description, status}) => {
  const member = {
    backgroundColor: 'green',
    color: 'white',
  }
  const notMenber = {
    backgroundColor: '#f5f5f5',
    color: 'white',
  }
  const Bmember = {
    backgroundColor: 'none',
    border: '1px solid red',
    color: 'red',
  }
  const BnotMenber = {
    backgroundColor: 'none',
    border: '1px solid #ccc',
    color: '#ccc',
  }
  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>{
        (status)? 
        <span style={member}>Active menber</span> 
        : <span style={notMenber}>Not A MEMBER</span> }
      </td>
      <td>{
        (status)? 
        <button type="button" style={Bmember}>Join Mission</button> 
        : <button type="button" style={BnotMenber}>Leave Mission</button> }
      </td>
  </tr>
  )
};

export default InsertMission;