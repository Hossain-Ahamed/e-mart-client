import React from "react";
import { Link } from "react-router-dom";

const Categories = ({category}) => {
    const {_id, name, img} = category;
  return (
    <>
      <Link to={`/pages/${_id}`}>
      <div className="card bg-base-100">
        <div className="relative">
            <img src={img} alt="" className="h-[100px] md:h-32 w-48 rounded-md" />
            <div className="absolute right-2 bottom-2">
                <h2 className="text-black font-bold text-lg">{name}</h2>
            </div>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Categories;
