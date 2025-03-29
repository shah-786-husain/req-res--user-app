 ## Reqres User Management App
 A React application that integrates with the Reqres API to perform user authentication, listing, editing, and deletion.
 ## Features
 User Authentication (Login)
 Fetch and Display Users (with Pagination)
 Edit User Details
 Delete User
 Error Handling & Validation
 Token Persistence using Local Storage
 Responsive UI with Tailwind CSS
 ## Tech Stack
 Frontend: React, React Router
 HTTP Requests: Axios
 Styling: Tailwind CSS
 State Management: React Hooks (useState, useEffect)
 Persistence: LocalStorage
 ## Folder Structure
 /reqres-app
│── /src
│   ├── /components
│   │   ├── Login.js
│   │   ├── UserList.js
│   │   ├── EditUser.js
│   ├── /services
│   │   ├── api.js
│   ├── App.js
│   ├── index.js
│── package.json
│── README.md
## Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/reqres-user-management.git
cd reqres-user-management
2.Install Dependencies
npm install
3.Start the Application
npm start
Runs the app on http://localhost:3000/
## API Endpoints Used
Login: POST /api/login
Get Users (Paginated): GET /api/users?page=1
Update User: PUT /api/users/{id}
Delete User: DELETE /api/users/{id}
)

## How It Works
1.User logs in with email: eve.holt@reqres.in and password: cityslicka.
2.On success, the token is stored in LocalStorage and the user is redirected to the User List Page.
3.Users are displayed in a table with pagination.
4.Users can be edited or deleted.
## Bonus Features
1.Client-side search & filtering
2.Hosted on https://userapplicationabcd.netlify.app/
3.React Router Navigation













