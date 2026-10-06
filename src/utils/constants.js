export const SITE_NAME = "House of Biryanis & Kebabs";
export const PRIMARY_COLOR = "#FFD700"; // Gold
export const SECONDARY_COLOR = "#000000"; // Black
export const ACCENT_COLOR = "#FFFFFF"; // White

// Dummy details - replace once the Malvern location is confirmed
export const ORDER_URL = "https://example.com/order-online";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/hbkmalvern",
  instagram: "https://www.instagram.com/hbkmalvern",
  googleReview: "https://g.page/r/CccgvjUT7zYTEAE/review"
};

// Shown under the logo in the header.
export const CITY_LABEL = "Malvern, PA";

export const CONTACT_INFO = {
  phone: "(484) 568-4879",
  email: "hbk19355@gmail.com",
  address: "309 Lancaster Ave Suite C1, Malvern, PA 19355",
  hours: "Mon-Sun: 11:30 AM - 10:30 PM"
};

// Contact form -> Maghil SMTP email API (POST /api/send-email-smtp).
// The backend maps locationId + purpose to this location's recipients and email template.
export const SMTP_API_BASE_URL = import.meta.env.VITE_SMTP_API_BASE_URL || "https://marketing.maghil.com";
export const SMTP_LOCATION_ID = "1441912493";
export const SMTP_CONTACT_PURPOSE = "HBK-MALVERN-CONTACT";
// reCAPTCHA v2 site key paired with the SMTP API's secret key; the checkbox is hidden while empty.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

// Mirrors the Google Business Profile hours for this location.
export const BUSINESS_HOURS = {
  Store: [
    { day: 'Monday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Tuesday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Wednesday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Thursday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Friday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Saturday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Sunday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 09:30 PM'] },
  ],
};
