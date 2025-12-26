import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-semibold">
            Sweet<span className="italic text-gradient">Layers</span>
          </a>

          {/* Copyright */}
          <div className="text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Sweet Layers. All rights reserved.</p>
            <p className="mt-1">Shop 12, Beaufort Street, Mount Lawley, Perth WA 6050</p>
          </div>

          {/* Created by */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-rose fill-rose animate-pulse" />
            <span>by</span>
            <span className="font-medium text-foreground hover:text-rose transition-colors duration-300 cursor-pointer">
              Future Forward
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
