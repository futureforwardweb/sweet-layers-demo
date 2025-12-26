import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import chocolateCake from '@/assets/chocolate-cake.jpg';
import vanillaCake from '@/assets/vanilla-cake.jpg';
import pastries from '@/assets/pastries.jpg';
import rainbowCake from '@/assets/rainbow-cake.jpg';
import macarons from '@/assets/macarons.jpg';
import heroCake from '@/assets/hero-cake.jpg';

const products = [
  {
    image: chocolateCake,
    title: "Chocolate Decadence",
    description: "Rich Belgian chocolate layers with silky ganache and fresh berries",
    price: "From $85"
  },
  {
    image: vanillaCake,
    title: "Rose Petal Dream",
    description: "Delicate vanilla sponge with rose buttercream and edible flowers",
    price: "From $75"
  },
  {
    image: rainbowCake,
    title: "Rainbow Celebration",
    description: "Vibrant layers of color perfect for birthdays and special moments",
    price: "From $95"
  },
  {
    image: pastries,
    title: "Artisan Croissants",
    description: "Freshly baked French croissants with buttery, flaky layers",
    price: "From $6"
  },
  {
    image: macarons,
    title: "French Macarons",
    description: "Delicate almond shells with premium flavored fillings",
    price: "From $4"
  },
  {
    image: heroCake,
    title: "Wedding Elegance",
    description: "Custom tiered cakes adorned with fresh roses and gold leaf",
    price: "From $350"
  }
];

const ProductsSection = () => {
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
    <section id="products" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block text-rose font-body text-sm tracking-[0.2em] uppercase mb-4">
            Our Creations
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
            Baked with <span className="italic text-gradient">Love</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Each creation is handcrafted with the finest ingredients, bringing your sweetest dreams to life.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.title} 
              className={isVisible ? 'fade-in-up' : 'opacity-0'}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-16 ${isVisible ? 'fade-in-up stagger-6' : 'opacity-0'}`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-base
                     border-2 border-primary text-foreground
                     transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-elevated hover:scale-105"
          >
            View Full Menu
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
