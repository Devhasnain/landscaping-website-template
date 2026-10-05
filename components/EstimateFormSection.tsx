"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Container } from "./Container";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should be minimum 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Invalid Phone number")
    .required("Phone number is required"),
  service: Yup.string().required("Service is required"),
  budget: Yup.number()
    .positive("Budget should be a positive number")
    .required("Budget is required"),
    message:Yup.string().required("Message is required")
});

export function EstimateFormSection() {
    const [loading, setLoading] = useState(false);
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);

        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, subject:values.service, type: "ESTIMATE" }),
        });

        const data = await res.json().catch(() => null);

        if (!res.ok) {
          throw new Error(
            data?.message || `Request failed with status ${res.status}`
          );
        }

        resetForm();
        alert("Thank you for contacting us! We will get back to you shortly.");
      } catch (error: any) {
        alert(error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section id="estimate" className="py-16 md:py-24 text-[#2b3524]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header Info (Title & Paragraph) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-[#1a2218]">
              Request a Free <br />
              <span className="text-gray-600">Project</span> Estimate
            </h2>
            <p className="text-sm md:text-base text-[#6b7265] leading-relaxed">
              Ready to transform your outdoor space? Tell us about your project and our team will visit your site, discuss your ideas, and provide a clear, detailed estimate. There is no cost and no obligation, just honest advice from experienced landscape professionals.
            </p>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-sm">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase font-bold text-[#1a2218]"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Juan Dela Cruz"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`w-full bg-[#f4f2e6] border ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-500"
                        : "border-[#c5c2b0]"
                    } rounded-xl px-4 py-3 text-sm text-[#1a2218] placeholder-[#949a8d] focus:outline-none focus:border-[#2b3524] transition-colors`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-xs text-red-600">{formik.errors.name}</p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase font-bold text-[#1a2218]"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juan@example.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full bg-[#f4f2e6] border ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-500"
                        : "border-[#c5c2b0]"
                    } rounded-xl px-4 py-3 text-sm text-[#1a2218] placeholder-[#949a8d] focus:outline-none focus:border-[#2b3524] transition-colors`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-xs text-red-600">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase font-bold text-[#1a2218]"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="+63 912 345 6789"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    className={`w-full bg-[#f4f2e6] border ${
                      formik.touched.phone && formik.errors.phone
                        ? "border-red-500"
                        : "border-[#c5c2b0]"
                    } rounded-xl px-4 py-3 text-sm text-[#1a2218] placeholder-[#949a8d] focus:outline-none focus:border-[#2b3524] transition-colors`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-xs text-red-600">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                {/* Service Select Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase font-bold text-[#1a2218]"
                  >
                    Want an estimate for *
                  </label>
                  <select
                    id="service"
                    name="service"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.service}
                    className={`w-full bg-[#f4f2e6] border ${
                      formik.touched.service && formik.errors.service
                        ? "border-red-500"
                        : "border-[#c5c2b0]"
                    } rounded-xl px-4 py-3 text-sm text-[#1a2218] focus:outline-none focus:border-[#2b3524] transition-colors`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="garden-design">Garden Design</option>
                    <option value="plant-selection">Plant Selection</option>
                    <option value="hardscaping">Hardscaping</option>
                    <option value="garden-maintenance">
                      Garden Maintenance
                    </option>
                    <option value="full-landscape">
                      Full Landscape Transformation
                    </option>
                  </select>
                  {formik.touched.service && formik.errors.service && (
                    <p className="text-xs text-red-600">
                      {formik.errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Budget Input */}
              <div className="space-y-2">
                <label
                  htmlFor="budget"
                  className="block text-xs uppercase font-bold text-[#1a2218]"
                >
                  Estimated Project Budget ($ USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#6b7265] font-bold">
                    $
                  </span>
                  <input
                    id="budget"
                    name="budget"
                    type="number"
                    placeholder="halimbawa: 5000"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.budget}
                    className={`w-full bg-[#f4f2e6] border ${
                      formik.touched.budget && formik.errors.budget
                        ? "border-red-500"
                        : "border-[#c5c2b0]"
                    } rounded-xl pl-8 pr-4 py-3 text-sm text-[#1a2218] placeholder-[#949a8d] focus:outline-none focus:border-[#2b3524] transition-colors`}
                  />
                </div>
                {formik.touched.budget && formik.errors.budget && (
                  <p className="text-xs text-red-600">{formik.errors.budget}</p>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase font-bold text-[#1a2218]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`w-full bg-[#f4f2e6] border ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : "border-[#c5c2b0]"
                  } rounded-xl px-4 py-3 text-sm text-[#1a2218] placeholder-[#949a8d] focus:outline-none focus:border-[#2b3524] transition-colors`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-xs text-red-600">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full cursor-pointer sm:w-auto bg-[#2b3524] hover:bg-[#1a2218] text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl transition-colors duration-200"
              >
                {loading ? "Submitting..." : "Submit Estimate Request"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
