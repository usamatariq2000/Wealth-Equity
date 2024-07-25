import React from "react";

const PersonalInformationForm = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="uppercase text-[#00262B] text-lg font-medium font-light-halyard">
        Personal Information
      </p>
      <div className="bg-[#C7C1BD] h-[1px] mt-[-10px]"></div>
      <div className="flex md:flex-row flex-col w-full gap-4 md:gap-6">
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>10px
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full gap-4 md:gap-6">
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Phone Number</label>
          <input
            type="tel"
            placeholder="(000) 000-0000"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full gap-4 md:gap-6">
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard whitespace-nowrap">
            Date of Birth (MM/DD/YYYY)
          </label>
          <input
            type="date"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Gender</label>
          <select className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]">
            <option value="" disabled selected>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-full gap-4 md:gap-6">
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">State</label>
          <select className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]">
            <option value="" disabled selected>
              Select your state
            </option>
            {/* Add state options here */}
          </select>
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Zip Code</label>
          <input
            type="text"
            placeholder="00000"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
      </div>

      <p className="uppercase text-[#00262B] text-lg font-medium font-light-halyard mt-5">
        Health & Lifestyle
      </p>
      <div className="bg-[#C7C1BD] h-[1px] mt-[-10px]"></div>
      <div className="flex w-full gap-6">
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Height (ft)</label>
          <input
            type="text"
            placeholder="0"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <label className="text-sm font-halyard">Weight (lbs)</label>
          <input
            type="number"
            placeholder="0"
            className="px-4 py-3 w-full font-halyard border text-sm bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 mt-4">
        <label className="text-sm font-halyard text-[#00262B] font-medium">
          Have you had 3 or more driving violations in the last 3 years?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="driving_violations" value="yes" />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="driving_violations" value="no" />
            No
          </label>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 mt-2">
        <label className="text-sm font-halyard text-[#00262B] font-medium">
          Have you used any nicotine or tobacco products in the last 3 years?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="nicotine_tobacco" value="yes" />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="nicotine_tobacco" value="no" />
            No
          </label>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 mt-2">
        <label className="text-sm font-halyard text-[#00262B] font-medium">
          Have you or a biological parent or sibling been diagnosed with cancer
          or heart disease before the age of 60?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="cancer_heart_disease" value="yes" />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="cancer_heart_disease" value="no" />
            No
          </label>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 mt-2">
        <label className="text-sm font-halyard text-[#00262B] font-medium">
          Have you or a biological parent or sibling been diagnosed with
          diabetes or has had a stroke before the age of 60?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="diabetes_stroke" value="yes" />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="diabetes_stroke" value="no" />
            No
          </label>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <button
          className="bg-[#FCFF7F] md:px-8 md:py-3 p-2 rounded-xl "
        >
          <p className="font-halard text-[#00262B] text-base md:text-lg font-medium">
            Submit Now
          </p>
        </button>
      </div>
    </div>
  );
};

export default PersonalInformationForm;
