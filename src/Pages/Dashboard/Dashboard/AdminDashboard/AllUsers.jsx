import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import AllUsers_Row from "./AllUsers_Row";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axios.get("http://localhost:5000/users", {
      withCredentials: true,
    });
    console.log(res.data);
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    const ghorardim = { id: user?._id };
    axios
      .patch(`http://localhost:5000/users/admin/${user._id}`, ghorardim, {
        withCredentials: true,
      })
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <>
      {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => <AllUsers_Row key={index} user={user} index={index+1}></AllUsers_Row>)}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
