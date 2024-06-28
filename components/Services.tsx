import React from "react";

const OurServices = () => {
  const services = [
    { name: "Haircuts and Styling", image: "/haircut.jpg", desc: "Transform Your Look with Expert Precision"},
    { name: "Manicure and Pedicure", image: "/manicure.jpg", desc: "Pamper Your Nails with Our Luxurious Treatments"},
    { name: "Facial Treatments", image: "/facial.jpg", desc: "Rejuvenate Your Skin with Our Customized Facials"},
  ];

  return (
    <section className="my-16 p-8 text-center">
      <div className="flex justify-center items-center mb-4"> 
        <h2 className="text-neutral-950 text-4xl md:text-5xl font-rosarivo-italic mb-6" id="services-section">
          Our Services
        </h2>
      </div>
      <div className="flex justify-center items-center space-x-4 overflow-x-hidden flex-wrap">
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
            <p className="text-neutral-950 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
