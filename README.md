# 🌐 Hotel Management System

A full-stack web application for hotel booking, room management, and customer handling.

---

# ✨ Overview

The Hotel Management System is a modern, clean, and responsive web application designed to streamline hotel operations.
It includes room listings, booking management, customer data handling, backend APIs, and a MySQL-powered database system.

Built with a full-stack architecture using:
HTML, CSS, JavaScript, Node.js, Express.js, and MySQL

This project demonstrates your real-world ability as a full-stack developer.

---

## 🚀 Features

🧑‍💻 User Features

- Browse rooms with details and pricing

- Submit booking requests

- Check availability

- Clean, modern UI

- Fully responsive (mobile + tablet)

⚙️ System Features

- Express-based REST APIs

- MySQL-powered database

- Modular backend structure

- Input validation

- Error handling

- Separation of concerns (routes, controllers, config, models)

---

## 🛠️ Tech Stack
- Frontend

  HTML

  CSS

  JavaScript

- Backend

  Node.js

  Express.js

- Database

  MySQL

- Tools

  Postman

  VS Code

  Git & GitHub
  
---

## 📂Folder Structure 

```text
HOTEL-MANAGEMENT-SYSTEM/
│
├── backend/
│   ├── invoices/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── models/
│   │   │   ├── Booking.js
│   │   │   ├── Room.js
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   ├── adminRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── bookingRoutes.js
│   │   │   ├── invoiceRoutes.js
│   │   │   └── roomRoutes.js
|   |   ├──seed/
|   |   |  ├──seedRooms.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Login.js
│   │   │   ├── AdminDashboard.js
│   │   │   ├── StaffDashboard.js
│   │   │   ├── Rooms.js
│   │   │   ├── Bookings.js
│   │   │   ├── BookingsList.js
│   │   │   └── PrivateRoute.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```
---

## 🏗️ Architecture
```
Frontend (HTML/CSS/JS)
        │
        ▼
Backend API (Node.js + Express)
        │
        ▼
Database (MySQL)
```
---

## 📡 API Endpoints
- GET /api/rooms

  Returns all rooms.

- GET /api/rooms/available

  Checks available rooms.

- POST /api/booking

  Creates a new booking.

  ---


## 🛠 Project Installation & Setup

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

---

## 📘 App Usage Instructions

 - Login/SignUp with your credentials as admin/staff.
 
 - View/Add available rooms on the Rooms page.
 
 - Book a room using the booking form.
 
 - Manage bookings: check-in, check-out, or cancel.
 
 - Export booking logs as Excel. (Admin Only)
 
 - Check dashboard stats to monitor occupancy. (Admin Only)

---

## 📷 Screenshots

![Login Page Screenshot](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/login.png?raw=true)

![Dashboard Screenshort](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/dashboard.png?raw=true)

![Rooms Screenshot](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/rooms.png?raw=true)

![Booking Screenshot](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/bookings.png?raw=true)

![Room_booking screenshot](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/book_room.png?raw=true)

![active_reservation screenshot](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/active_reservation.png?raw=true)

![past_reservation screenshot](https://github.com/Coded-by-priya/hotel-management/blob/main/screenshot/past_reservation.png?raw=true)

---

## 🎓 What I Learned

- Building full-stack applications

- Designing REST APIs

- Relational database workflows

- Handling booking logic

- UI/UX fundamentals

- Error handling and clean architecture

---

## 🚀 Future Improvements

- Admin panel

- Authentication system

- Payment integration

- Deployment on Render/Vercel

---

 ## 👩‍💻 Author
```
Priyanshi Bilodiya
Email: bilodiyapriyanshhi26@gmail.com
```
