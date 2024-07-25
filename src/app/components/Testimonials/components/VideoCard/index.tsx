import React from "react";
import { FaPlayCircle } from "react-icons/fa";

interface Story {
  quote: string;
  name: string;
  city: string;
  state: string;
  img: string;
}

interface VideoCardProps {
  story: Story;
}

const VideoCard: React.FC<VideoCardProps> = ({ story }) => {
  return (
    <div className="w-[350px] flex flex-col gap-2">
      <div
        className="relative w-[21.7rem] h-[20rem]"
        style={{
          backgroundImage: `url(${story.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "200px", // Adjust as needed for the top left
          borderTopRightRadius: "200px", // Adjust as needed for the top right
          borderBottomLeftRadius: "18px", // Custom radius for bottom left
          borderBottomRightRadius: "18px", // Custom radius for bottom right
        }}
      >
        <img
          src="/images/Play.png"
          style={{ width: "70px" }}
          className=" absolute inset-0 m-auto"
          alt="Quote Icon"
        />
      </div>
      <div className="flex flex-col mt-3 ">
        <img
          src="/images/quote.png"
          style={{ width: "50px" }}
          className="mt-6"
          alt="Quote Icon"
        />
        <p className="text-[#00262B] font-halyard mt-4 text-md font-light">
          {story.quote}
        </p>
        <p className="mt-3 font-[600] italic font-light-haylard text-2xl text-[#00575b]">
          {story.name}
        </p>
        <p className="text-[#7D7976]  font-halyard">{`${story.city}, ${story.state}`}</p>
      </div>
    </div>
  );
};

export default VideoCard;
