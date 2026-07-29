"use client";

import { useState } from "react";
import { CalendarDays, MessageCircle, Package, Phone, User, Users } from "lucide-react";

type TourEnquiryFormProps = {
  prefilledPackage?: string;
};

export default function TourEnquiryForm({
  prefilledPackage,
}: TourEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dates: "",
    travelers: "",
    package: prefilledPackage ?? "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsApp = () => {
    const text = `Hello Ezora Tours 👋

I would like to enquire about the following Kerala tour package.

━━━━━━━━━━━━━━━━━━

📍 Package: ${formData.package || "Not specified"}

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email}

📅 Travel Dates: ${formData.dates || "Flexible"}

👥 Travellers: ${formData.travelers || "Not specified"}

💬 Additional Requirements:
${formData.message || "No additional requirements."}

━━━━━━━━━━━━━━━━━━

Please share the itinerary, pricing and availability.

Thank you!`;

    // Replace with your WhatsApp number
    const waNumber = "+919876543210";

    window.open(
      `https://wa.me/${waNumber.replace(
        /[^0-9]/g,
        ""
      )}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit to backend if needed

    handleWhatsApp();
  };

  return (
    <div className="rounded-[32px] max-w-[1440px] mx-auto border border-border bg-white p-8 shadow-sm lg:p-10">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
          Tour Enquiry
        </span>

        <h2 className="mt-2 text-3xl font-semibold text-dark-cerulean">
          Plan Your Kerala Holiday
        </h2>

        <p className="mt-3 text-muted">
          Tell us your travel plans and our team will prepare the perfect
          itinerary for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            <User size={14} />
            Full Name
          </label>

          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full rounded-2xl border border-border bg-surface-soft px-5 py-3.5 text-dark-cerulean outline-none transition focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
          />
        </div>

        {/* Phone + Email */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
              <Phone size={14} />
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full rounded-2xl border border-border bg-surface-soft px-5 py-3.5 outline-none transition focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
              @ Email Address
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-2xl border border-border bg-surface-soft px-5 py-3.5 outline-none transition focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
            />
          </div>
        </div>

        {/* Dates + Travellers */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
              <CalendarDays size={14} />
              Travel Dates
            </label>

            <input
              type="text"
              name="dates"
              value={formData.dates}
              onChange={handleChange}
              placeholder="15 Oct - 20 Oct"
              className="w-full rounded-2xl border border-border bg-surface-soft px-5 py-3.5 outline-none transition focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
            />
          </div>

          <div>
            <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
              <Users size={14} />
              Travellers
            </label>

            <input
              type="text"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              placeholder="2 Adults, 1 Child"
              className="w-full rounded-2xl border border-border bg-surface-soft px-5 py-3.5 outline-none transition focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
            />
          </div>
        </div>

        {/* Package */}
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            <Package size={14} />
            Selected Package
          </label>

          <input
            type="text"
            name="package"
            value={formData.package}
            readOnly={!!prefilledPackage}
            onChange={handleChange}
            placeholder="Select a package"
            className={`w-full rounded-2xl px-5 py-3.5 outline-none transition ${
              prefilledPackage
                ? "cursor-not-allowed border border-light-sea-green bg-light-sea-green/10 font-medium text-dark-cerulean"
                : "border border-border bg-surface-soft focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
            }`}
          />
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Additional Requirements
          </label>

          <textarea
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your preferred hotels, pickup location, sightseeing preferences, special occasions, etc."
            className="w-full resize-none rounded-2xl border border-border bg-surface-soft px-5 py-4 outline-none transition focus:border-light-sea-green focus:ring-2 focus:ring-light-sea-green/20"
          />
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-4 pt-2">
          <button
            type="submit"
            className="h-14 rounded-full bg-dark-cerulean text-base font-semibold text-white transition hover:bg-sea"
          >
            Send Enquiry
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex h-14 items-center justify-center gap-3 rounded-full border border-[#25D366] bg-[#25D366]/10 font-semibold text-[#1DA851] transition hover:bg-[#25D366]/20"
          >
            <MessageCircle size={20} />
            Continue on WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}