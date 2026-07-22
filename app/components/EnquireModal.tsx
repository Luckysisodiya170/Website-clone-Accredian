"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useModal } from "@/app/context/ModalContext";

const DOMAINS = [
  "Product Management",
  "CFO",
  "Data Science",
  "Artificial Intelligence",
  "Human Resource",
  "Strategy & Leadership",
  "Digital Transformation",
  "Business Management",
  "Finance",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  deliveryMode: string;
  location: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  deliveryMode: "",
  location: "",
};

type Status = "idle" | "loading" | "success" | "error";

export default function EnquireModal() {
  const { isOpen, closeModal } = useModal();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [closeModal]);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  function handleClose() {
    closeModal();
    setTimeout(() => {
      setStatus("idle");
      setErrorMsg("");
    }, 300);
  }

  if (!isOpen) return null;

  return (
    <div
      id="enquire-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-gray-200">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div>
            <h2 id="modal-title" className="text-lg font-extrabold text-slate-900">
              Enquire Now
            </h2>
            <p className="text-xs text-slate-500">
              Fill in your details and our team will reach out within 24 hours.
            </p>
          </div>
          <button
            id="modal-close-btn"
            onClick={handleClose}
            aria-label="Close modal"
            className="rounded-md p-1.5 text-slate-400 hover:bg-gray-100 hover:text-slate-700 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                <svg className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Enquiry Submitted!
              </h3>
              <p className="max-w-sm text-xs text-slate-600">
                Thank you for reaching out. Our enterprise team will contact you within 24 business hours.
              </p>
              <button
                id="modal-success-close-btn"
                onClick={handleClose}
                className="mt-2 px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-xs"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              id="enquire-form"
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4"
            >
              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="field-name" className="mb-1 block text-xs font-semibold text-slate-900">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="field-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="field-email" className="mb-1 block text-xs font-semibold text-slate-900">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="field-email"
                    name="email"
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Row: Phone + Company */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="field-phone" className="mb-1 block text-xs font-semibold text-slate-900">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-xs font-medium text-slate-500">
                      +91
                    </span>
                    <input
                      id="field-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-r-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="field-company" className="mb-1 block text-xs font-semibold text-slate-900">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="field-company"
                    name="company"
                    type="text"
                    required
                    placeholder="Acme Corp Pvt. Ltd."
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              {/* Domain */}
              <div>
                <label htmlFor="field-domain" className="mb-1 block text-xs font-semibold text-slate-900">
                  Select Domain
                </label>
                <select
                  id="field-domain"
                  name="domain"
                  value={form.domain}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  <option value="">— Select a domain —</option>
                  {DOMAINS.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              {/* Row: Candidates + Delivery Mode */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="field-candidates" className="mb-1 block text-xs font-semibold text-slate-900">
                    No. of Candidates
                  </label>
                  <input
                    id="field-candidates"
                    name="candidates"
                    type="number"
                    min={1}
                    placeholder="e.g. 50"
                    value={form.candidates}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="field-delivery" className="mb-1 block text-xs font-semibold text-slate-900">
                    Mode of Delivery
                  </label>
                  <select
                    id="field-delivery"
                    name="deliveryMode"
                    value={form.deliveryMode}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="">— Select mode —</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="field-location" className="mb-1 block text-xs font-semibold text-slate-900">
                  Location
                </label>
                <input
                  id="field-location"
                  name="location"
                  type="text"
                  placeholder="e.g. Gurgaon, Delhi, India"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>

              {/* Error */}
              {status === "error" && (
                <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                  {errorMsg}
                </p>
              )}

              {/* Submit Button */}
              <button
                id="enquire-form-submit"
                type="submit"
                disabled={status === "loading"}
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-xs flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>

              {/* <p className="text-center text-[11px] text-slate-500">
                By submitting, you agree to our{" "}
                <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
              </p> */}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
