import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = location.state || {};
  const [formData, setFormData] = useState(
    user || {
      id: "",
      name: "",
      email: "",
      department: "",
    }
  );

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, email, department } = formData;
    if (!name) {
      toast.error("Name is required!");
      return false;
    }
    if (!email) {
      toast.error("Email is required!");
      return false;
    }
    if (!department) {
      toast.error("Department is required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/users/${formData.id}`,
          formData
        );
        toast.success("User updated successfully!");
        navigate("/all-users");
      } catch (error) {
        toast.error("Failed to update user!");
        console.error("API update error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              placeholder="Enter name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              placeholder="Enter department"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
          >
            Update User
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default EditUser;
