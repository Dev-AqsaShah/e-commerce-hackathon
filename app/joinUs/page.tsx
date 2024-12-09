import React from "react";
import Image from "next/image";

const JoinUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6 text-center">

        {/* Logo */}
        <div>
          <Image src="/assets/logo.png" alt="Logo" width={400} height={200} className="mx-auto w-24 h-24 object-contain" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold">Become a Nike Member</h1>

        {/* Subheading */}
        <p className="text-sm text-gray-600">
          Create your Nike Member profile and get first access to the very best of Nike products
        </p>

        {/* Join Us Form */}
        <form className="space-y-4 text-left">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block text-lg font-medium">Date of Birth</label>
            <input
              type="date"
              id="dob"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-lg font-medium">Gender</label>
            <select
              id="gender"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
          >
            Join Us
          </button>
        </form>

        {/* Already a Member */}
        <p className="text-sm text-gray-600">
          Already a member <a href="/signin" className="text-black font-semibold hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default JoinUsPage;
