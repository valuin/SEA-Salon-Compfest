'use client'
import React, { useState } from 'react';
import { createClient } from "@/utils/supabase/client";

const AddNewBranch: React.FC = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();

    // Insert new branch
    const { data: branchData, error: branchError } = await supabase
      .from('branches')
      .insert({ name, location, openingTime, closingTime })
      .select();

    if (branchError) {
      console.error('Error adding branch:', branchError);
      return;
    }

    const branchId = branchData[0].id;

    // Associate default services (IDs 1, 2, 3) with the new branch
    const defaultServiceIds = [1, 2, 3];
    for (const serviceId of defaultServiceIds) {
      const { error: branchServiceError } = await supabase
        .from('branch_services')
        .insert({ branch_id: branchId, service_id: serviceId });

      if (branchServiceError) {
        console.error('Error linking service to branch:', branchServiceError);
      }
    }

    // Reset form
    setName('');
    setLocation('');
    setOpeningTime('');
    setClosingTime('');

    // TODO: Add success message or redirect
    console.log('Branch added successfully');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Branch Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="openingTime" className="block text-sm font-medium text-gray-700">Opening Time</label>
        <input
          type="time"
          id="openingTime"
          value={openingTime}
          onChange={(e) => setOpeningTime(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="closingTime" className="block text-sm font-medium text-gray-700">Closing Time</label>
        <input
          type="time"
          id="closingTime"
          value={closingTime}
          onChange={(e) => setClosingTime(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Add Branch
      </button>
    </form>
  );
};

export default AddNewBranch;