import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 to-blue-100 text-gray-800 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-16 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We'd love to hear from you! Whether you have questions about our
          courses, admissions, or anything else — our team is ready to help.
        </p>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>📍 Sunshine Avenue, Knowledge City, Pune, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@sunshineuniv.edu.in</p>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
