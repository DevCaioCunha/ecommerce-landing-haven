
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";

const Address = () => {
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
        <div className="bg-[#FFF1E6] rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-medium mb-8 text-yellow-400">ENDEREÇO</h2>
          
          <div className="space-y-6">
            {/* CEP Input */}
            <div>
              <label className="block text-sm mb-2">CEP</label>
              <div className="relative">
                <Input 
                  type="text" 
                  className="bg-white border-0 pr-10"
                  placeholder="Digite seu CEP"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Address Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm mb-2">RUA</label>
                <Input type="text" className="bg-white border-0" />
              </div>

              <div>
                <label className="block text-sm mb-2">NÚMERO</label>
                <Input type="text" className="bg-white border-0" />
              </div>

              <div>
                <label className="block text-sm mb-2">COMPLEMENTO</label>
                <Input type="text" className="bg-white border-0" />
              </div>

              <div>
                <label className="block text-sm mb-2">BAIRRO</label>
                <Input type="text" className="bg-white border-0" />
              </div>

              <div>
                <label className="block text-sm mb-2">CIDADE</label>
                <Input type="text" className="bg-white border-0" />
              </div>

              <div>
                <label className="block text-sm mb-2">ESTADO</label>
                <Input type="text" className="bg-white border-0" />
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                SALVAR
              </Button>
            </div>

            {/* Saved Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
              <div className="bg-white rounded-lg p-4 relative">
                <h3 className="font-medium text-yellow-400 mb-2">CASA</h3>
                <p className="text-sm">Rua Gabriel Ferreira, 52</p>
                <p className="text-sm">Centro</p>
                <p className="text-sm">São João da Boa Vista - SP</p>
                <p className="text-sm">13870-180</p>
                <button className="absolute bottom-4 right-4 text-red-500 text-sm">
                  editar
                </button>
              </div>

              <div className="bg-white rounded-lg p-4 relative">
                <h3 className="font-medium text-yellow-400 mb-2">TRABALHO</h3>
                <p className="text-sm">Rua Gabriel Ferreira, 52</p>
                <p className="text-sm">Centro</p>
                <p className="text-sm">São João da Boa Vista - SP</p>
                <p className="text-sm">13870-180</p>
                <button className="absolute bottom-4 right-4 text-red-500 text-sm">
                  editar
                </button>
              </div>

              <button className="bg-white rounded-lg p-4 flex items-center justify-center text-red-500">
                <Plus className="h-6 w-6" />
              </button>
            </div>

            {/* Delivery Options */}
            <div className="pt-8">
              <h3 className="text-xl font-medium text-yellow-400 mb-6">FORMA DE ENTREGA</h3>
              
              <div className="space-y-4">
                <label className="flex items-center justify-between bg-white rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center">
                    <input type="radio" name="delivery" className="mr-3" defaultChecked />
                    <span>Expresso</span>
                  </div>
                  <div className="text-sm">
                    <p>Receba até dia 31 de julho</p>
                    <p className="text-red-500">R$2,99</p>
                  </div>
                </label>

                <label className="flex items-center justify-between bg-white rounded-lg p-4 cursor-pointer">
                  <div className="flex items-center">
                    <input type="radio" name="delivery" className="mr-3" />
                    <span>Econômico</span>
                  </div>
                  <div className="text-sm">
                    <p>Receba até dia 05 de agosto</p>
                    <p className="text-green-500">Grátis</p>
                  </div>
                </label>
              </div>
            </div>

            <Button 
              className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-base font-medium"
              onClick={() => window.location.href = '/checkout'}
            >
              FINALIZAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
