
import { useState } from "react";
import { Search, ShoppingCart, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Logo" className="h-8" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">PRODUTOS</a>
              <a href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">MARCAS</a>
              <a href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">SOBRE NÓS</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:text-yellow-500 transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="p-2 hover:text-yellow-500 transition-colors">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Logo" className="h-16 mx-auto" />
          <h2 className="text-lg text-yellow-500">SIMPLES ASSIM</h2>
          <div className="relative">
            <Input
              type="text"
              placeholder="Digite qual seu desejo para hoje?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <p className="text-red-500 text-sm">NÃO SEI COMO USAR</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h3 className="text-red-500 font-medium">A LOJA DOS SEUS</h3>
            <h2 className="text-2xl font-semibold">PRODUTOS FAVORITOS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative aspect-square">
                  <img 
                    src={`https://source.unsplash.com/random/400x400?product=${item}`}
                    alt="Product"
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creators Section */}
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

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <img src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" alt="Logo" className="h-8" />
          <div className="flex space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-yellow-500 transition-colors">PRIVACIDADE</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">TERMOS E CONDIÇÕES</a>
            <a href="#" className="hover:text-yellow-500 transition-colors">PROGRAMA CREATORS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
