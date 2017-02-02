import React, { Component } from 'react';

const Request = ({request}) => {
  return (
    <tr>
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
