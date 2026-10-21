import { useEffect, useState } from 'react';
import { Star, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SITE_NAME, SOCIAL_LINKS } from '../utils/constants';

const STORAGE_KEY = 'reviewPopupDismissedAt';
const SHOW_DELAY_MS = 6000;
const SNOOZE_MS = 7 * 24 * 60 * 60 * 1000;

const serif = { fontFamily: 'Constantia, serif' };

const wasRecentlyDismissed = () => {
  try {
    const at = Number(localStorage.getItem(STORAGE_KEY));
    return at > 0 && Date.now() - at < SNOOZE_MS;
  } catch {
    return false;
  }
};

const rememberDismissal = () => {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // storage unavailable (private mode); the popup just shows again next visit
  }
};

const ReviewPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (wasRecentlyDismissed()) return undefined;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    rememberDismissal();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="review-popup-title"
            className="relative w-full max-w-md rounded-[28px] border border-[#D8AA3E]/40 bg-[#1a130e] p-8 text-center text-white shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-white/60 transition hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="mx-auto mb-5 flex justify-center gap-1 text-[#D8AA3E]">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={26} fill="currentColor" />
              ))}
            </div>
            <h2 id="review-popup-title" className="text-3xl font-bold" style={serif}>
              Enjoyed your meal?
            </h2>
            <p className="mt-3 leading-7 text-white/75">
              Your review helps {SITE_NAME} grow. It takes less than a minute to share your experience on Google.
            </p>
            <a
              href={SOCIAL_LINKS.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#D8AA3E] px-8 py-3.5 font-semibold text-black transition hover:brightness-110"
            >
              <Star size={18} /> Write a Google Review
            </a>
            <button type="button" onClick={close} className="mt-4 block w-full text-sm text-white/50 transition hover:text-white/80">
              Maybe later
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewPopup;
