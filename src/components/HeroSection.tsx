import { useState, useEffect } from 'react';
import heroCake from '@/assets/hero-cake.jpg';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-soft-pink opacity-40 animate-float" />
      <div className="absolute top-40 right-20 w-14 h-14 rounded-full bg-blush opacity-50 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-full bg-accent opacity-30 animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 pt-32 pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isLoaded ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <span className={`inline-block text-muted-foreground font-body text-sm tracking-[0.2em] uppercase ${isLoaded ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
                Artisan Bakery · Perth, WA
              </span>
              <h1 className={`font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] tracking-tight ${isLoaded ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
                Sweet
                <br />
                <span className="text-gradient italic">Layers</span>
              </h1>
              <p className={`text-lg md:text-xl text-muted-foreground max-w-md font-light leading-relaxed ${isLoaded ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
                Handcrafted cakes & pastries made with love, bringing sweetness to every celebration in Western Australia.
              </p>
            </div>
            
            <div className={`flex flex-wrap gap-4 ${isLoaded ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium text-base
                         transition-all duration-300 ease-out hover:shadow-elevated hover:scale-105 hover:bg-rose-dark active:scale-100 overflow-hidden"
              >
                <span className="relative z-10">Order a Cake</span>
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium text-base text-foreground
                         border border-border bg-card/50 backdrop-blur-sm
                         transition-all duration-300 hover:shadow-card hover:bg-card hover:border-primary/20"
              >
                View Menu
              </a>
            </div>
            
            {/* Stats */}
            <div className={`flex gap-8 pt-8 ${isLoaded ? 'fade-in-up stagger-5' : 'opacity-0'}`}>
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="font-display text-3xl md:text-4xl font-semibold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Cake Designs</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative ${isLoaded ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
            <div className="relative z-10">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
                <img 
                  src={heroCake} 
                  alt="Beautiful three-tiered wedding cake with pink roses"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elevated animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                    <svg className="w-6 h-6 text-rose" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">4.9 Rating</div>
                    <div className="text-sm text-muted-foreground">500+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-soft-pink opacity-30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
