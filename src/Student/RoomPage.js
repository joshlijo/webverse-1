import React, { useEffect, useState } from 'react';

const ApplyAndViewRoomDetailsPage = () => {
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    // Implement API integration to fetch room details for the current student
    // Update the 'roomDetails' state with the fetched data
  }, []);

  return (
    <div>
      <h1>Apply and View Room Details Page</h1>
      {roomDetails ? (
        <div>
          <p>Hostel Block: {roomDetails.block}</p>
          <p>Room Number: {roomDetails.roomNo}</p>
        </div>
      ) : (
        <p>Loading room details...</p>
      )}
    </div>
  );
};

export default ApplyAndViewRoomDetailsPage;
