export const SITE_NAME = "House of Biryanis & Kebabs";
export const PRIMARY_COLOR = "#FFD700"; // Gold
export const SECONDARY_COLOR = "#000000"; // Black
export const ACCENT_COLOR = "#FFFFFF"; // White

// Online ordering is served by Clover. Piscataway link is pending, so the buttons do not route anywhere yet.
export const ORDER_URL = "#";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/hbkpiscataway",
  instagram: "https://www.instagram.com/hbkpiscataway",
  googleReview: "https://www.google.com/maps?cid=10900376006634807616"
};

// Shown under the logo in the header.
export const CITY_LABEL = "Piscataway, NJ";

export const CONTACT_INFO = {
  phone: "(732) 474-0463",
  email: "hbk08854@gmail.com",
  address: "1372 Centennial Ave, Piscataway, NJ 08854",
  hours: "Mon–Thu 11:30 AM–2:30 PM, 5:30–10 PM · Fri–Sat 11:30 AM–12 AM · Sun 11:30 AM–10 PM"
};

// Contact form -> Maghil SMTP email API (POST /api/send-email-smtp).
// The backend maps locationId + purpose to this location's recipients and email template.
export const SMTP_API_BASE_URL = import.meta.env.VITE_SMTP_API_BASE_URL || "https://marketing.maghil.com";
export const SMTP_LOCATION_ID = "1354573615";
export const SMTP_CONTACT_PURPOSE = "HBK-PISCATAWAY-CONTACT";
// reCAPTCHA v2 site key paired with the SMTP API's secret key; the checkbox is hidden while empty.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

export const TEMPORARILY_CLOSED = false;

// Weekly hours supplied by the restaurant.
const WEEKDAY = ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'];
const LATE = ['11:30 AM – 12:00 AM'];
export const BUSINESS_HOURS = {
  Store: [
    { day: 'Monday', slots: WEEKDAY },
    { day: 'Tuesday', slots: WEEKDAY },
    { day: 'Wednesday', slots: WEEKDAY },
    { day: 'Thursday', slots: WEEKDAY },
    { day: 'Friday', slots: LATE },
    { day: 'Saturday', slots: LATE },
    { day: 'Sunday', slots: ['11:30 AM – 10:00 PM'] },
  ],
};

// Shown under the business hours.
export const KITCHEN_NOTES = [
  'Kitchen closes 15 minutes before closing time, Monday – Saturday.',
  'On Sundays, the kitchen closes 45 minutes before closing time (night only).',
];
