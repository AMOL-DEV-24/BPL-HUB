"use client";

import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function LoginPage() {
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(4, "Password too short")
      .required("Password is required"),
  });

  const handleSubmit = (values: any) => {
    const { email, password } = values;

    if (email === "admin@bpl.com" && password === "admin123") {
      localStorage.setItem("bpl_token", "valid-token");
      router.push("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-glow auth-glow-1" />
      <div className="auth-glow auth-glow-2" />

      <div className="auth-brand">BPL</div>

      <div className="auth-card">
        <h1 className="auth-title">Welcome Back 👋</h1>

        <p className="auth-subtitle">
          Login to access BPL HUB Admin Dashboard
        </p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="auth-form">
              <div className="auth-group">
                <Field name="email" type="email" placeholder="Enter Email" />
                <ErrorMessage name="email" component="div" className="auth-error" />
              </div>

              <div className="auth-group">
                <Field name="password" type="password" placeholder="Enter Password" />
                <ErrorMessage name="password" component="div" className="auth-error" />
              </div>

              <button type="submit" className="auth-button">
                Login
              </button>
            </Form>
          )}
        </Formik>

        <div className="auth-footer">
          Secure Admin Access Only
        </div>
      </div>
    </div>
  );
}