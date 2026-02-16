# Overview
Next.js app integrating WorkOS AuthKit and the Users Management widget with server-side token generation and protected routes.


# Features
- Users Management widget at /users
- Invite, remove, and role management
- AuthKit authentication w/protected routes


# Local Setup
- In root of cloned 'se-interview-nextjs-app' directory, run:
    - npm install
    - npm run dev
- Required environment variables: WORKOS_CLIENT_ID, WORKOS_API_KEY, NEXT_PUBLIC_WORKOS_REDIRECT_URI, and WORKOS_COOKIE_PASSWORD


# WorkOS Dashboard Changes
- Organizations - Added Avi Co. as an orgnization with 1 user, Avi Schatz
- Authentication - Added http://localhost:3000 in Cross-Origin Resource Sharing (CORS)
- Authorization - Added role, Manager, that has widgets:users-table:manage as the lone permission
- Redirects - Added http://localhost:3000/callback as a redirect URI
- Redirects - Added http://localhost:3000 as a homepage URL


# Deployed App
