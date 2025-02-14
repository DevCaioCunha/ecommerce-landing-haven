
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

const Brands = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0">
              <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Tedie" className="h-8" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/products" className="text-gray-700 hover:text-red-500 transition-colors">PRODUTOS</Link>
              <Link to="/brands" className="text-red-500 transition-colors">MARCAS</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-500 transition-colors">SOBRE NÓS</Link>
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

      {/* Hero Logo */}
      <div className="pt-32 pb-16">
        <div className="max-w-[240px] mx-auto">
          <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Tedie" className="w-full" />
          <p className="text-red-500 text-center mt-4">SIMPLES ASSIM</p>
        </div>
      </div>

      {/* First Section */}
      <section className="bg-yellow-400 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-red-600">tedie - Simples Assim!</h1>
              <p className="text-white text-lg leading-relaxed">
                um marketplace inovador que utiliza a inteligência artificial para facilitar a busca 
                de produtos para você. Nossa missão é simplificar a sua experiência de compra, 
                oferecendo uma plataforma intuitiva e eficiente que conecta você aos melhores 
                produtos disponíveis no mercado.
              </p>
            </div>
            <div className="relative h-[500px]">
              <img 
                src="https://source.unsplash.com/random/600x800?person,phone,coffee" 
                alt="Person using phone" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-red-400 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] order-2 md:order-1">
              <img 
                src="https://source.unsplash.com/random/600x800?person,eating,happy" 
                alt="Person eating" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <div className="flex justify-end mb-8">
                <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Tedie Icon" className="w-16 h-16" />
              </div>
              <div className="text-white">
                <p className="text-lg mb-2">Estamos presentes nos <span className="font-bold">melhores momentos</span>,</p>
                <p className="text-lg leading-relaxed">
                  em um almoço de família, em um jantar com os amigos, e até mesmo em um piquinique durante o café da manhã
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Tedie" className="h-8" />
            <div className="flex space-x-8 text-sm text-gray-500">
              <Link to="/privacy" className="hover:text-yellow-500 transition-colors">PRIVACIDADE</Link>
              <Link to="/terms" className="hover:text-yellow-500 transition-colors">TERMOS E CONDIÇÕES</Link>
              <Link to="/creators" className="hover:text-yellow-500 transition-colors">PROGRAMA CREATORS</Link>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Tedie. Simples assim!
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Brands;
