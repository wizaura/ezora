import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  size?: number;
  className?: string;
};

export default function WhatsAppButton({
  label = "",
  message,
  className = "text-white/70",
  size=16,
}: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ezora on WhatsApp"
      className={`group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white ${className}`}
    >
      <FaWhatsapp
        size={size}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      {label}
    </a>
  );
}