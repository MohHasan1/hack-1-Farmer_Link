import React from 'react';

export const MarketPlace = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl italic font-semibold my-8 sm:ml-0 md:ml-4 lg:ml-8">Market Place</h1> {/* Left-aligned heading */}
      <ItemCard />
    </div>
  );
};

const ItemCard = () => {
  const items = [
    {
      id: 1,
      name: "Farm 1",
      description: "Woodstock, ON",
      PerPound: "$1.99 per pound",
      quantity: "500 lbs available",
      imageUrl: "https://www.shutterstock.com/image-photo/corn-cobs-plantation-field-600nw-2219335147.jpg",
    },
    // Additional items here...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={item.imageUrl} alt={item.name} className="object-cover w-full h-48" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <p className="text-lg font-semibold">{item.PerPound}</p>
            <p className="text-sm italic">{item.quantity}</p>  
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
