import React, { useState } from "react";
import { Heading } from "../../components/Heading";

export const PredictionModel = () => {
  const [cropType, setCropType] = useState("");
  const [acresofLand, setAcresofLand] = useState("");
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [month, setMonth] = useState("");

  const handlePrediction = async () => {
    if (!cropType || !acresofLand || !month) {
      console.error("Please fill in all fields.");
      return;
    }

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-small-128k-online",
        messages: [
          {
            role: "system",
            content:
              "You are a prediction bot based in Canada. Be precise and concise. Just give the final estimate price based on historical data of the price of the crop at that particular month. Don’t give any explanation, just give the estimated value.",
          },
          {
            role: "user",
            content: `I want to grow ${cropType} on my ${acresofLand} acre land and sell it in ${month}.`,
          },
        ],
      }),
    };

    try {
      const response = await fetch(
        "https://api.perplexity.ai/chat/completions",
        options
      );
      const data = await response.json();
      const prediction = data.choices[0].message.content;
      setPredictedPrice(prediction);
    } catch (err) {
      console.error("Error fetching prediction:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center p-6">
      <Heading label={<i>Prediction</i>} className="text-white text-3xl mb-6" />
      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Crop Type (e.g., Corn)"
          value={cropType}
          onChange={(e) => setCropType(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Acres of Land"
          value={acresofLand}
          onChange={(e) => setAcresofLand(e.target.value)}
          className="w-full mb-4 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Month (e.g., March)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full mb-6 p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
        />
        <button
          onClick={handlePrediction}
          className="w-full py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200"
        >
          Get Prediction
        </button>
        {predictedPrice && (
          <p className="text-white mt-4 w-full max-w-2xl text-left">
            Predicted Price: {predictedPrice}
          </p>
        )}
      </div>
    </div>
  );
};
