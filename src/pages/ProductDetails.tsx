
import { Link } from "react-router-dom";
import { ShoppingCart, User, Minus, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  // Mock do produto - futuramente virá da API
  const product = {
    id: 1,
    name: "Kit Fitness Premium",
    description: "Mix de frutas frescas com iogurte natural e granola. Perfeito para um café da manhã saudável ou lanche da tarde nutritivo.",
    price: 49.90,
    rating: 4.8,
    reviews: 127,
    stock: 15,
    images: [
      "https://source.unsplash.com/random/800x800?healthy,food,fruits",
      "https://source.unsplash.com/random/800x800?fruits,breakfast",
      "https://source.unsplash.com/random/800x800?granola,yogurt",
    ],
    nutritionalInfo: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "45g",
      fats: "14g",
      fiber: "8g"
    }
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
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
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link to="/profile">
              <User className="h-5 w-5 text-gray-600 hover:text-red-500" />
            </Link>
          </div>
        </div>
      </header>

      {/* Product Details */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{product.reviews} avaliações</span>
              </div>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Informações Nutricionais</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-600 capitalize">{key}: </span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold">R$ {product.price.toFixed(2)}</span>
                <span className="text-sm text-gray-600">{product.stock} unidades disponíveis</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button 
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-2 hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange('increase')}
                    className="p-2 hover:bg-gray-50"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <Button 
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => console.log('Adicionar ao carrinho')}
                >
                  ADICIONAR AO CARRINHO
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

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
                {/* Social Media Links */}
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

export default ProductDetails;
