import React from "react";

const OurServices = () => {
  const services = [
    { name: "Haircuts and Styling", image: "/haircut.jpg", price: "$50.00" },
    { name: "Manicure and Pedicure", image: "/manicure.jpg", price: "$40.00" },
    { name: "Facial Treatments", image: "/facial.jpg", price: "$60.00" },
  ];

  return (
    <section className="my-16 p-16 text-center">
      <div className="flex justify-center items-center mb-4">
        <h2 className="text-redText text-4xl md:text-5xl font-rosarivo-italic mb-6">
          Our Services
        </h2>
      </div>
      <div className="flex justify-center items-center space-x-4 overflow-x-auto flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-none w-64 mb-8 mt-8 group hover:scale-105 transition-transform duration-300"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-64 object-cover mb-2 rounded-xl"
            />
            <h3 className="text-xl font-semibold text-neutral-950 group-hover:text-red-500 transition-colors duration-300">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
