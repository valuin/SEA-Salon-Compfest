'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Here you would typically send the reservation data to your backend
        // For now, we'll just redirect to a confirmation page
        router.push('/reservation/confirmed');
    };

    const generateTimeSlots = () => {
        const slots = [];
        for (let i = 9; i < 21; i++) {
            slots.push(`${i.toString().padStart(2, '0')}:00`);
        }
        return slots;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-neutral-950">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    placeholder='Your Name'
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
                    required
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1 text-neutral-950">Active Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    value={phone}
                    placeholder='Your Phone Number'
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
                    required
                />
            </div>
            <div>
                <label htmlFor="service" className="block text-sm font-medium mb-1 text-neutral-950">Type of Service</label>
                <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
                    required
                >
                    <option value="">Select a service</option>
                    <option value="haircut">Haircuts and Styling</option>
                    <option value="manicure">Manicure and Pedicure</option>
                    <option value="facial">Facial Treatments</option>
                </select>
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium mb-1 text-neutral-950">Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
                    required
                />
            </div>
            <div>
                <label htmlFor="time" className="block text-sm font-medium mb-1 text-neutral-950">Time</label>
                <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 text-neutral-950"
                    required
                >
                    <option value="">Select a time</option>
                    {generateTimeSlots().map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-neutral-950 text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors"
            >
                Make Reservation
            </button>
        </form>
    );
};

export default ReservationForm;