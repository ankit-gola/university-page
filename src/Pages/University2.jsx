import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function University2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [course, setCourse] = useState("");
  const [intakeYear, setIntakeYear] = useState("");
  const [success, setSuccess] = useState(false);
  const [showFeeModal, setShowFeeModal] = useState(false);
  const [fees, setFees] = useState([]);
  const [theme, setTheme] = useState("light"); // light or dark

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Fetch fees
  const fetchFees = async () => {
    try {
      const response = await axios.get("/fees.json");
      setFees(response.data);
      setShowFeeModal(true);
    } catch (error) {
      console.error("Error fetching fees:", error);
      alert("Unable to load fees. Please try again later.");
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(import.meta.env.VITE_PIPEDREAM_ENDPOINT, {
        name,
        email,
        phone,
        state,
        course,
        intakeYear,
        university: "Riverdale University",
      });
      setSuccess(true);
      alert("🎉 Form submitted successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setState("");
      setCourse("");
      setIntakeYear("");
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("⚠️ Submission failed. Check console for details.");
    }
  };

  const themeClasses = {
    pageBg: theme === "light" ? "bg-gradient-to-br from-green-50 to-green-100 text-gray-800" : "bg-gray-900 text-gray-100",
    cardBg: theme === "light" ? "bg-white" : "bg-gray-800",
    heading: theme === "light" ? "text-green-700" : "text-green-300",
    subHeading: theme === "light" ? "text-green-800 border-green-300" : "text-green-300 border-green-500",
    text: theme === "light" ? "text-gray-700" : "text-gray-200",
    inputBg: theme === "light" ? "bg-white" : "bg-gray-700",
    inputText: theme === "light" ? "text-gray-800" : "text-gray-100",
    buttonBg: theme === "light" ? "bg-green-600 hover:bg-green-700" : "bg-green-500 hover:bg-green-600",
    footerBg: theme === "light" ? "bg-green-700 text-white" : "bg-gray-900 text-gray-200",
    linkText: theme === "light" ? "text-green-100" : "text-gray-200",
  };

  return (
    <div id="top" className={`min-h-screen px-6 py-10 flex flex-col justify-between ${themeClasses.pageBg}`}>
      {/* Main Card */}
      <div className={`max-w-5xl mx-auto rounded-3xl shadow-2xl p-10 md:p-16 ${themeClasses.cardBg} relative`}>

        {/* Theme Switcher Button */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="absolute top-4 right-4 md:top-8 md:right-8 px-5 py-3 md:px-6 md:py-3 rounded-full shadow-lg transition transform hover:scale-105 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold hover:from-teal-500 hover:to-green-500"
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className={`text-5xl font-extrabold mb-2 ${themeClasses.heading}`}>Riverdale University</h1>
          <p className={`text-lg ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}>
            🌿 Empowering innovation and excellence through quality education.
          </p>
        </div>

        {/* About Section */}
        <section className="mb-12">
          <h2 className={`text-3xl font-semibold mb-3 pb-2 border-b-2 ${themeClasses.subHeading}`}>About the University</h2>
          <p className={`leading-relaxed text-justify ${themeClasses.text}`}>
            Riverdale University, established in 2005, is a top-tier institution
            known for its academic excellence, innovation, and commitment to
            producing future-ready leaders. With cutting-edge research and
            global collaboration, it offers students a platform to achieve
            success across industries.
          </p>
        </section>

        {/* Courses Section */}
        <section id="courses" className="mb-12 scroll-mt-20">
          <h2 className={`text-3xl font-semibold mb-3 pb-2 border-b-2 ${themeClasses.subHeading}`}>🎓 Popular Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "B.Tech in Computer Science", desc: "Specialize in AI, ML, and software development with practical industry projects." },
              { title: "BBA in Marketing & Management", desc: "Gain global business insights and leadership skills for modern enterprises." },
              { title: "MBA in Data Analytics", desc: "Use AI-driven insights to make smarter business decisions." },
              { title: "M.Tech in Cybersecurity", desc: "Protect digital infrastructure and master ethical hacking and cryptography." },
              { title: "B.Sc. in Biotechnology", desc: "Explore life sciences and molecular research to advance healthcare technology." },
              { title: "BA in Digital Media & Communication", desc: "Learn storytelling, branding, and communication for modern media platforms." },
            ].map((course, index) => (
              <div key={index} className={`border rounded-xl p-5 hover:shadow-lg transition-all ${theme === "light" ? "bg-green-50 border-green-200" : "bg-gray-700 border-gray-600"}`}>
                <h3 className={`text-xl font-bold mb-2 ${themeClasses.heading}`}>{course.title}</h3>
                <p className="text-sm">{course.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees Button */}
        <div className="text-center mb-10">
          <button
            onClick={fetchFees}
            className={`px-6 py-3 rounded-lg font-semibold ${themeClasses.buttonBg} text-white transition transform hover:scale-105`}
          >
            💰 Check Course-wise Fees
          </button>
        </div>

        {/* Fees Modal */}
        {showFeeModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fadeIn">
            <div className={`p-8 w-11/12 sm:w-2/3 md:w-1/2 relative rounded-2xl shadow-2xl ${themeClasses.cardBg}`}>
              <h2 className={`text-3xl font-bold mb-4 ${themeClasses.heading}`}>📘 Course-wise Fee Structure</h2>
              {fees.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {fees.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between">
                      <span className={`${themeClasses.text} font-medium`}>{item.course}</span>
                      <span className={`${themeClasses.heading} font-semibold`}>₹{item.feeRange}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={themeClasses.text}>Loading fee details...</p>
              )}
              <button
                onClick={() => setShowFeeModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Lead Form */}
        <section id="admissions" className={`p-8 rounded-2xl shadow-md scroll-mt-20 ${theme === "light" ? "bg-gradient-to-br from-green-50 to-white" : "bg-gray-800"}`}>
          <h2 className={`text-3xl font-semibold mb-3 pb-2 border-b-2 ${themeClasses.subHeading}`}>Request More Information</h2>

          {success && (
            <div className={`p-3 rounded-lg mb-4 border font-medium ${theme === "light" ? "bg-green-100 text-green-700 border-green-300" : "bg-gray-700 text-gray-100 border-gray-600"}`}>
              🎉 Thank you! Your information has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Full Name", value: name, setValue: setName, type: "text" },
                { label: "Email Address", value: email, setValue: setEmail, type: "email" },
                { label: "Phone Number", value: phone, setValue: setPhone, type: "tel" },
                { label: "State", value: state, setValue: setState, type: "text" },
                { label: "Course of Interest", value: course, setValue: setCourse, type: "text" },
                { label: "Intended Intake Year", value: intakeYear, setValue: setIntakeYear, type: "number" },
              ].map((field, idx) => (
                <label key={idx} className="flex flex-col">
                  {field.label}
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    required
                    className={`mt-1 p-3 rounded-lg border focus:ring-2 outline-none 
                      ${theme === "light" ? "bg-white text-gray-800 border-gray-300 focus:ring-green-400"
                        : "bg-gray-700 text-gray-100 border-gray-600 focus:ring-green-400"}`}
                  />
                </label>
              ))}
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold ${themeClasses.buttonBg} text-white transition transform hover:scale-105`}
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>

      {/* 🌞 Back to Sunshine University Section */}
      <div className="text-center my-10">
        <h2 className={`text-2xl font-semibold mb-4 ${themeClasses.heading}`}>
          Want to explore our partner university?
        </h2>
        <Link
          to="/"
          className={`inline-block px-8 py-3 rounded-lg font-semibold text-white transition transform hover:scale-105 ${theme === "light"
              ? "bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500"
              : "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-600"
            }`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ☀️ Back to Sunshine University →
        </Link>
      </div>

      {/* Footer */}
      <footer className={`${themeClasses.footerBg} mt-16 py-10 px-6 rounded-t-3xl shadow-inner`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left: University Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-2">Riverdale University</h3>
            <p className={themeClasses.linkText}>Riverside Lane, Academic Park, Bengaluru, India</p>
            <p className={`${themeClasses.linkText} mt-2`}>📞 +91 98765 12345</p>
            <p className={themeClasses.linkText}>✉️ info@riverdaleuniv.edu.in</p>
          </div>

          {/* Right: Quick Links */}
          <div className="mt-6 md:mt-0 text-right mr-8 md:mr-12">
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className={`hover:underline ${themeClasses.linkText}`}
                >
                  Home
                </button>
              </li>
              <li><a href="#admissions" className={`hover:underline ${themeClasses.linkText}`}>Admissions</a></li>
              <li><a href="#courses" className={`hover:underline ${themeClasses.linkText}`}>Courses</a></li>
              <li>
                <Link
                  to="/contact-riverdale"
                  className={`hover:underline ${themeClasses.linkText}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`text-center mt-8 border-t pt-4 text-sm ${theme === "light" ? "border-green-500 text-green-100" : "border-gray-600 text-gray-400"}`}>
          © {new Date().getFullYear()} Riverdale University. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default University2;
