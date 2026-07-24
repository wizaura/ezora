"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Headset,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function CorporateLeaseEnquirySection() {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const text = `Hi Ezora Tours!

I'm interested in a corporate leasing proposal.

Company: ${formData.companyName}

Contact Person: ${formData.contactPerson}

Phone: ${formData.phone}

Email: ${formData.email}

Lease Term: ${formData.term}

Vehicle: ${formData.fleetClass}

Vehicles Required: ${formData.vehiclesCount}

Expected Start Date: ${formData.startDate}

Requirements:
${formData.message}`;

    const url = `https://wa.me/919876543210?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    handleWhatsApp();
  };

  return (
    <section id="corporate-lease" className="relative bg-surface-soft py-16">

      <div className="relative mx-auto max-w-[1440px] px-5 lg:px-8">

        {/* Header */}

        <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-sea" />

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
                02 · Corporate Enquiry
              </p>

            </div>

            <h2 className="max-w-[820px] text-[clamp(3rem,5vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-dark-cerulean">
              Let's Build
              <br />
              Your Corporate
              <br />
              Fleet Together.
            </h2>

          </div>

          <div className="lg:col-span-4">

            <p className="max-w-md text-base leading-7 text-muted lg:ml-auto">
              Whether you're transporting employees,
              executives, airport guests or corporate
              teams, we'll prepare a customised leasing
              proposal designed around your business.
            </p>

          </div>

        </div>

        {/* Content */}

        <div className="mt-8 grid gap-10 lg:grid-cols-[380px_minmax(0,1fr)]">

          {/* Left */}

          <aside>

            <div className="sticky top-28 space-y-5">


              {/* Intro Card */}

              <div className="rounded-3xl border border-border bg-dark-cerulean p-8 shadow-xl">

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">

                  <BriefcaseBusiness
                    className="text-light-sea-green"
                    size={34}
                  />

                </div>

                <h3 className="text-3xl font-semibold leading-tight text-white">
                  Why Businesses
                  <br />
                  Choose Ezora
                </h3>

                <p className="mt-5 leading-7 text-white/75">
                  Reliable corporate transportation with dedicated account
                  management, premium vehicles and flexible leasing solutions
                  tailored to your business.
                </p>

              </div>

              {[
                {
                  icon: ShieldCheck,
                  title: "Dedicated Account Manager",
                  text: "A single point of contact for bookings, billing and fleet coordination.",
                },
                {
                  icon: Users,
                  title: "Professional Chauffeurs",
                  text: "Experienced, courteous drivers trained for executive and corporate travel.",
                },
                {
                  icon: BadgeCheck,
                  title: "Fully Managed Fleet",
                  text: "Maintenance, servicing and replacement vehicles are included.",
                },
                {
                  icon: Headset,
                  title: "Priority Business Support",
                  text: "Fast response times and personalised assistance whenever you need us.",
                },
              ].map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sea hover:shadow-xl"
                  >

                    <div className="flex gap-5">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sea/10 transition-colors group-hover:bg-sea">

                        <Icon
                          size={24}
                          className="text-sea transition-colors group-hover:text-white"
                        />

                      </div>

                      <div>

                        <h4 className="text-lg font-semibold text-dark-cerulean">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-muted">
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                );

              })}

            </div>

          </aside>

          {/* Form */}

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.25)]">

            <div className="border-b border-border bg-surface-soft px-8 py-7">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-cerulean text-white">

                  <Building2 size={28} />

                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Corporate Proposal
                  </p>

                  <h3 className="mt-1 text-3xl font-semibold text-dark-cerulean">
                    Request A Custom Quote
                  </h3>

                </div>

              </div>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-7 p-8 lg:p-10"
            >

              {/* Company Details */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Company Name
                  </label>

                  <div className="relative">

                    <Building2
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      placeholder="ABC Technologies Pvt Ltd"
                      className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-12 pr-4 text-dark-cerulean outline-none transition-all focus:border-sea focus:bg-white"
                    />

                  </div>
                </div>

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Contact Person
                  </label>

                  <div className="relative">

                    <Users
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                      placeholder="John Mathew"
                      className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-12 pr-4 text-dark-cerulean outline-none transition-all focus:border-sea focus:bg-white"
                    />

                  </div>

                </div>

              </div>

              {/* Contact */}

              <div className="grid gap-6 md:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Business Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-dark-cerulean outline-none transition-all focus:border-sea focus:bg-white"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 text-dark-cerulean outline-none transition-all focus:border-sea focus:bg-white"
                  />

                </div>

              </div>

              {/* Fleet */}

              <div className="grid gap-6 lg:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Lease Term
                  </label>

                  <select
                    name="term"
                    value={formData.term}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 outline-none transition-all focus:border-sea focus:bg-white"
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Yearly</option>
                  </select>

                </div>

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Vehicle Type
                  </label>

                  <select
                    name="fleetClass"
                    value={formData.fleetClass}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 outline-none transition-all focus:border-sea focus:bg-white"
                  >
                    <option>Force Urbania</option>
                    <option>Force Traveller</option>
                    <option>Toyota Innova Hycross</option>
                    <option>Executive Sedan</option>
                    <option>Luxury SUV</option>
                  </select>

                </div>

              </div>

              {/* Numbers */}

              <div className="grid gap-6 lg:grid-cols-2">

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Number Of Vehicles
                  </label>

                  <input
                    type="number"
                    min={1}
                    name="vehiclesCount"
                    value={formData.vehiclesCount}
                    onChange={handleChange}
                    className="h-14 w-full rounded-2xl border border-border bg-surface-soft px-5 outline-none transition-all focus:border-sea focus:bg-white"
                  />

                </div>

                <div>

                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                    Preferred Start Date
                  </label>

                  <div className="relative">

                    <CalendarDays
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                    />

                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-12 pr-4 outline-none transition-all focus:border-sea focus:bg-white"
                    />

                  </div>

                </div>

              </div>

              {/* Message */}

              <div>

                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-greenish-blue">
                  Business Requirements
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your transportation requirements, estimated monthly usage, employee transportation, airport transfers, executive travel, or any special fleet requirements..."
                  className="w-full rounded-2xl border border-border bg-surface-soft p-5 leading-7 outline-none transition-all focus:border-sea focus:bg-white"
                />

              </div>

              {/* Trust */}

              <div className="rounded-2xl border border-sea/15 bg-sea/5 p-6">

                <div className="flex items-start gap-4">

                  <CheckCircle2
                    className="mt-1 text-sea"
                    size={22}
                  />

                  <div>

                    <h4 className="font-semibold text-dark-cerulean">
                      What happens after you submit?
                    </h4>

                    <p className="mt-2 leading-7 text-muted">
                      Our corporate mobility specialist
                      will review your requirements,
                      prepare a customised proposal,
                      discuss fleet options and share the
                      best pricing for your organisation.
                    </p>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="grid gap-5 lg:grid-cols-2">

                <button
                  type="submit"
                  className="group flex h-16 items-center justify-center gap-3 rounded-full bg-dark-cerulean px-8 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-greenish-blue hover:shadow-xl"
                >

                  Request Corporate Proposal

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="group flex h-16 items-center justify-center gap-3 rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-8 text-base font-semibold text-[#1DA851] transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]/20"
                >

                  <MessageCircle size={22} />

                  Continue on WhatsApp

                </button>

              </div>

              {/* Footer */}

              <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface-soft p-6 text-sm text-muted lg:flex-row lg:items-center lg:justify-between">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={20}
                    className="text-sea"
                  />

                  <span>
                    Your information is kept confidential and
                    used only to prepare your quotation.
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Headset
                    size={20}
                    className="text-sea"
                  />

                  <span>
                    Dedicated corporate support available
                    Monday – Saturday.
                  </span>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}