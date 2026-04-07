import React, { useState, useEffect } from 'react';

const TestComponent = ({ userBio, redirectUrl }) => {
  const [count, setCount] = useState(0);

  // 1. SECURITY: Cross-Site Scripting (XSS)
  // Semgrep flags 'dangerouslySetInnerHTML' as it allows raw HTML injection.
  const createMarkup = () => {
    return { __html: userBio }; 
  };

  // 2. SECURITY: Open Redirect / Dangerous Link
  // Using user-provided strings in href can lead to 'javascript:' URI attacks.
  const handleRedirect = () => {
    window.location.href = redirectUrl;
  };

  // 3. CODE QUALITY: Missing Dependency in useEffect
  // This is a common bug where the effect doesn't re-run when 'count' changes.
  useEffect(() => {
    console.log("Count changed to:", count);
  }, []); // Should include [count]

  // 4. LOGIC BUG: Comparison to Self
  // A redundant check often indicating a copy-paste error.
  const isValid = (val) => {
    if (val === val) { 
      return true;
    }
    return false;
  };

  return (
    <div>
      <h1>Semgrep Test</h1>
      {/* SECURITY VULNERABILITY HERE */}
      <div dangerouslySetInnerHTML={createMarkup()} />
      
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <a href={redirectUrl}>Click to Redirect</a>
    </div>
  );
};

export default TestComponent;
