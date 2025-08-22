# Hotel Management System 

A full-stack hotel management system built with React (frontend) and Node.js + Express + MySQL (backend).
This project helps manage hotel rooms, bookings, and related operations with a clean and responsive interface.


## Features

• User login System and JWT authentication
• Room management (view, add, update, delete rooms)
• Booking management (Book rooms, check-in/check-out, cancel bookings)
• Booking list with Active, Past and Cancelled Bookings
• Dashboard stats: total rooms, occupancy rate
• Calculation & invoice management
• Booking logs export (Excel)

## Tech Stack

• Frontend :- React, Material-UI
• Backend :- Node.js, Express
• Database :- MySQL with Sequelize ORM
• Authentication :- JWT, bcryptjs
• Other Tools :- Git, VS Code, REST API


## API Endpoints

• POST /api/auth/login
• POST /api/auth/register
• GET /api/rooms
• POST /api/rooms
• GET /api/bookings
• POST /api/bookings
• GET /api/bookings/stats
• GET /api/bookings/export

## Folder Structure 

HOTEL-MANAGEMENT-SYSTEM/
│
├── backend/
│   ├── invoices/
│   ├── src/
|   |   ├── config/
|   |   |    ├── db.js
|   |   ├── middleware/
|   |   |    ├── authMiddleware.js
|   |   ├── models/
|   |   |    ├── Booking.js
|   |   |    ├── Room.js
|   |   |    ├── User.js
|   |   ├── routes/
|   |   |    ├── adminRoutes.js
|   |   |    ├── authRoutes.js
|   |   |    ├── bookingRoutes.js
|   |   |    ├── invoiceRoutes.js
|   |   |    ├── roomRoutes.js
|   |   ├── server.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
|   |   |   ├── Navbar.js
|   |   |   ├── Login.js
|   |   |   ├── AdminDashboard.js
|   |   |   ├── StaffDashboard.js
|   |   |   ├── Rooms.js
|   |   |   ├── Bookings.js
|   |   |   ├── BookingsList.js
|   |   |   ├── PrivateRoute.js
│   │   ├── services/
|   |   |    ├── api.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│
└── README.md

## Project Installation & Setup

1. Clone the Repository :
git clone https://github.com/your-username/hotel-management.git
cd hotel-management

2. Backend Setup :
    cd backend
    npm install (Dependencies)

   i. Install Dependencies :
        - express
        - mysql2
        - sequelize
        - dotenv
        - cors
        - bcryptjs
        - jsonwebtoken
        - nodemon
        - exceljs
        - express-validator
        - body-parser

  ii. Create a .env file inside backend/ with :
       DB_HOST=localhost
       DB_USER=root
       DB_PASSWORD=yourpassword
       DB_NAME=hotel_management
       JWT_SECRET=your_secret_key
       PORT=5000

  iii. Run Backend : 
        npm run dev

   iv. Access app at :
        http://localhost:5000
 
3. Frontend Setup :
    cd frontend
    npm install (Dependencies)

   i. Install Dependencies :
        - react
        - react-dom
        - react-router-dom
        - axios
        - @mui/material
        - @emotion/react
        - @emotion/styled
        - @mui/icons-material
        - react-countup
        - react-scripts
        - prop-types

   ii. Run Frontend : 
        npm start

  iii. Access app at :
        http://localhost:3000

## App Usage Instructions

 • Login/SignUp with your credentials as admin/staff.
 • View/Add available rooms on the Rooms page.
 • Book a room using the booking form.
 • Manage bookings: check-in, check-out, or cancel.
 • Export booking logs as Excel. (Admin Only)
 • Check dashboard stats to monitor occupancy. (Admin Only)

 ## Author
Made by Priyanshi Bilodiya
📫 bilodiyapriyanshhi26@gmail.com