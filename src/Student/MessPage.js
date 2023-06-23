import React, { useState } from 'react';

const ApplyForMessPage = () => {
  const [messChangeRequest, setMessChangeRequest] = useState('');

  const handleSubmitMessChangeRequest = () => {
    // Implement API integration to submit the mess change request
    // Use the 'messChangeRequest' state as the request content
  };

  return (
    <div>
      <h1>Apply For Mess Page</h1>
      <label>Mess Change Request:</label>
      <input type="text" value={messChangeRequest} onChange={(e) => setMessChangeRequest(e.target.value)} />
      <button onClick={handleSubmitMessChangeRequest}>Submit Mess Change Request</button>
    </div>
  );
};

export default ApplyForMessPage;
