import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-rose font-body text-sm tracking-[0.2em] uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Contact Us for <span className="italic text-gradient">Custom Orders</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether it's a wedding cake, birthday celebration, or corporate event, we're here to make your sweetest dreams come true.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <div className={`bg-card rounded-3xl p-8 md:p-10 shadow-elevated ${isVisible ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
            <h3 className="font-display text-2xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border
                             focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
                             transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="0412 345 678"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border
                             focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
                             transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border
                           focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
                           transition-all duration-300 placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Event Type</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border
                           focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
                           transition-all duration-300 text-foreground"
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="baby-shower">Baby Shower</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell us about your dream cake</label>
                <textarea
                  rows={4}
                  placeholder="Describe your ideal cake, including any specific flavors, designs, or dietary requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border
                           focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none
                           transition-all duration-300 placeholder:text-muted-foreground resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base
                         transition-all duration-300 ease-out hover:shadow-elevated hover:scale-[1.02] hover:bg-rose-dark active:scale-100"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Location card */}
            <div className={`bg-card rounded-3xl p-8 shadow-card card-hover ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
              <h3 className="font-display text-2xl font-semibold mb-6">Visit Our Bakery</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-rose group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Shop 12, Beaufort Street</div>
                    <div className="text-muted-foreground">Mount Lawley, Perth WA 6050</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Phone className="w-5 h-5 text-rose group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">(08) 9328 4567</div>
                    <div className="text-muted-foreground">Call for enquiries</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Mail className="w-5 h-5 text-rose group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">hello@sweetlayers.com.au</div>
                    <div className="text-muted-foreground">We reply within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className={`bg-card rounded-3xl p-8 shadow-card card-hover ${isVisible ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-rose" />
                <h3 className="font-display text-2xl font-semibold">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Monday - Friday</span>
                  <span className="text-muted-foreground">7:00am - 5:30pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Saturday</span>
                  <span className="text-muted-foreground">8:00am - 4:00pm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Sunday</span>
                  <span className="text-muted-foreground">9:00am - 2:00pm</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className={`flex items-center gap-4 ${isVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
              <span className="text-muted-foreground">Follow us:</span>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-card
                         transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-elevated"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-card flex items-center justify-center shadow-card
                         transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:shadow-elevated"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
