import React from "react";
import { Link } from "react-router-dom";

function ContactSunshine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 flex flex-col justify-between">
      <div className="max-w-3xl mx-auto text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          ☀️ Sunshine University
        </h1>
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">
          We’d love to hear from you! Reach out using the details below or
          return to the homepage to learn more.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-left mx-auto w-full md:w-2/3">
          <p className="text-gray-700 mb-3">
            📍 Sunshine Avenue, Knowledge City, Pune, India
          </p>
          <p className="text-gray-700 mb-3">📞 +91 98765 43210</p>
          <p className="text-gray-700 mb-3">✉️ info@sunshineuniv.edu.in</p>
        </div>

        <Link
          to="/"
          className="inline-block mt-10 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          ⬅️ Back to Sunshine University
        </Link>
      </div>
    </div>
  );
}

export default ContactSunshine;
