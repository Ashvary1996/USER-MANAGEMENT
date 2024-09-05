import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, department } = formData;

    if (!firstName) {
      toast.error("First Name is required!");
      return false;
    }
    if (!lastName) {
      toast.error("Last Name is required!");
      return false;
    }
    if (!email) {
      toast.error("Email is required!");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newUser = {
        id: uuidv4(),
        ...formData,
      };

      const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
      savedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(savedUsers));

      toast.success("User created successfully!");

      console.log("New User:", newUser);

      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   department: "",
      // });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create New User
        </h2>
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
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600"
          >
            Create User
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserForm;
