"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import {
  ArrowRight,
  CalendarDays,
  Loader2,
  Mail,
  MessageCircle,
  Minus,
  Package,
  Phone,
  Plus,
  User,
  Users,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type TourEnquiryFormProps = {
  packageTitle?: string;
  packageSlug?: string;
};

export default function TourEnquiryForm({
  packageTitle,
  packageSlug,
}: TourEnquiryFormProps) {
  const [loading, setLoading] = useState(false);

  const [dateRange, setDateRange] =
    useState<DateRange | undefined>();

  const [travellers, setTravellers] = useState({
    adults: 2,
    children: 0,
    infants: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    package: packageSlug || packageSlug || "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const updateTraveller = (
    type: "adults" | "children" | "infants",
    change: number
  ) => {
    setTravellers((prev) => ({
      ...prev,
      [type]: Math.max(
        type === "adults" ? 1 : 0,
        prev[type] + change
      ),
    }));
  };

  const travellerText = useMemo(() => {
    const items: string[] = [];

    if (travellers.adults)
      items.push(
        `${travellers.adults} Adult${travellers.adults > 1 ? "s" : ""
        }`
      );

    if (travellers.children)
      items.push(
        `${travellers.children} Child${travellers.children > 1 ? "ren" : ""
        }`
      );

    if (travellers.infants)
      items.push(
        `${travellers.infants} Infant${travellers.infants > 1 ? "s" : ""
        }`
      );

    return items.join(", ");
  }, [travellers]);

  const travelDateText = useMemo(() => {
    if (!dateRange?.from) return "Flexible";

    if (!dateRange.to) {
      return format(dateRange.from, "dd MMM yyyy");
    }

    return `${format(
      dateRange.from,
      "dd MMM yyyy"
    )} → ${format(
      dateRange.to,
      "dd MMM yyyy"
    )}`;
  }, [dateRange]);

  const handleWhatsApp = () => {
    const text = `Hello Ezora Tours,

I would like to enquire about the following Kerala tour package.

━━━━━━━━━━━━━━━━━━

Package:
${formData.package}

Name:
${formData.name}

Phone:
${formData.phone}

Email:
${formData.email}

Travel Dates:
${travelDateText}

Travellers:
${travellerText}

Additional Requirements:
${formData.message || "None"}

━━━━━━━━━━━━━━━━━━

Please share the itinerary, pricing and availability.

Thank you!`;

    window.open(
      `https://wa.me/919747827371?text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );

    setTimeout(() => {
      resetForm();
    }, 1000);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919747827371", "_blank");
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      // TODO:
      // Call backend API

      handleWhatsApp();
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      package: packageTitle ?? "",
      message: "",
    });

    setDateRange(undefined);

    setTravellers({
      adults: 2,
      children: 0,
      infants: 0,
    });
  };

  return (
    <div id="form" className="mx-auto max-w-[1440px] overflow-hidden rounded-[32px] border border-border bg-white shadow-[0_30px_80px_rgba(7,48,66,0.08)]">

      {/* Header */}

      <div className="border-b border-border bg-dark-cerulean px-8 py-8">

        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-light-sea-green">
          Kerala Tour Enquiry
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-white">
          Plan Your Dream Holiday
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
          Tell us about your travel plans and our experts will
          prepare a personalised Kerala itinerary with the best
          pricing, accommodation options and availability.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-7 p-8"
      >

        {/* Full Name */}

        {/* Full Name */}

        <div className="space-y-2">
          <label className="text-sm font-semibold text-dark-cerulean">
            Full Name
          </label>

          <div className="relative">
            <User
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
            />

            <input
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:ring-4 focus:ring-sea/10"
            />
          </div>
        </div>

        {/* Phone & Email */}

        <div className="grid gap-5 md:grid-cols-2">

          <div className="space-y-2">

            <label className="text-sm font-semibold text-dark-cerulean">
              Phone Number
            </label>

            <div className="relative">

              <Phone
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
              />

              <input
                type="tel"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:ring-4 focus:ring-sea/10"
              />

            </div>

          </div>

          <div className="space-y-2">

            <label className="text-sm font-semibold text-dark-cerulean">
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-sea"
              />

              <input
                type="email"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="h-14 w-full rounded-2xl border border-border bg-surface-soft pl-14 pr-5 outline-none transition-all focus:border-sea focus:ring-4 focus:ring-sea/10"
              />

            </div>

          </div>

        </div>

        {/* Travel Dates */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-dark-cerulean">
            Travel Dates
          </label>

          <Popover>

            <PopoverTrigger className="w-full">
              <div className="flex h-14 w-full cursor-pointer items-center rounded-2xl border border-border bg-surface-soft px-5 hover:border-sea">

                <CalendarDays
                  size={20}
                  className="mr-4 text-sea"
                />

                <span>{travelDateText}</span>

              </div>
            </PopoverTrigger>

            <PopoverContent
              className="w-auto bg-white p-0"
              align="start"
            >

              <Calendar
                mode="range"
                numberOfMonths={2}
                selected={dateRange}
                onSelect={setDateRange}
              />

            </PopoverContent>

          </Popover>

        </div>

        {/* Travellers */}

        <div className="space-y-5">

          <label className="text-sm font-semibold text-dark-cerulean">
            Travellers
          </label>

          <div className="flex flex-col w-full md:flex-row gap-4">
            {[
              ["Adults", "adults"],
              ["Children", "children"],
            ].map(([label, key]) => (

              <div
                key={key}
                className="flex-1 flex items-center justify-between rounded-2xl border border-border p-5"
              >

                <div>

                  <h4 className="font-semibold">

                    {label}

                  </h4>

                </div>

                <div className="flex items-center gap-4">

                  <button
                    type="button"
                    onClick={() =>
                      updateTraveller(
                        key as any,
                        -1
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border"
                  >

                    <Minus size={16} />

                  </button>

                  <span className="w-8 text-center font-semibold">

                    {
                      travellers[
                      key as keyof typeof travellers
                      ]
                    }

                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      updateTraveller(
                        key as any,
                        1
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full border bg-dark-cerulean text-white"
                  >

                    <Plus size={16} />

                  </button>

                </div>

              </div>

            ))}
          </div>

        </div>

        {/* Package */}

        <div className="rounded-3xl border border-light-sea-green bg-light-sea-green/10 p-6">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-sea-green text-white">

              <Package size={22} />

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-sea">

                Selected Package

              </p>

              <h3 className="mt-2 text-xl font-semibold text-dark-cerulean">

                {packageTitle}

              </h3>

              <p className="mt-2 text-sm text-muted-foreground">

                This enquiry will automatically be submitted for this
                package.

              </p>

            </div>

          </div>

        </div>

        {/* Message */}

        <div className="space-y-2">

          <label className="text-sm font-semibold text-dark-cerulean">
            Additional Requirements
          </label>

          <div className="relative">

            <MessageCircle
              size={20}
              className="absolute left-5 top-5 text-sea"
            />

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Preferred hotels, sightseeing, honeymoon, pickup location..."
              className="w-full resize-none rounded-2xl border border-border bg-surface-soft pl-14 pr-5 pt-5 pb-5 outline-none transition focus:border-sea focus:ring-4 focus:ring-sea/10"
            />

          </div>

        </div>

        {/* Summary */}

        <div className="rounded-3xl bg-dark-cerulean p-7 text-white">

          <div className="border-b border-white/10 pb-4">

            <h3 className="text-xl font-semibold">

              Tour Summary

            </h3>

          </div>

          <div className="mt-6 space-y-4 text-sm">

            <div className="flex justify-between">

              <span>Package</span>

              <strong>{packageTitle}</strong>

            </div>

            <div className="flex justify-between">

              <span>Travel Dates</span>

              <strong>{travelDateText}</strong>

            </div>

            <div className="flex justify-between">

              <span>Travellers</span>

              <strong>{travellerText}</strong>

            </div>

            <div className="flex justify-between">

              <span>Phone</span>

              <strong>
                {formData.phone || "-"}
              </strong>

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-4 pt-2 md:flex-row">

          <Button
            type="submit"
            disabled={loading}
            className="group h-14 rounded-full bg-dark-cerulean px-8"
          >

            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry

                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </>
            )}

          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={openWhatsApp}
            className="h-14 rounded-full px-6 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
          >

            <FaWhatsapp className="mr-2 h-5 w-5" />

            Continue on WhatsApp

          </Button>

        </div>

      </form>

    </div>
  );
}