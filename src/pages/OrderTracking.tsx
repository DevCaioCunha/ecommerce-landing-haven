
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const OrderTracking = () => {
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

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-[#FFF1E6] rounded-2xl p-6 md:p-8">
          <h1 className="text-3xl font-bold text-yellow-400 mb-8">
            ACOMPANHAMENTO DO PEDIDO
          </h1>

          {/* Order Items */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://source.unsplash.com/random/80x80?cookies" 
                alt="Biscoito"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium">Biscoito Marilan Teens Snack Bouny 80g</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-red-500">R$ 4.25</span>
                  <span className="text-sm">Unidade: 1</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img 
                src="https://source.unsplash.com/random/80x80?chocolate,drink" 
                alt="Toddynho"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-medium">Toddynho Achocolatado - sabor chocolate 200ml</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-red-500">R$ 1.99</span>
                  <span className="text-sm">Unidade: 2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <Link to="/detalhes-pedido" className="text-gray-600 hover:text-red-500 underline">
              Detalhes do pedido
            </Link>
            <div className="mt-4 md:mt-0">
              <p className="text-sm">TOTAL: <span className="text-red-500 font-medium">R$8.23</span></p>
              <p className="text-sm">ID DO PEDIDO: <span className="text-yellow-400">1234567890</span></p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="relative">
            <div className="flex justify-between mb-4">
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-400 flex items-center justify-center mb-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Pedido<br />Realizado</p>
              </div>
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-400 flex items-center justify-center mb-2">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Pagamento<br />concluído</p>
              </div>
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                  <div className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Pedido<br />Enviado</p>
              </div>
              <div className="flex-1 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                  <div className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium">Pedido<br />Entregue</p>
              </div>
            </div>
            {/* Progress Line */}
            <div className="absolute top-6 left-0 w-full h-[2px] bg-yellow-100">
              <div className="w-1/2 h-full bg-yellow-400" />
            </div>
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
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-500"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/>
                  </svg>
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

export default OrderTracking;
