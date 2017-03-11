import React from 'react';

const Request = ({request}) => {
  return (
    <tr key={request.full_name}>
      <td>{request.rider.full_name}</td>
      <td>{request.volunteer.full_name}</td>
      <td>{request.status}</td>
      <td>{request.route.pickup_address}</td>
      <td>{request.route.dropoff_address}</td>
      <td>{request.route.distance}</td>
    </tr>
  );
};
export default Request;
