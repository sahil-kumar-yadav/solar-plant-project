'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SupportPage() {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                { name, email: formData.get('email'), message: formData.get('message') },
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
            );
            alert('Message sent successfully!');
            e.currentTarget.reset();
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Please try again.');
        }
    };

    return (
        <main className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Customer Support</h1>

            {/* FAQ Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        How long does solar installation take?
                    </AccordionSummary>
                    <AccordionDetails>
                        Typically between 1 to 3 days depending on the project size.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        What warranty do you offer on solar panels?
                    </AccordionSummary>
                    <AccordionDetails>
                        We offer a 25-year warranty on solar panels.
                    </AccordionDetails>
                </Accordion>
            </section>

            {/* Contact Form */}
            <section className="max-w-xl">
                <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="name" placeholder="Your Name" required className="w-full border rounded px-3 py-2 mb-4" />
                    <input type="email" name="email" required placeholder="Email" className="w-full border rounded px-3 py-2 mb-4" />
                    <textarea name="message" required placeholder="Your message" rows={6} className="w-full border rounded px-3 py-2 mb-4"></textarea>
                    <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300">
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
}
