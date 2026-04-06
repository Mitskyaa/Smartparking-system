const mongoose = require('mongoose');

const parkingSpotSchema = new mongoose.Schema({
    spotNumber: {
        type: Number,
        required: true,
        unique: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    sensorData: {
        type: Object,
        required: false
    }
});

const ParkingSpot = mongoose.model('ParkingSpot', parkingSpotSchema);

module.exports = ParkingSpot;