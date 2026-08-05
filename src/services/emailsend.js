import emailjs from "@emailjs/browser";

const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export const EmailSendJS = async (SendEmail) => {
  const TemplateJS = {
    name: EmailSenderJS.name,
    email: EmailSenderJS.email,
    subject: EmailSenderJS.subject,
    message: EmailSenderJS.message,
  };
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, EmailSendJS, PUBLIC_KEY);
};
