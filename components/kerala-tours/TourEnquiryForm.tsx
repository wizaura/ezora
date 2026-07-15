"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

type TourEnquiryFormProps = {
  prefilledPackage?: string;
};

export default function TourEnquiryForm({ prefilledPackage }: TourEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dates: "",
    travelers: "",
    package: prefilledPackage || "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `Hi Ezora Tours! I am interested in booking a Kerala Tour Package.
    
*Name:* ${formData.name || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Travel Dates:* ${formData.dates || "Not provided"}
*Number of Travelers:* ${formData.travelers || "Not provided"}
*Package Interested In:* ${formData.package || "Not provided"}

*Message:*
${formData.message || "I would like to know more details."}`;

    // Assuming a placeholder number for WhatsApp
    const waNumber = "+919876543210"; 
    const waUrl = `https://wa.me/${waNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Usually submit to backend here, but we will redirect to WhatsApp
    handleWhatsApp();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          placeholder="John Doe"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="dates" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Travel Dates
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            value={formData.dates}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="e.g. 15 Oct - 20 Oct"
          />
        </div>
        <div>
          <label htmlFor="travelers" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Number of Travelers
          </label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="2 Adults, 1 Child"
          />
        </div>
      </div>

      <div>
        <label htmlFor="package" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
          Package Interested In
        </label>
        <input
          type="text"
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          placeholder="E.g. Romantic Honeymoon"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
          Additional Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full resize-none rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          placeholder="Any specific requirements or questions?"
        />
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <button
          type="submit"
          className="flex h-12 w-full items-center justify-center rounded-full bg-dark-cerulean px-6 text-sm font-semibold text-white transition-colors hover:bg-sea"
        >
          Submit Enquiry
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 text-sm font-semibold text-[#1DA851] transition-colors hover:bg-[#25D366]/20"
        >
          <MessageCircle size={18} />
          Continue on WhatsApp
        </button>
      </div>
    </form>
  );
}
