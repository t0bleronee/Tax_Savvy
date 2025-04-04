import React, { useState } from "react";
import axios from "axios";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    // Basic validations
    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const response = await axios.post("http://localhost:5000/auth/login", {
          email,
          password
        });

        if (response.data.success) {
          alert("Login successful!");
          // Add localStorage/token saving logic here if needed
          localStorage.setItem("userEmail", email);
          navigate("/home"); // Redirect to home page on successful login
        } else {
          alert(response.data.message || "Login failed!");
        }

      } else {
        const response = await axios.post("http://localhost:5000/auth/signup", {
          name,
          email,
          password
        });

        if (response.data.success) {
          alert("Signup successful! Redirecting to homepage...");
          localStorage.setItem("userEmail", email); // Save user session
          navigate("/home"); // Redirect to home page directly after signup
        } else {
          alert(response.data.message || "Signup failed!");
        }
      }

    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center" style={{ backgroundColor: "#2EA77D" }}>
      <div className="p-2 flex-grow">
        <div className="smallContainer border shadow rounded">
          <div className="row g-0">
            {/* Left Buttons */}
            <div className="col-sm-6 col-xs-12 d-none d-sm-block position-relative" id="leftCol" style={{ backgroundColor: "#D1E0E0" }}>
              <div className="position-absolute end-0 top-50 translate-middle-y d-flex flex-column text-end w-100 px-3">
              <button
  style={{
    backgroundColor: isLogin ? "#064635" : "white",
    color: isLogin ? "white" : "black",
    border: isLogin ? "none" : "1px solid #ccc",
    padding: "10px 20px",
    borderRadius: "5px",
    width:"100%",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s, color 0.3s",
    marginBottom:"5px",
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = isLogin ? "#064635" : "#0b8b57")}
  onMouseOut={(e) => (e.target.style.backgroundColor = isLogin ? "#064635" : "white")}
  onClick={() => setIsLogin(true)}
>
  Login
</button>

<button
  style={{
    backgroundColor: !isLogin ? "#064635" : "white",
    color: !isLogin ? "white" : "black",
    border: !isLogin ? "none" : "1px solid #ccc",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    width:"100%",
    fontSize: "16px",
    transition: "background 0.3s, color 0.3s",
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = !isLogin ? "#064635" : "#0b8b57")}
  onMouseOut={(e) => (e.target.style.backgroundColor = !isLogin ? "#064635" : "white")}
  onClick={() => setIsLogin(false)}
>
  Signup
</button>

              </div>
            </div>

            {/* Right Form Section */}
            <div className="col-sm-6 col-xs-12">
              <div className="d-flex flex-column h-100 justify-content-center">
                <div className="p-5 text-center">
                  <img src="/Assets/logo2.jpg" height="75" alt="Logo" className="mb-3" />
                  <h2 className="h3 pb-3">{isLogin ? "LOGIN" : "SIGNUP"}</h2>

                  <form onSubmit={handleSubmit}>
                    {/* Name Field (Signup Only) */}
                    {!isLogin && (
                      <div className="position-relative my-3 inputGroup">
                        <span className="position-absolute"><i className="far fa-user"></i></span>
                        <input
                          type="text"
                          name="name"
                          className="border-0 border-bottom w-100"
                          placeholder="Enter Name"
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    {/* Email Field */}
                    <div className="position-relative my-3 inputGroup">
                      <span className="position-absolute"><i className="far fa-envelope"></i></span>
                      <input
                        type="email"
                        name="email"
                        className="border-0 border-bottom w-100"
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Password Field */}
                    <div className="position-relative my-3 inputGroup">
                      <span className="position-absolute"><i className="far fa-eye-slash"></i></span>
                      <input
                        type="password"
                        name="password"
                        className="border-0 border-bottom w-100"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Confirm Password Field (Signup Only) */}
                    {!isLogin && (
                      <div className="position-relative my-3 inputGroup">
                        <span className="position-absolute"><i className="far fa-eye-slash"></i></span>
                        <input
                          type="password"
                          name="confirmPassword"
                          className="border-0 border-bottom w-100"
                          placeholder="Confirm Password"
                          value={form.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    )}

                    <div className="d-flex align-items-center justify-content-between pt-2">
                    
                      <button
                        type="submit"
                        className="btn btn-success px-4 rounded-pill ms-auto"
                        disabled={loading}
                      >
                        {loading ? "Please wait..." : "SUBMIT"}
                      </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
