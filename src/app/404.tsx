// File: pages/404.js

import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <a style={{ color: "blue", textDecoration: "underline" }}>
          Go back to Home
        </a>
      </Link>
    </div>
  );
}
