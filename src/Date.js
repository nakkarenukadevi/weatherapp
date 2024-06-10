
import React, { useState, useEffect } from 'react';

const Datecom = () => {

    // Initialize the state with the current date
    const [date, setDate] = useState(new Date());

    // Update the date every second (optional, if you want a live update)
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    // Extract date components
    const day = date.getDate(); // Day of the month (1-31)
    const month = date.getMonth() + 1; // Month (0-11, adding 1 to get 1-12)
    const year = date.getFullYear(); // Full year (e.g., 2024)
    const hours = date.getHours(); // Hours (0-23)
    const minutes = date.getMinutes(); // Minutes (0-59)
    const seconds = date.getSeconds(); // Seconds (0-59)

    return (
        <div>
            <h1>Current Date and Time</h1>
            <p>Day: {day}/ {month}/{year}</p>

            <p>Hours: {hours}-{minutes}- {seconds}</p>

        </div>
    );
}

export default Datecom