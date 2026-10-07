import ContactSection from '../components/ContactSection';
import heroImg from '../asserts/banner-3.png';

const Contact = () => (
  <div className="bg-[#1a130e] text-white">
    <section className="relative h-[300px] md:h-[436px] overflow-hidden flex items-center justify-center">
      <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-[72px] font-bold text-[#D8AA3E] mb-5" style={{ fontFamily: 'Constantia, serif' }}>
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Have a question or feedback? Reach out — we'd love to hear from you and help in any way we can.
        </p>
      </div>
    </section>
    <ContactSection hideHeading />
  </div>
);

export default Contact;
