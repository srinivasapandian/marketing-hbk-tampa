export const SITE_NAME = "House of Biryanis & Kebabs";
export const PRIMARY_COLOR = "#FFD700"; // Gold
export const SECONDARY_COLOR = "#000000"; // Black
export const ACCENT_COLOR = "#FFFFFF"; // White

// Online ordering is served by Clover.
export const ORDER_URL = "https://house-of-biryanis-kebabs-north-wales.cloveronline.com/menu/all";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/hbknorthwales/",
  instagram: "https://www.instagram.com/hbk_northwales/",
  googleReview: "https://g.page/r/CZpYQXm8TnxrEBM/review"
};

// Shown under the logo in the header.
export const CITY_LABEL = "North Wales, PA";

export const CONTACT_INFO = {
  phone: "(215) 647-3133",
  email: "hbknorthwales@gmail.com",
  address: "111 Garden Golf Blvd, Suite C, North Wales, PA 19454",
  hours: "Mon-Sun: 11:30 AM - 10:30 PM"
};

// Contact form -> Maghil SMTP email API (POST /api/send-email-smtp).
// The backend maps locationId + purpose to this location's recipients and email template.
export const SMTP_API_BASE_URL = import.meta.env.VITE_SMTP_API_BASE_URL || "https://marketing.maghil.com";
export const SMTP_LOCATION_ID = "1888850982";
export const SMTP_CONTACT_PURPOSE = "HBK-NORTHWALES-CONTACT";
// reCAPTCHA v2 site key paired with the SMTP API's secret key; the checkbox is hidden while empty.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

// Mirrors the Google Business Profile hours for this location.
export const BUSINESS_HOURS = {
  Store: [
    { day: 'Monday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Tuesday', closed: true },
    { day: 'Wednesday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Thursday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Friday', slots: ['11:30 AM – 03:00 PM', '05:00 PM – 10:30 PM'] },
    { day: 'Saturday', slots: ['11:30 AM – 03:00 PM', '05:00 PM – 10:30 PM'] },
    { day: 'Sunday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
  ],
};

// Shown under the business hours.
export const KITCHEN_NOTES = [
  'Kitchen closes 15 minutes before closing time, Monday – Saturday.',
  'On Sundays, the kitchen closes 45 minutes before closing time (night only).',
];
