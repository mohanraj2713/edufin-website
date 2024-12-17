// File: pages/_not-found.js

import Link from "next/link";

export default function CustomNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops! Something Went Wrong</h1>
      <p>The requested page couldn't be displayed or does not exist.</p>
      <Link href="/">
        <a style={{ color: "blue", textDecoration: "underline" }}>
          Return to Home
        </a>
      </Link>
    </div>
  );
}
