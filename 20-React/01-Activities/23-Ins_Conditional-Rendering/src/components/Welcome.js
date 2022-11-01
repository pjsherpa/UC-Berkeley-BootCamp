import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {loggedIn ? (
        // we can also use this short circuit opertator {loggedIn && (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(!loggedIn)}>
            
          {/* we can also do <button type="button" onClick={() => setLoggedIn(false)}> */}
            Log out
          </button>
        </div>
      ) : (
      // we can also use this }!loggedIn &&((
        // If we are logged out, render this:
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          {/* we can also do <button type="button" onClick={() => setLoggedIn(true)}> */}
            Log in
          </button>
        </div>
      )}
    </div>
  );
}
