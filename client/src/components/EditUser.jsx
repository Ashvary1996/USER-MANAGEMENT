import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function EditUser() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = location.state || {};
  const [formData, setFormData] = useState(
    user || {
      id: "",
      firstName: "",
      lastName: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = savedUsers.map((u) =>
      u.id === formData.id ? formData : u
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.info(`User: ${formData.firstName} updated`, {
      autoClose: 3000,
      onClose: () => navigate("/all-users"),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8 px-4">
      <ToastContainer />
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-teal-500 mb-6">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              placeholder="Enter first name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-teal-500"
              placeholder="Enter last name"
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
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
