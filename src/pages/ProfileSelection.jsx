import React from "react";
import { useNavigate } from "react-router-dom";
import farmerImage from "../assets/farmer.jpg";
import consumerImage from "../assets/consumer.jpg";

const ProfileSelection = ({ setIsFirstTime }) => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    if (role === "farmer") {
      navigate("/marketplace"); // Redirect to the Marketplace page
    } else if (role === "consumer") {
      navigate("/consumer-demand"); // Redirect to the ConsumerDemand page
    }
    setIsFirstTime(false); // Set first time to false
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-white text-4xl mb-8">Who are you?</h1> {/* Increased margin for the title */}
      <div className="flex space-x-14">
        <div onClick={() => handleSelect('farmer')} className="cursor-pointer">
          <img src={farmerImage} alt="Farmer" className="rounded-full w-48 h-44" />
          <p className="text-white text-center mt-4">Farmer</p> {/* Added margin-top here */}
        </div>
        <div onClick={() => handleSelect('consumer')} className="cursor-pointer">
          <img src={consumerImage} alt="Consumer" className="rounded-full w-44 h-44" />
          <p className="text-white text-center mt-4">Consumer</p> {/* Added margin-top here */}
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;
