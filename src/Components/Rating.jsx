import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, handleChange, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return (
          <>
            <span
              key={i}
              onClick={() => {
                handleChange(i);
                console.log("onclick rating");
              }}
            >
              {rating > i ? (
                <AiFillStar fontSize="15px" />
              ) : (
                <AiOutlineStar fontSize="15px" />
              )}
            </span>
          </>
        );
      })}
    </div>
  );
};

export default Rating;
