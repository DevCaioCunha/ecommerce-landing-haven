
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F3]">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/ffd35b60-49b7-42cf-9eb1-e51051e042f9.png" 
              alt="Tedie" 
              className="h-8"
            />
          </Link>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm text-black">1</div>
              <span className="text-xs mt-2">LOGIN</span>
            </div>
            <div className="flex-1 h-[2px] bg-yellow-400 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-sm text-black">2</div>
              <span className="text-xs mt-2">ENTREGA</span>
            </div>
            <div className="flex-1 h-[2px] bg-gray-200 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">3</div>
              <span className="text-xs mt-2">PAGAMENTO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-medium mb-8">RESUMO DO PEDIDO</h2>
          
          <div className="space-y-6">
            {/* Product Items */}
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <img 
                  src="https://source.unsplash.com/random/80x80?cookies" 
                  alt="Biscoito"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Biscoito Marilan Teens Snack Bouny 80g</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-red-500">R$ 4.25</span>
                    <span className="text-sm">x 1</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img 
                  src="https://source.unsplash.com/random/80x80?chocolate,drink" 
                  alt="Toddynho"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="font-medium">Toddynho Achocolatado - sabor chocolate 200ml</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-red-500">R$ 1.99</span>
                    <span className="text-sm">x 2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping and Discount */}
            <div className="space-y-4 pt-6 border-t">
              <div>
                <label className="block text-sm mb-2 text-yellow-400">Calcular Frete</label>
                <Input 
                  type="text" 
                  placeholder="Digite seu CEP"
                  className="max-w-[200px]"
                />
                <p className="text-xs text-yellow-400 mt-1">Não sei meu frete</p>
              </div>

              <div>
                <label className="block text-sm mb-2 text-yellow-400">Desconto</label>
                <div className="flex gap-2">
                  <Input type="text" placeholder="Cupom de desconto" />
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                    APLICAR
                  </Button>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center pt-6 border-t">
              <span className="font-medium">TOTAL:</span>
              <span className="text-red-500 font-medium text-xl">R$ 8.23</span>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-medium">
              CONCLUIR COMPRAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
