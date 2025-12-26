import { useEffect, useRef, useState } from 'react';
import { Heart, Award, Leaf, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every creation is crafted with passion and care, just like grandma used to make."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We source only the finest ingredients from local Perth suppliers."
  },
  {
    icon: Leaf,
    title: "Fresh Daily",
    description: "Baked fresh every morning, never frozen, always delicious."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Proudly serving Perth families and creating sweet memories since 2015."
  }
];

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-28 bg-gradient-to-b from-cream to-background relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blush/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-soft-pink/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-rose font-medium tracking-wider uppercase text-sm mb-3">
            Our Story
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-warm-brown mb-6">
            A Legacy of <span className="text-rose">Sweet</span> Moments
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blush via-rose to-blush mx-auto rounded-full" />
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Story Text */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <h3 className="font-display text-2xl md:text-3xl text-warm-brown mb-6">
              From Our Kitchen to Your Heart
            </h3>
            <div className="space-y-4 text-warm-brown/80 leading-relaxed">
              <p>
                Sweet Layers began in 2015 when founder <strong className="text-warm-brown">Emma Chen</strong> turned 
                her grandmother's treasured recipes into a small home bakery in Mount Lawley. What started 
                as weekend farmers market stalls quickly grew into Perth's most beloved artisan bakery.
              </p>
              <p>
                Today, we're proud to be a part of countless celebrations across Western Australia—from 
                intimate birthday gatherings to grand wedding receptions. Our team of passionate bakers 
                arrives before dawn each day, ensuring every cake, pastry, and treat is baked fresh.
              </p>
              <p>
                We believe that the best desserts are made with <strong className="text-warm-brown">quality ingredients</strong>, 
                <strong className="text-warm-brown"> time-honoured techniques</strong>, and most importantly, 
                <strong className="text-warm-brown"> love</strong>. That's the Sweet Layers promise.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blush to-rose flex items-center justify-center text-white font-display text-2xl shadow-lg">
                E
              </div>
              <div>
                <p className="font-display text-xl text-warm-brown">Emma Chen</p>
                <p className="text-warm-brown/60 text-sm">Founder & Head Baker</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div 
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-blush/50 to-rose/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-display text-6xl text-rose">🎂</span>
                    <p className="mt-4 font-display text-2xl text-warm-brown">Baking Joy Since 2015</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center">
                    <Award className="w-6 h-6 text-rose" />
                  </div>
                  <div>
                    <p className="font-display text-warm-brown">Perth's Best</p>
                    <p className="text-xs text-warm-brown/60">Bakery Awards 2023</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Card */}
              <div className="absolute -top-4 -right-4 bg-rose text-white rounded-xl p-4 shadow-xl z-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <p className="font-display text-3xl">8+</p>
                <p className="text-sm opacity-90">Years of Sweetness</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cream to-blush flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-rose" />
              </div>
              <h4 className="font-display text-xl text-warm-brown mb-2">{value.title}</h4>
              <p className="text-warm-brown/70 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
