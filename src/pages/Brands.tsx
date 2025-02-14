
import { Link } from "react-router-dom";
import { ShoppingCart, User, Instagram, Linkedin } from "lucide-react";

const BrandCard = ({ logo, background }: { logo: string; background: string }) => (
  <div className={`aspect-square rounded-2xl ${background} flex items-center justify-center p-8`}>
    <img src={logo} alt="Brand logo" className="w-full h-auto" />
  </div>
);

const Brands = () => {
  const brands = [
    { logo: "/coca-cola.svg", background: "bg-red-300" },
    { logo: "/omo.svg", background: "bg-orange-300" },
    { logo: "/nestle.svg", background: "bg-orange-300" },
    { logo: "/ype.svg", background: "bg-orange-300" },
    { logo: "/nestle.svg", background: "bg-red-300" },
    { logo: "/ype.svg", background: "bg-red-300" },
    { logo: "/coca-cola.svg", background: "bg-red-300" },
    { logo: "/omo.svg", background: "bg-orange-300" },
    { logo: "/nestle.svg", background: "bg-red-300" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0">
              <img src="/lovable-uploads/e9ff86ae-a553-4693-8dbd-62b108338793.png" alt="Tedie" className="h-8" />
            </Link>
            <nav className="hidden md:flex space-x-12">
              <Link to="/products" className="text-gray-500 hover:text-red-500 transition-colors text-sm font-medium">
                PRODUTOS
              </Link>
              <Link to="/brands" className="text-red-500 text-sm font-medium">
                MARCAS
              </Link>
              <Link to="/about" className="text-gray-500 hover:text-red-500 transition-colors text-sm font-medium">
                SOBRE NÓS
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-red-500 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-red-500 transition-colors">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-yellow-400 mb-16">MARCAS</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={index} {...brand} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/lovable-uploads/e9ff86ae-a553-4693-8dbd-62b108338793.png" alt="Tedie" className="w-32" />
            </div>
            
            <div>
              <h2 className="text-red-500 text-lg font-medium mb-4">EMPRESA</h2>
              <Link to="/about" className="text-gray-600 hover:text-yellow-500 transition-colors">
                Sobre nós
              </Link>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center text-sm text-gray-400 space-x-4">
            <Link to="/cookies" className="hover:text-yellow-500 transition-colors">Cookies</Link>
            <span>-</span>
            <Link to="/privacy" className="hover:text-yellow-500 transition-colors">Privacidades</Link>
            <span>-</span>
            <Link to="/terms" className="hover:text-yellow-500 transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Brands;
