import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img1 from "../../assets/Top 10 E-commerce App Development Companies.jpeg";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/login");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 d-none d-md-flex p-0 h-100">
          <img
            src={img1}
            alt="E-commerce illustration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light h-100">
          <div className="card shadow-lg p-5 w-100" style={{ maxWidth: "420px" }}>
            <h2 className="mb-3 text-center fw-bold">Create Account ✨</h2>
            <p className="text-muted text-center mb-4">
              Register to start your shopping journey
            </p>

            <form onSubmit={handleSubmit} className="w-100">
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold"
              >
                Create Account
              </button>
            </form>

            <p className="text-center mt-4 mb-0">
              Already have an account?{" "}
              <Link to="/login" className="fw-semibold text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
