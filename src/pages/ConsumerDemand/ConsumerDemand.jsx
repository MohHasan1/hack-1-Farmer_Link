import React from 'react';

export const ConsumerDemand = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl italic font-semibold my-8 sm:ml-0 md:ml-4 lg:ml-8">Consumer Demand</h1> {/* Left-aligned heading */}
      <DemandCard />
    </div>
  );
};

const DemandCard = () => {
  const demands = [
    {
        id: 1,
        name: "Consumer 1",
        description: "Toronto, ON",
        quantity: "300 lbs",
        pricePerPound: "$2.50 per pound",
        totalCost: "$750.00",
        imageUrl: "https://www.shutterstock.com/image-photo/corn-cobs-plantation-field-600nw-2219335147.jpg",
      },
      {
        id: 2,
        name: "Corporate 2",
        description: "Montreal, QC",
        quantity: "500 lbs",
        pricePerPound: "$3.00 per pound",
        totalCost: "$1500.00",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd0tCYyqhQ6lcDN53qiqXdMy8tDBLK6h52HQ&s",
      },
      {
        id: 3,
        name: "Consumer 3",
        description: "Vancouver, BC",
        quantity: "200 lbs",
        pricePerPound: "$4.00 per pound",
        totalCost: "$800.00",
        imageUrl: "https://i.ytimg.com/vi/rl8PbPkdicg/maxresdefault.jpg",
      },
      {
        id: 4,
        name: "Corporate 4",
        description: "Calgary, AB",
        quantity: "700 lbs",
        pricePerPound: "$2.75 per pound",
        totalCost: "$1925.00",
        imageUrl: "https://i.ytimg.com/vi/rl8PbPkdicg/maxresdefault.jpg",
      },
      {
        id: 5,
        name: "Consumer 5",
        description: "Ottawa, ON",
        quantity: "400 lbs",
        pricePerPound: "$3.50 per pound",
        totalCost: "$1400.00",
        imageUrl: "https://www.shutterstock.com/image-photo/corn-field-early-morning-sun-600w-1102065636.jpg",
      },
      {
        id: 6,
        name: "Corporate 6",
        description: "Edmonton, AB",
        quantity: "600 lbs",
        pricePerPound: "$3.25 per pound",
        totalCost: "$1950.00",
        imageUrl: "https://www.shutterstock.com/image-photo/harvested-corn-cobs-600w-1811414042.jpg",
      },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {demands.map((item) => (
        <div key={item.id} className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={item.imageUrl} alt={item.name} className="object-cover w-full h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-lg font-semibold">{item.quantity}</p>
            <p className="text-lg font-semibold">{item.pricePerPound}</p>
            <p className="text-sm italic">Total: {item.totalCost}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Fulfill Request</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
