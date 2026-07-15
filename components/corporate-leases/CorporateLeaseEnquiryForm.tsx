"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function CorporateLeaseEnquiryForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    term: "Monthly",
    fleetClass: "Force Urbania",
    vehiclesCount: "1",
    startDate: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const text = `Hi Ezora Tours! I am interested in a ${formData.term} corporate lease for ${formData.fleetClass}.
    
*Company:* ${formData.companyName || "Not provided"}
*Contact Person:* ${formData.contactPerson || "Not provided"}
*Phone:* ${formData.phone || "Not provided"}
*Email:* ${formData.email || "Not provided"}
*Number of Vehicles:* ${formData.vehiclesCount || "Not provided"}
*Expected Start Date:* ${formData.startDate || "Not provided"}

*Requirements:*
${formData.message || "Please provide pricing and details."}`;

    const waNumber = "+919876543210"; 
    const waUrl = `https://wa.me/${waNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="companyName" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="Acme Corp"
          />
        </div>
        <div>
          <label htmlFor="contactPerson" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Contact Person
          </label>
          <input
            type="text"
            id="contactPerson"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="Jane Doe"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Business Phone
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
            Work Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            placeholder="jane@acmecorp.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="term" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Lease Term
          </label>
          <select
            id="term"
            name="term"
            value={formData.term}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          >
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Yearly">Yearly</option>
          </select>
        </div>
        <div>
          <label htmlFor="fleetClass" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Fleet Class
          </label>
          <select
            id="fleetClass"
            name="fleetClass"
            value={formData.fleetClass}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          >
            <option value="Force Urbania">Force Urbania</option>
            <option value="Force Traveller">Force Traveller</option>
            <option value="Executive Sedans">Executive Sedans</option>
          </select>
        </div>
        <div>
          <label htmlFor="vehiclesCount" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
            Number of Vehicles
          </label>
          <input
            type="number"
            id="vehiclesCount"
            name="vehiclesCount"
            min="1"
            value={formData.vehiclesCount}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="startDate" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
          Expected Start Date
        </label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-greenish-blue">
          Specific Requirements
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full resize-none rounded-xl border border-border bg-surface-soft px-4 py-3 text-sm text-dark-cerulean placeholder:text-muted/50 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
          placeholder="Briefly describe your company's usage needs..."
        />
      </div>

      <div className="mt-2 flex flex-col sm:flex-row gap-4">
        <button
          type="submit"
          className="flex flex-1 h-12 items-center justify-center rounded-full bg-dark-cerulean px-6 text-sm font-semibold text-white transition-colors hover:bg-sea"
        >
          Submit Corporate Enquiry
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex flex-1 h-12 items-center justify-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-6 text-sm font-semibold text-[#1DA851] transition-colors hover:bg-[#25D366]/20"
        >
          <MessageCircle size={18} />
          Continue on WhatsApp
        </button>
      </div>
    </form>
  );
}
