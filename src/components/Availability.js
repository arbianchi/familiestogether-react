import React from 'react';

const Availability = ({availability}) => {
  return (
    <tr>
      <td>{availability.start_datetime}</td>
      <td>{availability.end_datetime}</td>
    </tr>
  );
};
export default Availability;