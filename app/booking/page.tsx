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
      setName('');
      setEmail('');
      setDate(new Date());
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <main className="container mx-auto py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          Schedule Your Solar Installation
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
          </div>

          {/* Calendar */}
          <div>
            <label className="block font-semibold text-gray-700 mb-4">Select Installation Date</label>
            <Calendar
              value={date}
              onChange={setDate}
              className="mx-auto border-none shadow-md rounded-lg overflow-hidden"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white font-bold py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition duration-300 transform hover:scale-[1.02]"
          >
            Confirm Appointment
          </button>
        </form>
      </div>
    </main>
  );
}
