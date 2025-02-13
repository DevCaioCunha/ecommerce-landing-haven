
import { useState, useEffect } from "react";
import { Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Biscoito Marilan Teens Snack Bouny 80g",
      price: 4.25,
      quantity: 1,
      image: "https://source.unsplash.com/random/80x80?cookies"
    },
    {
      id: 2,
      name: "Toddynho Achocolatado - sabor chocolate 200ml",
      price: 1.99,
      quantity: 2,
      image: "https://source.unsplash.com/random/80x80?chocolate,drink"
    }
  ]);

  // Controla o scroll do body quando o carrinho está aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const updateQuantity = (id: number, increment: boolean) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  return (
    <>
      {/* Overlay escuro */}
      <div className="fixed inset-0 bg-black/50 z-50" />
      
      {/* Carrinho */}
      <div className="fixed right-0 top-0 h-screen w-[400px] bg-[#FFF8F3] shadow-lg z-[60]">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-medium">Carrinho de Compras</h2>
          </div>

          <div className="flex-1 overflow-auto p-6">
            {items.map(item => (
              <div key={item.id} className="flex gap-4 mb-6">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-medium">
                      R$ {item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <button 
                          onClick={() => updateQuantity(item.id, true)}
                          className="p-1 hover:text-yellow-500 transition-colors"
                        >
                          <ChevronUp className="w-4 h-4" />
                        </button>
                        <span className="text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, false)}
                          className="p-1 hover:text-yellow-500 transition-colors"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Subtotal:</span>
              <span className="text-red-500 font-medium text-lg">
                R$ {getSubtotal().toFixed(2)}
              </span>
            </div>
            <Button 
              className={cn(
                "w-full bg-red-600 hover:bg-red-700 text-white",
                "py-6 text-base font-medium"
              )}
            >
              FINALIZAR PEDIDO
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
