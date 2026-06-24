import { useState, useRef, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoPrime from '@/assets/logo-prime-transparent.png';
import { goToHomeSection, goToRouteTop } from '@/lib/navigation';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Quem Somos', id: 'quem-somos' },
  {
    name: 'Serviços',
    id: 'servicos',
    submenu: [
      { name: 'Prime Alimentos e Bebidas', href: '#/servicos/alimentos' },
      { name: 'Prime Produção e Qualidade', href: '#/servicos/producao' },
      { name: 'Prime Ambiental', href: '#/servicos/ambiental' },
    ],
  },
  { name: 'Portfólio', id: 'portfolio' },
  { name: 'Contato', id: 'contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container-prime">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#/" onClick={(e) => { e.preventDefault(); goToHomeSection('home'); }} className="flex items-center gap-3">
            <img src={logoPrime} alt="Prime Engenharia e Consultoria" className="h-24 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.submenu ? (
                <div key={link.name} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl border border-border/50 shadow-lg py-2 animate-fade-in">
                      {link.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              goToRouteTop(sub.href.replace('#', ''));
                              setIsServicesOpen(false);
                            }}
                            className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-accent transition-colors"
                          >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => goToHomeSection(link.id)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {link.name}
                </button>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5573988043664" className="flex items-center gap-2 text-sm text-foreground/70">
              <Phone className="w-4 h-4 text-primary" />
              (73) 9 8804-3664
            </a>
            <Button variant="prime" size="default" asChild>
              <a href="#/" onClick={(e) => { e.preventDefault(); goToHomeSection('contato'); }}>Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div key={link.name}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 bg-transparent border-none cursor-pointer text-left"
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="pl-4 space-y-1 pb-2">
                        {link.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              goToRouteTop(sub.href.replace('#', ''));
                              setIsMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block text-sm text-foreground/70 hover:text-primary py-2 transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => { goToHomeSection(link.id); setIsMenuOpen(false); }}
                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2 bg-transparent border-none cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                )
              )}
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <a href="tel:+5573988043664" className="flex items-center gap-2 text-foreground/70">
                  <Phone className="w-4 h-4 text-primary" />
                  (73) 9 8804-3664
                </a>
                <Button variant="prime" asChild>
                  <a href="#/" onClick={(e) => { e.preventDefault(); goToHomeSection('contato'); }}>Fale Conosco</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
