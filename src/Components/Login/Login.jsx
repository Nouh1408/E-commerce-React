import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img1 from "../../assets/Top 10 E-commerce App Development Companies.jpeg";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === form.email && user.password === form.password
    );

    if (!user) {
      alert("user dosn't exist");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        
        <div className="col-md-6 d-none d-md-flex p-0 h-100">
          <img
            src={img1}
            alt="Shopping"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light h-100">
          <div className="card shadow-lg p-5 w-100" style={{ maxWidth: "420px" }}>
            <h2 className="mb-3 text-center fw-bold">Welcome Back </h2>
            <p className="text-muted text-center mb-4">
              Login to continue shopping
            </p>

            <form onSubmit={handleSubmit} className="w-100">
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
                  placeholder="pasword"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-2 fw-semibold"
              >
                Login
              </button>
            </form>

            <p className="text-center mt-4 mb-0">
              Don’t have an account?{" "}
              <Link to="/register" className="fw-semibold text-decoration-none">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
