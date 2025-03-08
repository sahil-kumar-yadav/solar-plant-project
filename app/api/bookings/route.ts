// src/app/api/bookings/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, date } = await req.json();

    // Here, you would typically store this data in your database.
    // For demonstration purposes, we'll just log it and return success.

    console.log('Booking details:', { name, email, date });

    // TODO: Save booking data to your database here (e.g., Supabase, Firebase)

    return NextResponse.json(
      { message: 'Booking successful!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Booking API Error:', error);
    return NextResponse.json(
      { message: 'An error occurred during booking.' },
      { status: 500 }
    );
  }
}
