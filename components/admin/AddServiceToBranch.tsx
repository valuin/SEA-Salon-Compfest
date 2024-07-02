'use client'

import React, { useState, useEffect } from 'react';
import { fetchServices, addServiceToBranch } from '@/app/actions/branchActions';

interface Service {
  id: number;
  name: string;
  duration: number;
}

interface AddServiceToBranchProps {
  branchId: number;
  onServiceAdded: () => void;
}

const AddServiceToBranch: React.FC<AddServiceToBranchProps> = ({ branchId, onServiceAdded }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<number | ''>('');

  useEffect(() => {
    fetchServices().then(setServices).catch(console.error);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServiceId === '') return;

    try {
      await addServiceToBranch(branchId, selectedServiceId as number);
      console.log('Service added to branch successfully');
      onServiceAdded();
    } catch (error) {
      console.error('Error adding service to branch:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service</label>
        <select
          id="service"
          value={selectedServiceId}
          onChange={(e) => setSelectedServiceId(Number(e.target.value))}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name} ({service.duration} minutes)
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-neutral-950 text-white rounded-md hover-effect"
      >
        Add Service to Branch
      </button>
    </form>
  );
};

export default AddServiceToBranch;