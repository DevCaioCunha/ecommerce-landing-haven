
import { Link } from "react-router-dom";
import { Check, Instagram, Linkedin, MessageCircle } from "lucide-react";

const OrderComplete = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/">
            <img 
              src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
              alt="Tedie" 
              className="h-8"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/produtos" className="text-gray-600 hover:text-red-500">PRODUTOS</Link>
            <Link to="/marcas" className="text-red-500">MARCAS</Link>
            <Link to="/combos" className="text-gray-600 hover:text-red-500">COMBOS</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-red-500 relative">
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
              🛒
            </Link>
            <Link to="/profile" className="text-red-500">
              👤
            </Link>
          </div>
        </div>
      </header>

      {/* Success Message */}
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          PEDIDO REALIZADO COM SUCESSO
        </h1>
        <div className="bg-yellow-50 rounded-lg py-2 px-4 inline-block mb-8">
          <p className="text-yellow-400">ID DO PEDIDO: 1234567890</p>
        </div>
        <p className="text-xl mb-12">
          Obrigado, seu pedido foi realizado com sucesso! Em breve, receberá um e-mail com todos os detalhes
        </p>
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center">
            <Check className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
                alt="Tedie Logo" 
                className="w-32 mb-8"
              />
            </div>
            <div>
              <h3 className="text-red-500 font-medium mb-4">EMPRESA</h3>
              <Link to="/about" className="block text-gray-600 hover:text-red-500 mb-2">
                Sobre nós
              </Link>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            <div className="flex justify-center space-x-4">
              <Link to="/cookies" className="hover:text-red-500">Cookies</Link>
              <span>-</span>
              <Link to="/privacidade" className="hover:text-red-500">Privacidades</Link>
              <span>-</span>
              <Link to="/termos" className="hover:text-red-500">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OrderComplete;
