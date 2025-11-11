import React from "react";
import { Link } from "react-router-dom";  // <-- Add this line

function ContactRiverdalePage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 text-gray-800 flex flex-col justify-between">
        <div className="max-w-3xl mx-auto text-center py-20 px-6">
          <h1 className="text-5xl font-extrabold text-green-700 mb-6">
            🌿 Riverdale University
          </h1>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg mb-6">
            Have questions or need guidance? We’re here to help! Use the details
            below or return to the homepage to learn more.
          </p>
  
          <div className="bg-white rounded-2xl shadow-lg p-8 text-left mx-auto w-full md:w-2/3">
            <p className="text-gray-700 mb-3">📍 Riverside Lane, Academic Park, Bengaluru, India</p>
            <p className="text-gray-700 mb-3">📞 +91 98765 12345</p>
            <p className="text-gray-700 mb-3">✉️ info@riverdaleuniv.edu.in</p>
          </div>
  
          <Link
            to="/university2"
            className="inline-block mt-10 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
          >
            ⬅️ Back to Riverdale University
          </Link>
        </div>
      </div>
    );
  }
  
  export default ContactRiverdalePage;
  