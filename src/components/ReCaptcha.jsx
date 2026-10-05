import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const ONLOAD_CALLBACK = '__hbkRecaptchaOnLoad';
let scriptPromise;

// Loads Google's reCAPTCHA script once, on first use.
const loadRecaptcha = () => {
  if (window.grecaptcha?.render) return Promise.resolve(window.grecaptcha);
  scriptPromise ??= new Promise((resolve, reject) => {
    window[ONLOAD_CALLBACK] = () => resolve(window.grecaptcha);
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?onload=${ONLOAD_CALLBACK}&render=explicit`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error('Failed to load reCAPTCHA'));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
};

// reCAPTCHA v2 checkbox. Calls onChange with the token, or null when it expires or fails.
const ReCaptcha = forwardRef(function ReCaptcha({ siteKey, onChange, theme = 'dark' }, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetIdRef.current !== null) window.grecaptcha.reset(widgetIdRef.current);
    },
  }));

  useEffect(() => {
    let cancelled = false;
    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || widgetIdRef.current !== null || !containerRef.current) return;
        widgetIdRef.current = grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => onChangeRef.current?.(token),
          'expired-callback': () => onChangeRef.current?.(null),
          'error-callback': () => onChangeRef.current?.(null),
        });
      })
      .catch(() => onChangeRef.current?.(null));
    return () => {
      cancelled = true;
    };
  }, [siteKey, theme]);

  return <div ref={containerRef} />;
});

export default ReCaptcha;
