'use client';

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function BookingPage() {
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const bookingData = {
            name,
            email,
            date: date.toISOString().split('T')[0],
        };

        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData),
            });

            if (!res.ok) throw new Error('Booking failed');

            alert('Booking successful!');
        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again.');
        }
    }

    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <main className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">Book Installation Appointment</h1>

            <form onSubmit={handleSubmit}>
                <label className="block font-medium">Full Name</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded px-3 py-2 mb-4"
                />

                <label className="block font-medium">Email</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2 mb-4"
                />

                <div className="mb-6">
                    <Calendar value={date} onChange={setDate} />
                </div>

                <button
                    onClick={handleSubmit}
                    className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300"
                >
                    Book Appointment
                </button>
        </main>
    );
}
