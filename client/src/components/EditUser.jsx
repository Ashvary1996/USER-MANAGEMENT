import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

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
      const [firstName, ...lastName] = user.name.split(" ");
      setFormData({
        ...user,
        firstName,
        lastName: lastName.join(" "),
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, department } = formData;
    if (!firstName) {
      toast.error("First name is required!");
      return false;
    }
    if (!lastName) {
      toast.error("Last name is required!");
      return false;
    }
    if (!email) {
      toast.error("A valid email is required!");
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
          {
            ...formData,
            name: `${formData.firstName} ${formData.lastName}`,
          }
        );
        toast.success("User updated successfully!", {
          autoClose: 3000,
          onClose: () => navigate("/all-users"),
        });
      } catch (error) {
        toast.error("Failed to update user!", {
          autoClose: 3000,
        });
        console.error("API update error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
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
            <label className="block text-gray-700 mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
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
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
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
            <label className="block text-gray-700 mb-1" htmlFor="department">
              Department
            </label>
            <input
              id="department"
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
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Update User
          </button>
        </form>
        <ToastContainer autoClose={5000} />{" "}
      </div>
    </div>
  );
}

export default EditUser;
