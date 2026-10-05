export const SITE_NAME = "House of Biryanis & Kebabs";
export const PRIMARY_COLOR = "#FFD700"; // Gold
export const SECONDARY_COLOR = "#000000"; // Black
export const ACCENT_COLOR = "#FFFFFF"; // White

// Dummy details - replace once the Piscataway location is confirmed
export const ORDER_URL = "https://example.com/order-online";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/hbkpiscataway",
  instagram: "https://www.instagram.com/hbkpiscataway",
  googleReview: "https://g.page/r/Cdy7N_FsJojoEAE/review"
};

export const CONTACT_INFO = {
  phone: "(732) 474-0463",
  email: "hbk08854@gmail.com",
  address: "1372 Centennial Ave, Piscataway, NJ 08854",
  hours: "Mon-Sun: 11:30 AM - 10:30 PM"
};

// Contact form -> Maghil SMTP email API (POST /api/send-email-smtp).
// The backend maps locationId + purpose to this location's recipients and email template.
export const SMTP_API_BASE_URL = import.meta.env.VITE_SMTP_API_BASE_URL || "https://marketing.maghil.com";
export const SMTP_LOCATION_ID = "1354573615";
export const SMTP_CONTACT_PURPOSE = "HBK-PISCATAWAY-CONTACT";
// reCAPTCHA v2 site key paired with the SMTP API's secret key; the checkbox is hidden while empty.
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || "";

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
