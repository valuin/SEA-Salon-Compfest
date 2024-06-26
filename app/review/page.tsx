import React from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default async function ReviewPage() {
    return (
        <div className="flex-1 w-full flex flex-col gap-10 items-center bg-primary">
        <Navbar />
    
        <div className="flex flex-col max-w-4xl px-3">
        </div>
        <div className="mt-24">
            <h1 className="text-4xl text-center mt-10 text-neutral-950">Welcome to the Review page</h1>
        </div>
    
        <Footer />
        </div>
    );
}
