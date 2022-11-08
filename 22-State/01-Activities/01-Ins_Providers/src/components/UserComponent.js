import React from 'react';

export default function UserComponent() {
  return (
    <>
      <h1>Account summary</h1>
      <span className="text-larger">
        The provider made the user account accessible to this child component.
        Install the React developer tools and take a look under the{' '}
        <code>components</code> tab.
      </span>
      <div id="links"></div>
      <ul className="text-larger">
        <li>
          <a
            className="bullet"
            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
          >
            Chrome
          </a>
        </li>
        <li>
          <a
            className="bullet"
            href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/"
          >
            Firefox
          </a>
        </li>
      </ul>
    </>
  );
}
