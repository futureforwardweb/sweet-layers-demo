interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  delay?: number;
}

const ProductCard = ({ image, title, description, price, delay = 0 }: ProductCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-3xl overflow-hidden card-hover"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick view button */}
        <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                         bg-card text-foreground px-6 py-2.5 rounded-full font-medium text-sm
                         transition-all duration-500 ease-out hover:bg-primary hover:text-primary-foreground shadow-card">
          Quick View
        </button>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-rose transition-colors duration-300">
            {title}
          </h3>
          <span className="text-lg font-medium text-rose shrink-0">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Add to cart indicator */}
        <div className="flex items-center gap-2 pt-2 text-muted-foreground group-hover:text-rose transition-colors duration-300">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm font-medium">Add to Order</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
