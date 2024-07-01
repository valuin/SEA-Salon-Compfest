import React from 'react';

interface Service {
  id: number;
  name: string;
  duration: number;
}

interface BranchService {
  service: Service;
}

interface BranchProps {
  id: number;
  name: string;
  location: string;
  openingTime: string;
  closingTime: string;
  services: BranchService[];
}

const Card: React.FC<BranchProps> = ({ name, location, openingTime, closingTime, services }) => {
  const operationalHours = `${openingTime.slice(0, 5)} - ${closingTime.slice(0, 5)}`;

  return (
    <div 
      className="bg-primary border-2 border-redText/50 shadow-md text-center rounded-lg p-7 hover:shadow-xl hover:border-redText hover:shadow-redText/20 transition-all duration-300"
      style={{ width: '300px'}}
    >
      <h2 className="text-xl font-semibold text-neutral-950">{name}</h2>
      <p className="text-neutral-700">{location}</p>
      <p className="text-redText mb-3">{operationalHours}</p>
      <h2 className="text-lg font-medium justify-center text-neutral-950 mb-4">Services</h2>
      <div className="flex flex-wrap gap-2 overflow-wrap: break-words">
        {services && services.length > 0 ? (
          services.map(({ service }) => (
            <div key={service.id} className="bg-redText/50 shadow-md shadow-redText/60 text-white text-xs py-1 px-2 rounded-full">
              {service.name}
            </div>
          ))
        ) : (
          <p className="text-sm text-neutral-700">No services available</p>
        )}
      </div>
    </div>
  );
};

export default Card;