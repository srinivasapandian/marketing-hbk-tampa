export const SITE_NAME = "House of Biryanis & Kebabs";
export const PRIMARY_COLOR = "#FFD700"; // Gold
export const SECONDARY_COLOR = "#000000"; // Black
export const ACCENT_COLOR = "#FFFFFF"; // White

// Online ordering is served by Clover. Swap in the location's own Clover ordering link once it is confirmed.
export const ORDER_URL = "https://www.clover.com/";

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
  hours: "Temporarily closed"
};

// Contact form -> Maghil SMTP email API (POST /api/send-email-smtp).
// The backend maps locationId + purpose to this location's recipients and email template.
export const SMTP_API_BASE_URL = import.meta.env.VITE_SMTP_API_BASE_URL || "https://marketing.maghil.com";
export const SMTP_LOCATION_ID = "1354573615";
export const SMTP_CONTACT_PURPOSE = "HBK-PISCATAWAY-CONTACT";
// reCAPTCHA v2 site key paired with the SMTP API's secret key; the checkbox is hidden while empty.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

// Google Business Profile lists this location as temporarily closed; set to false once it reopens
// and restore the weekly hours below from the listing.
export const TEMPORARILY_CLOSED = true;

export const BUSINESS_HOURS = {
  Store: [
    { day: 'Monday', closed: true },
    { day: 'Tuesday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Wednesday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Thursday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Friday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 11:00 PM'] },
    { day: 'Saturday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 11:00 PM'] },
    { day: 'Sunday', slots: ['11:30 AM – 03:00 PM', '05:30 PM – 10:30 PM'] },
  ],
  Online: [
    { day: 'Monday', closed: true },
    { day: 'Tuesday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Wednesday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Thursday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
    { day: 'Friday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Saturday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:30 PM'] },
    { day: 'Sunday', slots: ['11:30 AM – 02:30 PM', '05:30 PM – 10:00 PM'] },
  ],
};

// Shown under the business hours.
export const KITCHEN_NOTES = [
  'Kitchen closes 15 minutes before closing time, Monday – Saturday.',
  'On Sundays, the kitchen closes 45 minutes before closing time (night only).',
];
