import React, { useEffect, useState } from 'react';

const AcceptMessRoomRequestPage = () => {
  const [messChangeRequests, setMessChangeRequests] = useState([]);
  const [roomAssignmentRequests, setRoomAssignmentRequests] = useState([]);

  useEffect(() => {
    // Implement API integration to fetch mess change requests and room assignment requests
    // Update the 'messChangeRequests' and 'roomAssignmentRequests' states with the fetched data
  }, []);

  const handleMessChangeApproval = (requestId, approved) => {
    // Implement API integration to approve or reject the mess change request
    // Use the 'requestId' and 'approved' parameters for the API request
  };

  const handleRoomAssignmentApproval = (requestId, approved) => {
    // Implement API integration to assign or reject the room assignment request
    // Use the 'requestId' and 'approved' parameters for the API request
  };

  return (
    <div>
      <h1>Accept Mess/Room Request Page</h1>
      <h2>Mess Change Requests:</h2>
      <ul>
        {messChangeRequests.map((request) => (
          <li key={request.id}>
            <p>{request.content}</p>
            <button onClick={() => handleMessChangeApproval(request.id, true)}>Approve</button>
            <button onClick={() => handleMessChangeApproval(request.id, false)}>Reject</button>
          </li>
        ))}
      </ul>
      <h2>Room Assignment Requests:</h2>
      <ul>
        {roomAssignmentRequests.map((request) => (
          <li key={request.id}>
            <p>{request.content}</p>
            <button onClick={() => handleRoomAssignmentApproval(request.id, true)}>Assign Room</button>
            <button onClick={() => handleRoomAssignmentApproval(request.id, false)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AcceptMessRoomRequestPage;
