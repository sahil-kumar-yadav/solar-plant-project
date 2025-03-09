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
                { name, email, message },
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
        <main className="container mx-auto py-12 px-4 max-w-3xl">
            <h1 className="text-4xl font-bold mb-8 text-center text-green-700">Customer Support</h1>

            {/* FAQ Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Frequently Asked Questions</h2>
                <Accordion className="mb-4 shadow-lg rounded-lg border border-gray-200">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-green-50">
                        <Typography className="font-semibold text-green-700">How long does solar installation take?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="bg-gray-50">
                        <Typography className="text-gray-600">Typically between 1 to 3 days depending on the project size.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="mb-4 shadow-lg rounded-lg border border-gray-200">
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className="bg-green-50">
                        <Typography className="font-semibold text-green-700">What warranty do you offer on solar panels?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className="bg-gray-50">
                        <Typography className="text-gray-600">We offer a 25-year warranty on solar panels.</Typography>
                    </AccordionDetails>
                </Accordion>
            </section>

            {/* Contact Form */}
            <section className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Support</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <TextField
                            label="Your Name"
                            name="name"
                            required
                            fullWidth
                            variant="outlined"
                            size="medium"
                            className="bg-gray-50"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            required
                            fullWidth
                            variant="outlined"
                            size="medium"
                            className="bg-gray-50"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Your Message"
                            name="message"
                            required
                            fullWidth
                            variant="outlined"
                            size="medium"
                            multiline
                            rows={6}
                            className="bg-gray-50"
                        />
                    </div>
                    <div className="text-center">
                        <Button
                            type="submit"
                            variant="contained"
                            color="success"
                            size="large"
                            className="w-full py-3 mt-4 text-white"
                        >
                            Send Message
                        </Button>
                    </div>
                </form>
            </section>
        </main>
    );
}
