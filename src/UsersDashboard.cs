import React, { useState, useEffect } from 'react';

const UserDashboard = () => {
  const [data, setData] = useState(null);

  // ❌ BUG: Missing dependency array causes an infinite loop
  // This will crash the browser/tab
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(result => setData(result));
  }); 

  return <div>{data ? data.name : 'Loading...'}</div>;
};
