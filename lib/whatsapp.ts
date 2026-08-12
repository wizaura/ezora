const WHATSAPP_NUMBER = "919037227941";

export function getWhatsAppUrl(message?: string) {
  const defaultMessage =
    "Hi Ezora, I would like to know more about your chauffeur-driven travel services in Kerala.";

  const text = encodeURIComponent(message || defaultMessage);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}