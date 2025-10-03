# Cookies and Sessions

- Cookies are small pieces of data stored on the client-side (browser) to remember information about the user.
- Sessions are server-side storage mechanisms that keep track of user data across multiple requests.
- Cookies can be set with attributes like `HttpOnly`, `Secure`, and `SameSite` to enhance security.


# Cookies 
- Cookies are sent with every HTTP request to the server.
- They can be used for various purposes, such as:
  - Session management (e.g., login sessions)
  - Personalization (e.g., user preferences)
  - Tracking (e.g., analytics)
- Cookies have size limitations (typically around 4KB).

# Example of setting a cookie in Express.js
install cookie
npm install cookie


res.cookie('name', 'value', { httpOnly: true, secure: true, sameSite: 'Strict' });
