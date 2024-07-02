'use client'
import React, { useState } from 'react';
import { createClient } from "@/utils/supabase/client";
import { DialogClose } from "@/components/ui/Dialog";
import { useRouter } from 'next/navigation';


const AddNewService: React.FC = () => {
  const [serviceName, setServiceName] = useState('');
  const [duration, setDuration] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();

    const { data, error } = await supabase
      .from('services')
      .insert({ name: serviceName, duration: parseInt(duration) })
      .select();

    if (error) {
      console.error('Error adding service:', error);
      return;
    }

    // Reset form
    setServiceName('');
    setDuration('');

    const closeDialogButton = document.getElementById("closeDialog");
    if (closeDialogButton !== null) {
      closeDialogButton.click();
    }
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">Service Name</label>
        <input
          type="text"
          id="serviceName"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-redText text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Add New Service
      </button>
      <DialogClose id="closeDialog" className="hidden" />
    </form>
  );
};

export default AddNewService;