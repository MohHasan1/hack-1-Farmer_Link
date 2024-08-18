


import { Heading } from "../components/Heading";

export const FarmerPost = () => {
  return (
    <>
      <Heading label={"Farmer's Post "} />
      <input name={"Crop Name"} placeholder={"Wheat"} />
      <input name={"Expiry"} placeholder={"2026-08-25"} />
      <input name={"Weight"} placeholder={"20000 lbs"} />
      <input name={"Contact"} placeholder={"xxx-xxx-xxxx"} />
      <button>submit</button>
    </>
  );
};
