// import React, { useState, useEffect } from 'react';

// const ItemCard = () => {
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     // Fetching data from an API
//     fetch('https://api.example.com/item')  // Replace with your actual API endpoint
//       .then(response => response.json())
//       .then(data => {
//         setItem(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching item:', error);
//         setError('Failed to load item');
//         setLoading(false);
//       });
//   }, []);



//   return (
//     <div className="card card-compact bg-base-100 w-96 shadow-xl">
//       <figure>
//         <img
//           src={item.imageUrl}  // Assuming the API returns an image URL
//           alt={item.name}      // Assuming the API returns a name
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{item.name}</h2>
//         <p>{item.description}</p>  {/* Assuming the API returns a description */}
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemCard;



import React from 'react';

const ItemCard = () => {
  const items = [
    {
      id: 1,
      name: "Shoes",
      description: "If a dog chews shoes whose shoes does he choose?",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      id: 2,
      name: "Hat",
      description: "A stylish hat for all seasons.",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
    {
      id: 3,
      name: "Watch",
      description: "Keep track of time with this elegant watch.",
      imageUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <div key={item.id} className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={item.imageUrl} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}!</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;



