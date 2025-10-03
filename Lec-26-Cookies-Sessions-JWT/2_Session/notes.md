# Sessions
--- cookie drawbacks ---
- Cookies are limited in size (usually around 4KB).
- it is visible to the client, so it can be manipulated or stolen.

-- Need for sessions ---
- Sessions are used to store user-specific data on the server side, allowing for more secure and

- how does it work?
  - information in seesion map where the key is session id and value is user data
  - When a user logs in, the server creates a session and stores the session data on the server.
  - The server then sends a session ID to the client, which is stored in a cookie.
  - On subsequent requests, the client sends the session ID back to the server, allowing the server to retrieve the session data.