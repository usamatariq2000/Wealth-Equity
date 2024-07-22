import React, { useState } from "react";

interface Child {
  age: string;
  schoolType: string;
}

interface QuizStepProps {
  childrenData: Child[];
  onAddChild: (child: Child) => void;
}

const Step9: React.FC<QuizStepProps> = ({ childrenData, onAddChild }) => {
  const [age, setAge] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [showInputs, setShowInputs] = useState(false);

  const handleAddChildClick = () => {
    setShowInputs(true);
  };

  const handleSaveChildClick = () => {
    if (age && schoolType) {
      onAddChild({ age, schoolType });
      setAge("");
      setSchoolType("");
      setShowInputs(false);
    }
  };

  return (
    <div>
      <h1
        className="text-[45px] lg:text-[40px] font-normal font-jubilee mb-6"
        style={{ letterSpacing: "-2.5%" }}
      >
        Do you have children who will require educational funding?
      </h1>
      <p className="text-md lg:text-[20px] font-[400] mb-6 font-haylard">
        Planning for your children's education can make a significant impact.
        Consider tuition costs in the future.
      </p>
      <div className="mt-10 px-5">
        {!showInputs && (
          <button
            onClick={handleAddChildClick}
            className="flex w-full items-center  rounded-full "
          >
            <span className="text-4xl h-14 text-[#00262B] font-light  w-14 flex items-center justify-center bg-[#FCFF7F] rounded-full">
              +
            </span>
            <span className="ml-2 text-4xl text-[#C7C1BD]">Add a child</span>
          </button>
        )}
        {showInputs && (
          <div className="mt-4 ">
            <div className="flex  justify-between items-center">
              <div
                className="flex w-full items-center gap-5 rounded-full "
              >
                <button
                  onClick={() => setShowInputs(false)}
                  className="text-2xl h-14 text-[#00262B] font-light  w-14 flex items-center justify-center bg-[#E0D9D4] rounded-full"
                >
                  x
                </button>
                <span className="ml-2 text-5xl text-[#00262B]">Child</span>
              </div>
              <button
                onClick={handleSaveChildClick}
                className="px-4 py-2  border border-[#00555A] text-[#00555A] rounded-md"
              >
                Save
              </button>
            </div>
            <div className="flex flex-col w-full mt-10 space-y-2">
              <div className="flex gap-5 w-full">
                <div className="w-full">
                  <p className="text-md font-medium mb-3 font-haylard">
                    What is your child’s age?
                  </p>
                  <input
                    type="number"
                    placeholder="0"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="px-4 py-3 w-full font-haylard border bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
                  />
                </div>
                <div className="w-full">
                  <p className="text-md font-medium mb-3 font-haylard">
                    What type of school will they attend?
                  </p>
                  <select
                    value={schoolType}
                    onChange={(e) => setSchoolType(e.target.value)}
                    className="px-4 py-3 border w-full font-haylard bg-[#fcf8f5] border-[#e0d9d4] rounded-lg focus:outline-none focus:border-[#7d7976]"
                  >
                    <option value="" disabled>
                      Select a school type
                    </option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
        {!showInputs && (
          <div className="mt-4 overflow-x-scroll h-[200px] scrollbar-hide">
            {childrenData.map((child, index) => (
              <div key={index} className="mb-2">
                <p>Child {index + 1}:</p>
                <p>Age: {child.age}</p>
                <p>School Type: {child.schoolType}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Step9;
