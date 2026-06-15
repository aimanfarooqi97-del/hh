// Global contact configuration for A.Farooqi's
export const WHATSAPP_NUMBER = "923375213691"; // +92 337 5213691
export const WHATSAPP_MESSAGE = "Hey, thank you for choosing us. How can I help you?";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const WHATSAPP_DISPLAY = "+92 337 5213691";

export const CONTACT_EMAIL = "aimifarooqi97@gmail.com";
export const EMAIL_SUBJECT = "Customer Inquiry - A.Farooqi's Store";
export const EMAIL_BODY = "Hello, I need help regarding your products. Thank you.";
export const MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}&body=${encodeURIComponent(EMAIL_BODY)}`;
