import React from "react";

export default function Credit() {
  return (
    <div className="credit">
      <p>
        Coded by
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Sreesailam Veera Babu
        </a>
        , <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">Open sourced on Github.</a> Hosted on Netlify.
      </p>
    </div>
  );
}
