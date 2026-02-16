# Overview
Next.js app integrating WorkOS AuthKit and the Users Management widget with server-side token generation and protected routes.


# Features
- Users Management widget at /users
- Invite, remove, and role management
- AuthKit authentication w/protected routes


# Local Setup
- git clone https://github.com/AviSchatz/se-interview-nextjs-app on the command line
- In root of the cloned 'se-interview-nextjs-app' directory, run:
    - npm install
    - npm run dev
- Create an .env.local file at the root of the repo and add: WORKOS_CLIENT_ID, WORKOS_API_KEY, NEXT_PUBLIC_WORKOS_REDIRECT_URI, and WORKOS_COOKIE_PASSWORD (with the values from your WorkOS account)


# WorkOS Dashboard Changes
- Organizations - Added Avi Co. as an orgnization with 1 user, Avi Schatz
- Authentication - Added http://localhost:3000 in Cross-Origin Resource Sharing (CORS)
- Authorization - Added role, Manager, that has widgets:users-table:manage as the lone permission
- Redirects - Added http://localhost:3000/callback as a redirect URI
- Redirects - Added http://localhost:3000 as a homepage URL


# Deployed App Notes
- URL: https://se-interview-nextjs-app-rho.vercel.app/
- To view the Users Management widget page, add users after this URL (https://se-interview-nextjs-app-rho.vercel.app/users)
- sign in will be AuthKit login with the email address: takehomeworkos@gmail.com
    - I will go into the email inbox and proceed with the auth flow