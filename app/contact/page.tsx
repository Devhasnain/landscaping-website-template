"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Breadcrumb, Container } from "@/components";
import { useState } from "react";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number format")
    .required("Phone number is required"),
  subject: Yup.string().required("Please select a subject"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
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
          body: JSON.stringify({ ...values, type: "CONTACT" }),
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
    <main className="min-h-screen bg-white">
      <section className=" relative min-h-[50vh] bg-green-lite flex flex-col justify-end pb-10 pt-24">
        <Container className="text-white">
          <Breadcrumb
            items={[
              {
                name: "Home",
                href: "/",
              },
              {
                name: "Contact",
                href: "/contact",
              },
            ]}
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-tight text-white">
            LET'S BUILD YOUR <br />
            <span className="text-gray">DREAM GARDEN</span> TOGETHER
          </h1>
          <p className="text-sm md:text-base text-white max-w-xl leading-relaxed">
            Have a question about our landscaping services or want to discuss a
            custom project? Reach out to us using the form below or contact us
            directly.
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-10">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-background p-8 rounded-3xl space-y-6 shadow-sm">
              <h3 className="text-xl font-bold uppercase tracking-wide text-[#1a2218]">
                Get In Touch
              </h3>

              <div className="space-y-6 text-sm text-[#4a5244]">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-[#2b3524] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#1a2218]">
                      Location
                    </span>
                    <p className="mt-1">
                      123 Landscape Avenue, Sunnyvale, CA 94086
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f4f2e6] flex items-center justify-center text-[#2b3524] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#1a2218]">
                      Phone
                    </span>
                    <p className="mt-1">
                      +1 (555) 234-5678 / +1 (555) 876-5432
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f4f2e6] flex items-center justify-center text-[#2b3524] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#1a2218]">
                      Email
                    </span>
                    <p className="mt-1">
                      info@leaflife.com / support@leaflife.com
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f4f2e6] flex items-center justify-center text-[#2b3524] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold text-xs uppercase text-[#1a2218]">
                      Working Hours
                    </span>
                    <p className="mt-1">
                      Mon - Sat: 8:00 AM - 6:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#e8e5d5] p-6 sm:p-10 rounded-3xl shadow-sm">
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
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
                    placeholder="John Doe"
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

                {/* Email */}
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
                    placeholder="john@example.com"
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Phone */}
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
                    placeholder="+1 (555) 000-0000"
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

                {/* Subject Select */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase font-bold text-[#1a2218]"
                  >
                    Subject / Inquiry *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    className={`w-full bg-[#f4f2e6] border ${
                      formik.touched.subject && formik.errors.subject
                        ? "border-red-500"
                        : "border-[#c5c2b0]"
                    } rounded-xl px-4 py-3 text-sm text-[#1a2218] focus:outline-none focus:border-[#2b3524] transition-colors`}
                  >
                    <option value="" disabled>
                      Select a subject...
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="consultation">
                      Garden Design Consultation
                    </option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="hardscaping">Hardscaping Project</option>
                  </select>
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-xs text-red-600">
                      {formik.errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-xs uppercase font-bold text-[#1a2218]"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or inquiry..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  className={`w-full bg-[#f4f2e6] border ${
                    formik.touched.message && formik.errors.message
                      ? "border-red-500"
                      : "border-[#c5c2b0]"
                  } rounded-xl px-4 py-3 text-sm text-[#1a2218] placeholder-[#949a8d] focus:outline-none focus:border-[#2b3524] transition-colors resize-none`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-xs text-red-600">
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center space-x-2 bg-[#2b3524] hover:bg-[#1a2218] text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}
