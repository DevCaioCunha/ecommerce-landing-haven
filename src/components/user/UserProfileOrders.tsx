
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronRight, ShoppingBag } from "lucide-react";

// Mock data for orders
const orders = [
  {
    id: "12345",
    date: "15/05/2023",
    status: "Entregue",
    total: "R$ 125,90",
    items: [
      {
        id: "1",
        name: "Biscoito Marilan Teens Snack Bouny 80g",
        price: "R$ 4,25",
        quantity: 2,
        image: "https://source.unsplash.com/random/80x80?cookies"
      },
      {
        id: "2",
        name: "Toddynho Achocolatado - sabor chocolate 200ml",
        price: "R$ 1,99",
        quantity: 3,
        image: "https://source.unsplash.com/random/80x80?chocolate,drink"
      }
    ]
  },
  {
    id: "12346",
    date: "22/04/2023",
    status: "Entregue",
    total: "R$ 87,50",
    items: [
      {
        id: "3",
        name: "Salgadinho Doritos Nacho 140g",
        price: "R$ 12,50",
        quantity: 1,
        image: "https://source.unsplash.com/random/80x80?chips"
      },
      {
        id: "4",
        name: "Refrigerante Coca-Cola 2L",
        price: "R$ 9,99",
        quantity: 2,
        image: "https://source.unsplash.com/random/80x80?soda"
      }
    ]
  },
  {
    id: "12347",
    date: "10/04/2023",
    status: "Entregue",
    total: "R$ 45,75",
    items: [
      {
        id: "5",
        name: "Chocolate Lacta ao Leite 90g",
        price: "R$ 7,99",
        quantity: 3,
        image: "https://source.unsplash.com/random/80x80?chocolate"
      }
    ]
  }
];

const UserProfileOrders = () => {
  const [expandedOrders, setExpandedOrders] = useState<string[]>([]);

  const toggleOrderExpand = (orderId: string) => {
    setExpandedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId) 
        : [...prev, orderId]
    );
  };

  const isOrderExpanded = (orderId: string) => {
    return expandedOrders.includes(orderId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Histórico de Pedidos</h2>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium mb-2">Nenhum pedido encontrado</h3>
          <p className="text-gray-500 mb-4">Você ainda não fez nenhum pedido.</p>
          <Link to="/">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black">
              Explorar produtos
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white rounded-lg overflow-hidden">
              {/* Order header */}
              <div className="p-4 border-b flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Pedido #{order.id}</span>
                    <span className="text-xs text-gray-500">{order.date}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      <Check className="mr-1 h-3 w-3" />
                      {order.status}
                    </span>
                    <span className="text-sm font-medium">{order.total}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-500 p-1"
                  onClick={() => toggleOrderExpand(order.id)}
                >
                  {isOrderExpanded(order.id) ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </Button>
              </div>

              {/* Order details - only shown when expanded */}
              {isOrderExpanded(order.id) && (
                <div className="p-4">
                  <div className="space-y-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <img 
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium">{item.name}</h4>
                          <div className="flex justify-between mt-1">
                            <span className="text-sm text-gray-500">Qtd: {item.quantity}</span>
                            <span className="text-sm font-medium">{item.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-between pt-4 border-t">
                    <Link to={`/order-tracking?id=${order.id}`}>
                      <Button variant="outline" size="sm">
                        Acompanhar pedido
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-red-500 border-red-200 hover:bg-red-50"
                    >
                      Comprar novamente
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProfileOrders;
