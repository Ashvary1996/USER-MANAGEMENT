import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        toast.error("Failed to fetch users from API!", { autoClose: 3000 });
        console.error("API fetch error:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    navigate("/edit-user", { state: { user } });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
      toast.success("User deleted successfully!", { autoClose: 3000 });
    } catch (error) {
      toast.error("Failed to delete user!", { autoClose: 3000 });
      console.error("API delete error:", error);
    }
  };

  const splitName = (fullName) => {
    const [firstName, ...lastName] = fullName.split(" ");
    return { firstName, lastName: lastName.join(" ") };
  };

  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <ToastContainer />
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th className="py-2 px-4 border-b text-left">S.no</th>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">First Name</th>
                <th className="py-2 px-4 border-b text-left">Last Name</th>
                <th className="py-2 px-4 border-b text-left">Email</th>
                <th className="py-2 px-4 border-b text-left">Department</th>
                <th className="py-2 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                const { firstName, lastName } = splitName(user.name || "");
                return (
                  <tr
                    key={user.id}
                    className={`hover:bg-teal-100 ${
                      index % 2 !== 0 ? "bg-slate-200" : "bg-slate-100"
                    }`}
                  >
                    <td className="py-2 px-4 border-b text-left">
                      {index + 1}
                    </td>
                    <td className="py-2 px-4 border-b text-left">{user.id}</td>
                    <td className="py-2 px-4 border-b text-left">
                      {firstName}
                    </td>
                    <td className="py-2 px-4 border-b text-left">{lastName}</td>
                    <td className="py-2 px-4 border-b text-left">
                      {user.email}
                    </td>
                    <td className="py-2 px-4 border-b text-left">
                      {user.department || "N/A"}
                    </td>
                    <td className="py-2 px-4 border-b text-left flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
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
                );
              })}
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
