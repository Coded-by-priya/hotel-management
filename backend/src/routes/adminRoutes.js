// File: routes/adminRoutes.js
// Purpose: Handle admin-specific APIs like dashboard stats (rooms, bookings, revenue)

const express = require('express');
const { Op } = require('sequelize');
const authMiddleware = require('../middleware/authMiddleware');
const Room = require('../models/Room');
const Booking = require('../models/Booking');

const router = express.Router();

// Admin Dashboard Stats
router.get('/stats', authMiddleware(['admin', 'staff']), async (req, res) => {
    try {
        // Total rooms
        const totalRooms = await Room.count();

        // Occupied rooms = bookings that are "checked-in"
        const occupiedRooms = await Booking.count({
            where: { status: 'checked-in' }
        });

        // Available rooms = total - occupied
        const availableRooms = totalRooms - occupiedRooms;

        // Total bookings ever
        const totalBookings = await Booking.count();

        // Revenue calculation
        let totalRevenue = 0;

        // Fetch all completed bookings (checked-out) along with room info
        const bookings = await Booking.findAll({
            where: { status: 'checked-out' },
            include: Room
        });

        // Calculate revenue based on nights stayed × room tariff
        if (bookings.length > 0) {
            bookings.forEach(b => {
                const start = new Date(b.check_in);
                const end = new Date(b.check_out);
                const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
                totalRevenue += nights * (b.Room?.tariff || 0);
            });
        }

        // Send dashboard stats as JSON
        res.json({
            totalRooms,
            occupiedRooms,
            availableRooms,
            totalBookings,
            totalRevenue
        });
    } catch (err) {
        // Handle errors
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
