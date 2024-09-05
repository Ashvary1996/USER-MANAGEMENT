import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function AllUsers() {
  const [savedUsers, setSavedUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setSavedUsers(users);
  }, []);

  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate("/edit-user", {
      state: {
        user,
      },
    });
  };

  const handleDelete = (id) => {
    const updatedUsers = savedUsers.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setSavedUsers(updatedUsers);
    toast.success("User deleted successfully!", {
      autoClose: 3000,
    });
  };

  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <ToastContainer />
      {savedUsers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b">Index</th>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">First Name</th>
                <th className="py-2 px-4 border-b">Last Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Department</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {savedUsers.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.firstName}</td>
                  <td className="py-2 px-4 border-b">{user.lastName}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.department}</td>
                  <td className="py-2 px-4 border-b flex space-x-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          No users available. Please create a new user.
        </p>
      )}
    </div>
  );
}

export default AllUsers;
