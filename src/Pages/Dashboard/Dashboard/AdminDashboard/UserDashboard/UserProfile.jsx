import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../Contexts/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  // Fetch the user's profile
  const {
    data: profile = {},
    isLoading,
    isError,
  } = useQuery(["profile"], async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/get-profile/${user?.email}`,
        { withCredentials: true }
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "An error occurred");
    }
  });

  return (
    <>
      <div className="bg-white ">
      <div className="grid grid-cols-3 gap-5 p-5">
      <div className="w-80 p-5">
        <p className="text-sm text-gray-600">User Name:</p>
        <p className="text-lg text-black font-semibold">{user.displayName}</p>
      </div>
      <div className="w-80 p-5">
        <p className="text-sm text-gray-600">User Email</p>
        <p className="text-lg text-black font-semibold">{user.email}</p>
      </div>
      <div className="w-80 p-5">
        <p className="text-sm text-gray-600">User Address:</p>
        <p className="text-lg text-black font-semibold">{profile.address}</p>
      </div>
      <div className="w-80 p-5">
        <p className="text-sm text-gray-600">User Mobile:</p>
        <p className="text-lg text-black font-semibold">{profile.phone}</p>
      </div>
      </div>
      <div>
      <Link to="/dashboard/edit-user-profile">
        <button className="w-64 h-12 focus:ring focus:ring-3 ring-yellow-300  bg-accent text-white text-lg font-bold rounded-sm mt-5 m-5">Edit Profile</button>
      </Link>
      </div>
      </div>
    </>
  );
};

export default UserProfile;
