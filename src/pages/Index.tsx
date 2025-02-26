import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const searchResults = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/400x400?healthy,food,fruits",
      title: "Kit Fitness Premium",
      description: "Mix de frutas frescas com iogurte natural",
      tag: "MAIS PESQUISADO",
      price: "R$ 49,90"
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/400x400?protein,smoothie",
      title: "Protein Shake",
      description: "Shake proteico com frutas vermelhas",
      price: "R$ 29,90"
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/400x400?salad,healthy",
      title: "Salada Power",
      description: "Salada completa com mix de proteínas",
      price: "R$ 39,90"
    },
    {
      id: 4,
      image: "https://source.unsplash.com/random/400x400?granola,cereal",
      title: "Granola Artesanal",
      description: "Mix de cereais e frutas secas",
      price: "R$ 24,90"
    },
    {
      id: 5,
      image: "https://source.unsplash.com/random/400x400?juice,detox",
      title: "Suco Detox",
      description: "Blend de vegetais e frutas",
      price: "R$ 15,90"
    },
    {
      id: 6,
      image: "https://source.unsplash.com/random/400x400?nuts,almonds",
      title: "Mix de Castanhas",
      description: "Seleção premium de castanhas",
      price: "R$ 34,90"
    },
    {
      id: 7,
      image: "https://source.unsplash.com/random/400x400?yogurt,berries",
      title: "Iogurte com Frutas",
      description: "Iogurte natural com mix de berries",
      price: "R$ 19,90"
    },
    {
      id: 8,
      image: "https://source.unsplash.com/random/400x400?acai,bowl",
      title: "Açaí Bowl",
      description: "Açaí com granola e frutas frescas",
      price: "R$ 27,90"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  const products = [
    {
      id: 1,
      image: "https://source.unsplash.com/random/400x400?healthy,food,fruits",
      title: "Kit Fitness Premium",
      description: "Mix de frutas frescas com iogurte natural",
      tag: "MAIS PESQUISADO",
      price: "R$ 49,90"
    },
    {
      id: 2,
      image: "https://source.unsplash.com/random/400x400?protein,smoothie",
      title: "Protein Shake",
      description: "Shake proteico com frutas vermelhas",
      price: "R$ 29,90"
    },
    {
      id: 3,
      image: "https://source.unsplash.com/random/400x400?salad,healthy",
      title: "Salada Power",
      description: "Salada completa com mix de proteínas",
      price: "R$ 39,90"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Logo" className="h-8" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link to="#" className="text-gray-700 hover:text-yellow-500 transition-colors">PRODUTOS</Link>
              <Link to="/brands" className="text-gray-700 hover:text-yellow-500 transition-colors">MARCAS</Link>
              <Link to="#" className="text-gray-700 hover:text-yellow-500 transition-colors">SOBRE NÓS</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 hover:text-yellow-500 transition-colors"
                onClick={() => navigate("/checkout")}
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-yellow-500 transition-colors">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Logo" className="h-16 mx-auto" />
          <h2 className="text-lg text-yellow-500">SIMPLES ASSIM</h2>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <Input
                type="text"
                placeholder="Digite qual seu desejo para hoje?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
              <button type="submit">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition-colors" />
              </button>
            </div>
          </form>
          <p className="text-red-500 text-sm">NÃO SEI COMO USAR</p>
        </div>
      </section>

      {hasSearched && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h3 className="text-red-500 font-medium">RESULTADOS PARA</h3>
              <h2 className="text-2xl font-semibold">"{searchQuery}"</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {searchResults.map((product) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="relative">
                    <div className="relative aspect-square">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.tag && (
                        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                          <Flame className="w-4 h-4 text-red-500" />
                          <span className="text-xs font-medium">{product.tag}</span>
                        </div>
                      )}
                      <button 
                        className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <Search className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">{product.price}</span>
                        <Button 
                          className="bg-yellow-500 hover:bg-yellow-600 text-white"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          COMPRAR
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {!hasSearched && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h3 className="text-red-500 font-medium">A LOJA DOS SEUS</h3>
              <h2 className="text-2xl font-semibold">PRODUTOS FAVORITOS</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="relative aspect-square">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.tag && (
                        <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-md">
                          <Flame className="w-4 h-4 text-red-500" />
                          <span className="text-xs font-medium">{product.tag}</span>
                        </div>
                      )}
                      <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                        <Search className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">{product.price}</span>
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                          COMPRAR
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-12 text-white">tedie creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-4">
                <div className="relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/300x400?creator=${item}`}
                    alt="Creator"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-600 transition-colors">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  EU QUERO
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Logo" className="h-8" />
          <div className="flex space-x-8 text-sm text-gray-500">
            <Link to="#" className="hover:text-yellow-500 transition-colors">PRIVACIDADE</Link>
            <Link to="#" className="hover:text-yellow-500 transition-colors">TERMOS E CONDIÇÕES</Link>
            <Link to="#" className="hover:text-yellow-500 transition-colors">PROGRAMA CREATORS</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
