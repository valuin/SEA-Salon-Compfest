import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ReviewSubmitted() {
    return (
        <div className="flex-1 w-full flex flex-col gap-10 items-center bg-primary">
            <Navbar />
    
            <div className="flex flex-col max-w-4xl px-3 text-center">
                <h1 className="text-4xl font-serif mb-4 text-neutral-950">Review submitted</h1>
                <p className="text-xl mb-8 text-neutral-950">Thank you for your response!</p>
                <Link href="/" className="bg-neutral-950 text-white px-4 py-2 rounded hover:bg-redText transition-colors duration-200">
                    Back to Home
                </Link>
            </div>
    
            <Footer />
        </div>
    );
}