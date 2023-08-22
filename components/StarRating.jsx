import React from "react";

const StarRating = () => {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5].map((starNumber) => (
        <span
          key={starNumber}
          className={`text-3xl  text-amber-300 cursor-pointer`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
